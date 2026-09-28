import { expect, test } from '../../support/fixtures';
import { novoUsuario } from '../../support/factories';

test.describe('API ServeRest - /usuarios', () => {
  const criados: string[] = [];

  test.afterEach(async ({ api }) => {
    // Limpa a massa de testes para não poluir a instância pública
    while (criados.length) await api.excluirUsuario(criados.pop()!);
  });

  test('cadastra usuário e o recupera por id', { tag: '@smoke' }, async ({ api }) => {
    const usuario = novoUsuario();

    const cadastro = await api.criarUsuario(usuario);
    expect(cadastro.status()).toBe(201);
    const corpo = await cadastro.json();
    expect(corpo).toEqual({ message: 'Cadastro realizado com sucesso', _id: expect.any(String) });
    criados.push(corpo._id);

    const consulta = await api.buscarUsuario(corpo._id);
    expect(consulta.status()).toBe(200);
    expect(await consulta.json()).toMatchObject({
      _id: corpo._id,
      nome: usuario.nome,
      email: usuario.email,
      administrador: usuario.administrador,
    });
  });

  test('listagem filtrada por e-mail respeita o contrato', { tag: '@regression' }, async ({ api }) => {
    const usuario = novoUsuario();
    const { _id } = await (await api.criarUsuario(usuario)).json();
    criados.push(_id);

    const resposta = await api.listarUsuarios({ email: usuario.email });
    expect(resposta.status()).toBe(200);
    expect(await resposta.json()).toEqual({
      quantidade: 1,
      usuarios: [
        {
          _id,
          nome: expect.any(String),
          email: usuario.email,
          password: expect.any(String),
          administrador: expect.stringMatching(/^(true|false)$/),
        },
      ],
    });
  });

  test('não permite e-mail duplicado', { tag: '@regression' }, async ({ api }) => {
    const usuario = novoUsuario();
    const { _id } = await (await api.criarUsuario(usuario)).json();
    criados.push(_id);

    const duplicado = await api.criarUsuario({ ...usuario, nome: 'Outro nome' });
    expect(duplicado.status()).toBe(400);
    expect(await duplicado.json()).toEqual({ message: 'Este email já está sendo usado' });
  });

  test('valida campos obrigatórios', { tag: '@regression' }, async ({ request }) => {
    const resposta = await request.post('/usuarios', { data: {} });

    expect(resposta.status()).toBe(400);
    expect(await resposta.json()).toEqual({
      nome: 'nome é obrigatório',
      email: 'email é obrigatório',
      password: 'password é obrigatório',
      administrador: 'administrador é obrigatório',
    });
  });

  test('rejeita e-mail em formato inválido', { tag: '@regression' }, async ({ api }) => {
    const resposta = await api.criarUsuario(novoUsuario({ email: 'email-invalido' }));

    expect(resposta.status()).toBe(400);
    expect(await resposta.json()).toEqual({ email: 'email deve ser um email válido' });
  });

  test('exclui usuário e ele deixa de existir', { tag: '@regression' }, async ({ api }) => {
    const { _id } = await (await api.criarUsuario(novoUsuario())).json();

    const exclusao = await api.excluirUsuario(_id);
    expect(exclusao.status()).toBe(200);
    expect(await exclusao.json()).toEqual({ message: 'Registro excluído com sucesso' });

    const consulta = await api.buscarUsuario(_id);
    expect(consulta.status()).toBe(400);
    expect(await consulta.json()).toEqual({ message: 'Usuário não encontrado' });
  });
});

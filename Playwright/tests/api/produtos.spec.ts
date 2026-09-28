import { expect, test } from '../../support/fixtures';
import { novoProduto, novoUsuario } from '../../support/factories';

test.describe('API ServeRest - /produtos', () => {
  let admin: { id: string; token: string };
  const produtos: string[] = [];

  test.beforeEach(async ({ api }) => {
    admin = await api.autenticar(novoUsuario({ administrador: 'true' }));
  });

  test.afterEach(async ({ api }) => {
    while (produtos.length) await api.excluirProduto(produtos.pop()!, admin.token);
    await api.excluirUsuario(admin.id);
  });

  test('administrador cadastra produto', { tag: '@smoke' }, async ({ api }) => {
    const produto = novoProduto();

    const cadastro = await api.criarProduto(produto, admin.token);
    expect(cadastro.status()).toBe(201);
    const { _id } = await cadastro.json();
    produtos.push(_id);

    const consulta = await api.buscarProduto(_id);
    expect(consulta.status()).toBe(200);
    expect(await consulta.json()).toMatchObject({ _id, ...produto });
  });

  test('cadastro sem token é negado', { tag: '@regression' }, async ({ api }) => {
    const resposta = await api.criarProduto(novoProduto());

    expect(resposta.status()).toBe(401);
    expect(await resposta.json()).toEqual({
      message: 'Token de acesso ausente, inválido, expirado ou usuário do token não existe mais',
    });
  });

  test('usuário comum não cadastra produto', { tag: '@regression' }, async ({ api }) => {
    const comum = await api.autenticar(novoUsuario({ administrador: 'false' }));

    const resposta = await api.criarProduto(novoProduto(), comum.token);
    await api.excluirUsuario(comum.id);

    expect(resposta.status()).toBe(403);
    expect(await resposta.json()).toEqual({ message: 'Rota exclusiva para administradores' });
  });

  test('não permite produto com nome duplicado', { tag: '@regression' }, async ({ api }) => {
    const produto = novoProduto();
    const { _id } = await (await api.criarProduto(produto, admin.token)).json();
    produtos.push(_id);

    const duplicado = await api.criarProduto(produto, admin.token);
    expect(duplicado.status()).toBe(400);
    expect(await duplicado.json()).toEqual({ message: 'Já existe produto com esse nome' });
  });
});

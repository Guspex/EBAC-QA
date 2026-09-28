import { expect, test } from '../../support/fixtures';
import { novoUsuario } from '../../support/factories';

test.describe('API ServeRest - /login', () => {
  const usuario = novoUsuario();
  let idUsuario: string;

  test.beforeAll(async ({ request }) => {
    const resposta = await request.post('/usuarios', { data: usuario });
    expect(resposta.status()).toBe(201);
    idUsuario = (await resposta.json())._id;
  });

  test.afterAll(async ({ request }) => {
    await request.delete(`/usuarios/${idUsuario}`);
  });

  test('credenciais válidas retornam token Bearer', { tag: '@smoke' }, async ({ api }) => {
    const resposta = await api.login(usuario.email, usuario.password);

    expect(resposta.status()).toBe(200);
    expect(await resposta.json()).toEqual({
      message: 'Login realizado com sucesso',
      authorization: expect.stringMatching(/^Bearer [\w-]+\.[\w-]+\.[\w-]+$/),
    });
  });

  test('senha incorreta retorna 401', { tag: '@regression' }, async ({ api }) => {
    const resposta = await api.login(usuario.email, 'senha-incorreta');

    expect(resposta.status()).toBe(401);
    expect(await resposta.json()).toEqual({ message: 'Email e/ou senha inválidos' });
  });

  test('e-mail e senha são obrigatórios', { tag: '@regression' }, async ({ request }) => {
    const resposta = await request.post('/login', { data: {} });

    expect(resposta.status()).toBe(400);
    expect(await resposta.json()).toEqual({
      email: 'email é obrigatório',
      password: 'password é obrigatório',
    });
  });
});

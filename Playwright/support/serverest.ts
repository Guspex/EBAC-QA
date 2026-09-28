import { APIRequestContext, expect } from '@playwright/test';
import { Produto, Usuario } from './factories';

// Cliente fino da API ServeRest: centraliza os endpoints para que os testes
// descrevam o comportamento esperado, e não detalhes de requisição.
export class ServeRestClient {
  constructor(private readonly request: APIRequestContext) {}

  criarUsuario(usuario: Usuario) {
    return this.request.post('/usuarios', { data: usuario });
  }

  buscarUsuario(id: string) {
    return this.request.get(`/usuarios/${id}`);
  }

  listarUsuarios(params: Record<string, string> = {}) {
    return this.request.get('/usuarios', { params });
  }

  excluirUsuario(id: string) {
    return this.request.delete(`/usuarios/${id}`);
  }

  login(email: string, password: string) {
    return this.request.post('/login', { data: { email, password } });
  }

  criarProduto(produto: Produto, token?: string) {
    return this.request.post('/produtos', {
      data: produto,
      headers: token ? { Authorization: token } : {},
    });
  }

  buscarProduto(id: string) {
    return this.request.get(`/produtos/${id}`);
  }

  excluirProduto(id: string, token: string) {
    return this.request.delete(`/produtos/${id}`, { headers: { Authorization: token } });
  }

  /** Cria um usuário e devolve seu id e token, para testes que exigem autenticação. */
  async autenticar(usuario: Usuario): Promise<{ id: string; token: string }> {
    const cadastro = await this.criarUsuario(usuario);
    expect(cadastro.status(), await cadastro.text()).toBe(201);
    const { _id } = await cadastro.json();

    const login = await this.login(usuario.email, usuario.password);
    expect(login.status(), await login.text()).toBe(200);
    const { authorization } = await login.json();

    return { id: _id, token: authorization };
  }
}

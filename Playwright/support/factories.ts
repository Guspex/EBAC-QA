// Gera massa de testes única por execução, evitando conflito de dados
// na instância pública da ServeRest (e-mails e nomes de produto são únicos).
const sufixo = () => `${Date.now()}${Math.floor(Math.random() * 10_000)}`;

export type Usuario = {
  nome: string;
  email: string;
  password: string;
  administrador: 'true' | 'false';
};

export type Produto = {
  nome: string;
  preco: number;
  descricao: string;
  quantidade: number;
};

export function novoUsuario(overrides: Partial<Usuario> = {}): Usuario {
  const id = sufixo();
  return {
    nome: `QA Playwright ${id}`,
    email: `qa.playwright.${id}@teste.com.br`,
    password: 'Senha@123',
    administrador: 'true',
    ...overrides,
  };
}

export function novoProduto(overrides: Partial<Produto> = {}): Produto {
  return {
    nome: `Produto Playwright ${sufixo()}`,
    preco: 150,
    descricao: 'Produto criado por teste automatizado',
    quantidade: 10,
    ...overrides,
  };
}

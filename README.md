# 🛒 API E-commerce

API desenvolvida em Node.js com TypeScript para simular as funcionalidades básicas de um sistema de e-commerce. O projeto segue uma arquitetura em camadas (limpa), separando domínio, infraestrutura, casos de uso e interfaces.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Sequelize ORM
- MySQL
- JWT (Autenticação)
- Bcrypt (Hash de senhas)
- Winston (Logs)
- Dotenv (Configurações de ambiente)

---

## 🧱 Estrutura de Pastas

```bash
.
├── src/
│   ├── adapters/                 # Adaptadores para integração
│   ├── apis/                     # Entrypoint das APIs (Express)
│   │   └── app/
│   │       └── app.ts            # Inicialização do servidor
│   ├── config/                   # Configurações do projeto
│   │   ├── api.config.ts
│   │   ├── constants.ts
│   │   └── database.config.ts
│   ├── controllers/             # Camada de controle das rotas
│   ├── domain/
│   │   ├── entities/             # Entidades do domínio
│   │   └── repositories/         # Interfaces dos repositórios
│   ├── infrastructure/
│   │   ├── logs/                 # Configuração de logs
│   │   └── persistence/          # Implementação dos repositórios
│   ├── middlewares/            # Middlewares da aplicação
│   ├── repositories/           # Repositórios concretos
│   │   ├── categoria.repository.ts
│   │   ├── pedido.repository.ts
│   │   ├── pessoa.repository.ts
│   │   └── produto.repository.ts
│   ├── routes/                  # Definição de rotas
│   ├── usecases/                # Casos de uso da aplicação
│   │   ├── auth/
│   │   ├── categorias/
│   │   ├── pedidos/
│   │   ├── pessoas/
│   │   ├── produtos/
│   │   └── usecase.interface.ts
├── .env                         # Variáveis de ambiente
├── .env.example                 # Exemplo de variáveis de ambiente
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
🔐 Autenticação
A autenticação é baseada em JWT. Endpoints protegidos exigem um token válido no cabeçalho da requisição:

Authorization: Bearer <token>
▶️ Scripts
npm run build — Compila o projeto TypeScript para JavaScript.

npm start — Inicia a API a partir da pasta dist.

npm run debug — Compila e executa a aplicação com debug ativo.

⚙️ Variáveis de Ambiente
Crie um arquivo .env baseado no .env.example com as seguintes variáveis:

🔧 Melhorias Futuras
🧪 Testes automatizados (unitários e integração)

📦 Dockerização

🛒 Checkout e pagamento

🧑‍💼 Painel admin

👨‍💻 Desenvolvido por
Patrick - DevPatriick
🔗 LinkedIn | 💻 GitHub

Projeto de Testes E2E com Cypress
📌 Visão Geral

Este projeto contém testes end-to-end (E2E) desenvolvidos com Cypress para validar o fluxo de compra no site de demonstração SauceDemo. O foco está em boas práticas de automação, reutilização de código por meio de custom commands e clareza de intenção nos testes.

O projeto foi estruturado para servir tanto como material de estudo quanto como case de portfólio para QA.

🧪 Escopo dos Testes

Os testes cobrem os seguintes cenários:

Login com credenciais válidas

Adição de um ou mais produtos ao carrinho

Remoção de produtos do carrinho

(Opcional) Fluxo de checkout

🛠️ Tecnologias Utilizadas

Node.js

Cypress

JavaScript (ES6+)

📁 Estrutura do Projeto
cypress/
├── e2e/
│   └── Shopping.cy.js        # Cenários de teste E2E
├── support/
│   ├── commands.js           # Custom commands reutilizáveis
│   └── e2e.js                # Configurações globais do Cypress
├── fixtures/                 # Dados mock (se aplicável)
└── screenshots / videos      # Evidências de execução


cypress.config.js
package.json
README.md
♻️ Custom Commands

O projeto utiliza custom commands para tornar os testes mais legíveis e fáceis de manter.

➕ Adicionar produtos ao carrinho
cy.addProductToCart([
  'sauce-labs-backpack',
  'sauce-labs-bike-light'
])
➖ Remover produtos do carrinho
cy.removeProductToCart('sauce-labs-bolt-t-shirt')

Esses commands aceitam string ou array, garantindo flexibilidade e evitando duplicação de código.

▶️ Como Executar o Projeto
1️⃣ Instalar dependências
npm install
2️⃣ Abrir o Cypress
npx cypress open

Ou executar em modo headless:

npx cypress run
🔐 Variáveis de Ambiente

As credenciais de login são lidas via Cypress.env().

Exemplo:

Cypress.env('ADMIN_USER')
Cypress.env('ADMIN_PASS')

Essas variáveis podem ser configuradas no cypress.config.js ou via linha de comando.

🧠 Boas Práticas Aplicadas

Normalização de parâmetros (string / array)

Uso de selectors dinâmicos e confiáveis

Separação clara entre lógica de teste e interação com a UI

Testes legíveis, focados no comportamento do usuário

📈 Próximos Passos (Evolução)

Implementar Page Object Model (POM)

Tornar os testes data-driven

Adicionar validações de carrinho e checkout

Integrar com CI (GitHub Actions)

👤 Autor

Matheus Ismael de Souza
QA Júnior / Analista de Qualidade de Software

GitHub: https://github.com/MatheusRieper

LinkedIn: https://www.linkedin.com/in/matheus-rieper-a4456b238/

📄 Observação Final

Este projeto foi desenvolvido com foco em aprendizado contínuo e aplicação de práticas utilizadas no mercado de QA. Feedbacks e sugestões são bem-vindos.
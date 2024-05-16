### README.md

# Projeto API Disciplinas

Este projeto é uma API para gerenciar disciplinas, construída com Node.js e Express. A estrutura do projeto está organizada conforme a seguinte árvore de diretórios:

## Estrutura do Projeto

```
projeto-api-disciplinas/
├── controllers/
│   └── courseController.js
├── models/
│   └── course.js
├── node_modules/
├── public/
│   ├── css/
│   │   └── style.css
│   └── html/
│       └── adm/
│           ├── delete.html
│           ├── edit.html
│           ├── index.html
│       ├── index.html    
├── routes/
│   └── courseRoutes.js
├── app.js
├── package-lock.json
├── package.json
```

### Descrição das Pastas e Arquivos

- **controllers/**: Contém os controladores que gerenciam a lógica de negócio da aplicação.
  - `courseController.js`: Controlador responsável pelas operações relacionadas às disciplinas.

- **models/**: Contém os modelos que representam os dados da aplicação.
  - `course.js`: Modelo que define a estrutura dos dados de uma disciplina.

- **public/**: Contém arquivos públicos, como CSS e HTML.
  - **css/**: Estilos da aplicação.
    - `style.css`: Arquivo de estilo principal.
  - **html/**: Páginas HTML.
    - **adm/**: Páginas administrativas.
      - `delete.html`: Página para deletar uma disciplina.
      - `edit.html`: Página para editar uma disciplina.
      - `index.html`: Página inicial para a administração de disciplinas.
      - `index.html`: Duplicado da página inicial (possivelmente um erro que precisa ser corrigido).

- **routes/**: Define as rotas da aplicação.
  - `courseRoutes.js`: Define as rotas relacionadas às disciplinas.

- `app.js`: Arquivo principal da aplicação, onde o servidor Express é configurado e iniciado.

- `package-lock.json` e `package.json`: Arquivos de configuração do npm que gerenciam as dependências do projeto.

## Dependências

- **express**: Framework para Node.js para criar servidores e APIs.
- **nodemon**: Utilitário que reinicia automaticamente a aplicação quando alterações nos arquivos são detectadas (para desenvolvimento).

## Scripts

- `test`: Script placeholder para testes (a ser implementado).
- `dev`: Script para iniciar a aplicação em modo de desenvolvimento usando o nodemon.

## Como Rodar o Projeto

1. **Clone o repositório**:
    ```bash
    git clone <url-do-repositorio>
    cd projeto-api-disciplinas
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Inicie a aplicação**:
    ```bash
    npm run dev
    ```

## Licença

ISC

---

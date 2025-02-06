# Projeto Livraria

Este é um projeto de exemplo de uma aplicação de livraria desenvolvida com **Node.js**, **Express**, **Sequelize** e **SQLite**. Ele permite gerenciar livros, com funcionalidades de **cadastro**, **edição**, **remoção** e **listagem**.

## Tecnologias Usadas

- **Node.js**: Plataforma para execução de código JavaScript no lado do servidor.
- **Express**: Framework para facilitar a criação de APIs e servidores web.
- **Sequelize**: ORM (Object-Relational Mapper) para facilitar a interação com bancos de dados relacionais.
- **SQLite**: Banco de dados relacional simples e leve utilizado para armazenar dados.
- **Handlebars**: Motor de templates para renderizar as views no Express.
- **method-override**: Middleware para permitir que métodos HTTP como `PUT` e `DELETE` sejam simulados em formulários HTML.

## Comandos para Executar o Projeto

1. **Clone o repositório**:

    ```bash
    git clone [https://github.com/laisdeveloper/laisdeveloper-projetolivraria.git](https://github.com/laisdeveloper/laisdeveloper-projetolivraria.git)
    cd laisdeveloper-projetolivraria
    ```

2. **Instale as dependências**:

    Com o **Node.js** instalado, execute o seguinte comando para instalar as dependências do projeto:

    ```bash
    npm install
    ```

3. **Configure o banco de dados (se necessário)**:

    O Sequelize irá criar automaticamente as tabelas necessárias. Para garantir que o banco de dados seja criado corretamente, rode:

    ```bash
    npx sequelize-cli db:create
    ```

4. **Inicie o servidor**:

    Com todas as dependências instaladas, execute o servidor com:

    ```bash
    node index.js
    ```

5. **Acesse a aplicação**:

    Após iniciar o servidor, acesse o projeto pelo navegador:

    ```
    http://localhost:3000
    ```

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

laisdeveloper-projetolivraria/
│
├── database.sqlite           # Banco de dados principal onde os dados são armazenados
├── databaseError.sqlite      # Banco de dados utilizado para erros, se houver
├── index.js                  # Arquivo principal que inicializa o servidor
├── package.json              # Arquivo de gerenciamento de dependências
│
├── config/                   # Diretório com configurações do projeto
│   └── database.js           # Configuração da conexão com o banco de dados
│
├── controllers/              # Contém a lógica dos controladores da aplicação
│   └── LivroController.js    # Controlador que gerencia as operações de livros
│
├── models/                   # Modelos que representam as entidades da aplicação
│   └── Livro.js              # Modelo de dados para o livro no banco de dados
│
├── routes/                   # Define as rotas e mapeia para os controladores
│   └── livroRoutes.js        # Rotas relacionadas a livros (cadastrar, editar, listar)
│
├── views/                    # Diretório com os templates renderizados pelo Express
│   ├── dashboard.handlebars  # Página inicial do sistema (dashboard)
│   ├── layouts/              # Contém os layouts principais
│   │   └── main.handlebars   # Layout principal utilizado em várias páginas
│   └── livros/               # Templates específicos para as funcionalidades de livros
│       ├── cadastrar.handlebars # Formulário de cadastro de novos livros
│       ├── editar.handlebars   # Formulário de edição de livros existentes
│       └── listar.handlebars   # Exibe a lista de livros cadastrados

## Observações

- **Banco de Dados**: O projeto usa o banco **SQLite** com os arquivos **`database.sqlite`** e **`databaseError.sqlite`** para armazenar os dados da aplicação.
- **Estrutura de Views**: O **Handlebars** é usado para renderizar as páginas no lado do cliente. Você pode adicionar ou modificar as views dentro do diretório `views/`.

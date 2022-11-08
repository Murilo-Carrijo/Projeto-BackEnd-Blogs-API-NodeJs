# :construction: README em construção ! :construction:
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->

# Store Manager!

#### Linguagens utilizadas

  * NodeJS
  * Express
  * MySQL
  * Sequelize

---

## Descrição

Nesse projeto foi desenvolvido uma API de um CRUD posts de blog (com o Sequelize).
Começando pela API,foi desenvolvido alguns endpoints (seguindo os princípios do REST) que estarão conectados ao seu banco de dados.
Primeiro, foi criado uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, foi criado também uma tabela de Categorias para seus Posts e por fim a tabela de Posts, guardando todas as informações dos posts realizados na plataforma.
As habilidade utilizadas nesse projeto foram:

  - Criar e associar tabelas usando models do sequelize

  - Construir endpoints para consumir os models que criar

  - Fazer um CRUD com o ORM

#### Status do projeto: em desenvolvimento ⚠️

---

## Como rodar o projeto localmente

**1. Clone o repositório**
  * `git@github.com:Murilo-Carrijo/Projeto-BackEnd-Blogs-API-NodeJs.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd Projeto-BackEnd-Blogs-API-NodeJs`

**2. Instale as dependências e inicialize o projeto**
  * Instale as dependências:
    * `npm install`

**3. Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**

`/config/config.js`

```
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
```

**(Neste arquivo é obrigatório deixar o nome do database como `"database": 'blogs_api'`)**

**É essencial usar essas 3 variáveis no arquivo acima:**

#### Variáveis:

`host: process.env.HOSTNAME`

`user: process.env.MYSQL_USER`

`password: process.env.MYSQL_PASSWORD`

**Com elas que iremos conseguir conectar ao banco do avaliador automático**

**4. Teste os CRUDs utilizando ferramentas como o POSTMAN.**

---

## Desenvolvimento

O projeto foi realizado durante o curso da Trybe e os seguintes requisitos precisariam ser cumpridos: 

  - [X] 1 - _Sua aplicação deve ter o endpoint POST `/user`_

  - [X] 2 - _Sua aplicação deve ter o endpoint POST `/login`_

  - [X] 3 - _Sua aplicação deve ter o endpoint GET `/user`_

  - [X] 4 - _Sua aplicação deve ter o endpoint GET `/user/:id`_

  - [X] 5 - _Sua aplicação deve ter o endpoint POST `/categories`_

  - [X] 6 - _Sua aplicação deve ter o endpoint GET `/categories`_

  - [ ] 7 - _Sua aplicação deve ter o endpoint POST `/post`_

  - [X] 8 - _Sua aplicação deve ter o endpoint GET `/post`_

  - [X] 9 - _Sua aplicação deve ter o endpoint GET `post/:id`_

  - [ ] 10 - _Sua aplicação deve ter o endpoint PUT `/post/:id`_
  
  ### Requisitos Bônus:

  - [ ] 11 - _Sua aplicação deve ter o endpoint DELETE `post/:id`_

  - [ ] 12 - _Sua aplicação deve ter o endpoint DELETE `/user/me`_

  - [ ] 13 - _Sua aplicação deve ter o endpoint GET `post/search?q=:searchTerm`_


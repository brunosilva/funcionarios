# Projeto retorno de funcionários em NodeJs 

Projeto de construção de rotas API em Nodejs com métodos para buscar:

* Todos os funcionários,
* Funcionário por Nome,
* Funcionário por CPF,
* Funcionário por Cargo,
* Funcionário por Uf nascimento de forma quantitativa,
* Funcionário por Status


### Em: 

`./controllers/funcionarios.js` -> temos as request e response dos métodos e um método diferente para cada retorno desejado

`./data/funcionarios.json` -> temos o array com objeto de todos os funcionários cadastrados na base.

`./router/funcionarios.js` -> temos as rotas. 


### Rodar o projeto

* Em seu terminal, execute o `npm install` para instalar todas as dependencias necessárias para funcionamento.
* No package.json tem um script `"start": "nodemon server"`, dessa forma, em seu terminal, execute o comando `npm start` e seu projeto vai rodar em localhost.
* Obs.: Caso não abra automáticamente em seu navegador, digite `http://localhost:8080/api/v1/funcionarios`
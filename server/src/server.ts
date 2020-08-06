// rota
// http://localhost:3333/users

//recurso
// users

//Métodos
// GET: Buscar ou listar uma informação - Navegador sempre faz GET
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma info existente
// Testar outros métodos usando INSOMNIA

// Requisição
// Corpo  (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar na rota
// Query Params: Paginação, filtros, ordenação

//Query. Diferenças:
// SELECT * FROM users
// knex("users").select("*"")

import express from "express";

const app = express();

app.use(express.json()); //para requisições no insomnia

app.get("/", (request, response) => {
  console.log(request.query);

  //   const users = [
  //     { name: "Diego", age: 25 },
  //     { name: "Vini", age: 21 },
  //   ];

  return response.json({ message: "Hello World" });
  //   console.log("Acessou a rota!!!");
});

app.listen(3333);

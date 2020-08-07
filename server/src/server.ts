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
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json()); //para requisições no insomnia
app.use(routes);

app.listen(3333);

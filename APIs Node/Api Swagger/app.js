const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDocs = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Api de usuários",
      version: "1.0.0",
      description: "API de usuários básica",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./app.js"],
};

const swaggerDocs = swaggerJsDocs(swaggerOptions);

const app = express();
app.use(express.json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const users = [];

let idUser = 0;

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retorna todos os usuários
 *     responses:
 *       200:
 *         description: Uma lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nome:
 *                     type: string
 */
app.get("/api/users", (req, res) => {
  res.status(200).json({ users });
});

/**
 * @swagger
 * /api/new:
 *   post:
 *     summary: Adiciona um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário adicionado com sucesso
 *       400:
 *         description: Nome de usuário obrigatório
 */
app.post("/api/new", (req, res) => {
  if (!req.body.nome) {
    return res
      .status(400)
      .send({ success: false, message: "Nome de usuário obrigatório" });
  }
  idUser++;
  users.push({ id: idUser, nome: req.body.nome });
  res.status(200).send({ success: true, message: "Usuário adicionado" });
});

app.post("/api/new", (req, res) => {
  if (!req.body.nome) {
    res
      .status(400)
      .send({ success: false, message: "Nome de usuário obrigatório" });
  }
  idUser++;
  users.push({ id: idUser, nome: req.body.nome });
  res.status(200).send({ success: true, message: "Usuario adicionado" });
});
app.delete("/api/delete/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    return res.status(200).send({ success: true, message: "Usuário deletado" });
  }
  return res
    .status(404)
    .send({ success: false, message: "Usuário não encontrado" });
});
module.exports = app;

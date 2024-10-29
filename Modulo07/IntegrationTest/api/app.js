const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "João" },
];

const tasks = [
  { id: 1, title: "Lavar Carro", completed: false },
  { id: 2, title: "Lavar Louça", completed: false },
  { id: 3, title: "Fazer Atividade", completed: false },
];

app.get("/api/users", (req, resp) => {
  resp.status(200).json({ users });
});

app.get("/api/todo/all", (req, resp) => {
  resp.status(200).json({ tasks });
});

app.post("/api/todo/new", (req, resp) => {
  const lastId = tasks[tasks.length - 1].id;
  tasks.push({
    id: lastId + 1,
    tittle: req.body.title,
    completed: req.body.completed,
  });
  resp.send({ success: true, message: "Task adicionada" });
});

app.put("/api/todo/update", (req, resp) => {
  for (i = 0; i < tasks.length; i++) {
    if (tasks[i].id === req.body.id) {
      tasks[i].title = req.body.title;
      break;
    }
  }
  resp.send({ success: true, message: "Task atualizada" });
});

app.delete("/api/todo/delete", (req, resp) => {
  for (i = 0; i < tasks.length; i++) {
    if (tasks[i].id === req.body.id) {
      tasks.splice(i, 1);
    }
  }
  resp.send({ success: true, message: "Task deletada" });
});

module.exports = app;

const request = require("supertest");
const app = require("../api/app");

describe("Testando API", () => {
  it("Deve retornar todas as tasks com status 200", async () => {
    const response = await request(app).get("/api/todo/all");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("users");
    expect(response.body.users).toHaveLength(2);
    expect(response.body.users[0]).toEqual({ id: 1, name: "Alice" });
  });
});

const fatorial = require("./fatorial");

test("O fatorial de 6 deve ser 720", () => {
  expect(fatorial(6)).toBe(720);
});

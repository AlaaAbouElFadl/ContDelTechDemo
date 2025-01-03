const Calculator = require("../src/calculator");

test("adds two numbers", () => {
  const calc = new Calculator();
  expect(calc.add(1, 2)).toBe(3);
});

test("subtracts two numbers", () => {
  const calc = new Calculator();
  expect(calc.subtract(5, 3)).toBe(2);
});

test("multiplies two numbers", () => {
  const calc = new Calculator();
  expect(calc.multiply(2, 3)).toBe(6);
});

test("divides two numbers", () => {
  const calc = new Calculator();
  expect(calc.divide(6, 3)).toBe(2);
});

test("throws error when dividing by zero", () => {
  const calc = new Calculator();
  expect(() => calc.divide(6, 0)).toThrow("Cannot divide by zero");
});

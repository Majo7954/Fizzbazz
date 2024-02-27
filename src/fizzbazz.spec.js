import generarFizzBazz from "./fizzbazz.js";
//al terminal un ciclo de TDD(Test Driven Development)
describe("FizzBazz", () => {
  it("Devolver 1", () => {
    expect(generarFizzBazz(1)).toEqual("1");
  });

  it("devolver el numero", () => {
    expect(generarFizzBazz(2)).toEqual("2");
  });

  it("si es igual a 3 devolver Fizz", () => {
    expect(generarFizzBazz(3)).toEqual("Fizz");
  });

  it("Multiplos de 3", () => {
    expect(generarFizzBazz(6)).toEqual("Fizz");
  });

  it("Si es 5 devolver Bazz", () => {
    expect(generarFizzBazz(5)).toEqual("Bazz");
  });

  it("Si es Multiplo de 5 devolver Bazz", () => {
    expect(generarFizzBazz(10)).toEqual("Bazz");
  });
});

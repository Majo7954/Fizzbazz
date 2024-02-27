import { generarFizzBazz, generarSecuencia } from "./fizzbazz.js";

describe("FizzBazz", () => {
  it("Devolver 1", () => {
    expect(generarFizzBazz(1)).toEqual("1");
  });

  it("Devolver el número", () => {
    expect(generarFizzBazz(2)).toEqual("2");
  });

  it("Si es igual a 3 devolver Fizz", () => {
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

  it("Si es 15 devolver FizzBazz", () => {
    expect(generarFizzBazz(15)).toEqual("FizzBazz");
  });

  it("Si es Multiplo de 5 y 3 devolver FizzBazz", () => {
    expect(generarFizzBazz(15)).toEqual("FizzBazz");
  });

  it("Generar secuencia hasta 5", () => {
    expect(generarSecuencia(5)).toEqual("1 2 Fizz 4 Bazz");
  });

  it("Generar secuencia hasta 15", () => {
    expect(generarSecuencia(15)).toEqual("1 2 Fizz 4 Bazz Fizz 7 8 Fizz Bazz 11 Fizz 13 14 FizzBazz");
  });
});


const { divisivelPorDois } = './service';
jest.mock("./service");

describe('Primeiro contato com Mocks', () => {
  it("Testa se a func esta sendo chamada", () => {
    somaDoisNUmeros = jest.fn();
    somaDoisNUmeros();
    expect(somaDoisNUmeros).toHaveBeenCalled();
  })

  it("Testa o resultado da func", () => {
    somaDoisNUmeros = jest.fn().mockReturnValue(8);

    expect(somaDoisNUmeros()).toBe(8);
  })
  
  it("Quantas vezes a func esta sendo chamada", () => {
    somaDoisNUmeros = jest.fn();
    somaDoisNUmeros();
    somaDoisNUmeros();
    somaDoisNUmeros();
    expect(somaDoisNUmeros).toHaveBeenCalledTimes(3);
  })

  it("Testa que retorna true quando o numero e par", () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(2);

    divisivelPorDois.mockImplementation(() => (retornaNumeroAleatorio() % 2) === 0);
    divisivelPorDois();

    expect(divisivelPorDois()).toBe(true);
  })
});
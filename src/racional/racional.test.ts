import { Racional } from "./racional"

describe('Comprobacion de las operaciones Basicas', () => {
  const RACIONAL1 = new Racional(1, 3);
  const RACIONAL2 = new Racional(3, 4);
  it('suma', () => {
		const RACIONAL3 = new Racional(13, 12)
    expect(RACIONAL1.sumar(RACIONAL2)).toEqual(RACIONAL3);
  })
  it('resta', () => {
		const RACIONAL3 = new Racional(-5, 12)
    expect(RACIONAL1.restar(RACIONAL2)).toEqual(RACIONAL3);
  })
  it('multiplicacion', () => {
		const RACIONAL3 = new Racional(1, 4)
    expect(RACIONAL1.multiplicar(RACIONAL2)).toEqual(RACIONAL3);
  })
  it('division', () => {
		const RACIONAL3 = new Racional(4, 9)
    expect(RACIONAL1.dividir(RACIONAL2)).toEqual(RACIONAL3);
  })
	it('compararFalso', () => {
    expect(RACIONAL1.comaparar(RACIONAL2)).toEqual(false);
  })
	it('compararVerdadero', () => {
    expect(RACIONAL1.comaparar(RACIONAL1)).toEqual(true);
  })
  it('Modificacion', () => {
    const RACIONAL3 = new Racional(30, 60);
    const RACIONAL4 = new Racional(6, 60);
    expect(RACIONAL3.sumar(RACIONAL4)).toEqual(new Racional(12, 20));
  })
})
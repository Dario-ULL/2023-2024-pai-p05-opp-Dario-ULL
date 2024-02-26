/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Darío Domínguez González
 * @since 26/02/2024
 * @desc Racional
 *       Clase racional com operaciones basicas
 *       
 */


export class Racional {
    private numerador: number;
    private denominador: number;
  
    constructor(numerador: number, denominador: number) {
      if (denominador === 0) {
        throw new Error("El denominador no puede ser cero");
      }
  
      this.numerador = numerador;
      this.denominador = denominador;
      this.simplificar();
    }
  
    private simplificar(): void {
      const gcd = this.calcularMCD(this.numerador, this.denominador);
      this.numerador /= gcd;
      this.denominador /= gcd;
    }
  
    private calcularMCD(numero1: number, numero2: number): number {
      return numero2 === 0 ? numero1 : this.calcularMCD(numero2, numero1 % numero2);
    }
  
    sumar(otro: Racional): Racional {
      const nuevoNumerador = this.numerador * otro.denominador + otro.numerador * this.denominador;
      const nuevoDenominador = this.denominador * otro.denominador;
      return new Racional(nuevoNumerador, nuevoDenominador);
    }
  
    restar(otro: Racional): Racional {
      const nuevoNumerador = this.numerador * otro.denominador - otro.numerador * this.denominador;
      const nuevoDenominador = this.denominador * otro.denominador;
      return new Racional(nuevoNumerador, nuevoDenominador);
    }
  
    multiplicar(otro: Racional): Racional {
      const nuevoNumerador = this.numerador * otro.numerador;
      const nuevoDenominador = this.denominador * otro.denominador;
      return new Racional(nuevoNumerador, nuevoDenominador);
    }
  
    dividir(otro: Racional): Racional {
      if (otro.numerador === 0) {
        throw new Error("No se puede dividir por cero");
      }
  
      const nuevoNumerador = this.numerador * otro.denominador;
      const nuevoDenominador = this.denominador * otro.numerador;
      return new Racional(nuevoNumerador, nuevoDenominador);
    }
  
    comaparar(otro: Racional): boolean {
      return this.numerador === otro.numerador && this.denominador === otro.denominador;
    }
  
    toString(): string {
      return `${this.numerador}/${this.denominador}`;
    }
  }
  


  // Programa cliente
  const RACIONAL1 : Racional = new Racional(1, 3);
  const RACIONAL2 : Racional = new Racional(3, 4);
  
  console.log("Racional 1:", RACIONAL1.toString());
  console.log("Racional 2:", RACIONAL2.toString());
  
  const SUMA : Racional = RACIONAL1.sumar(RACIONAL2);
  console.log("Suma:", SUMA.toString());
  
  const RESTA : Racional = RACIONAL1.restar(RACIONAL2);
  console.log("Resta:", RESTA.toString());
  
  const MULTIPLICACION : Racional = RACIONAL1.multiplicar(RACIONAL2);
  console.log("Multiplicación:", MULTIPLICACION.toString());
  
  const DIVISION : Racional = RACIONAL1.dividir(RACIONAL2);
  console.log("División:", DIVISION.toString());
  
  const IGUALDAD : boolean = RACIONAL1.comaparar(RACIONAL2);
  console.log("Igualdad:", IGUALDAD);
  
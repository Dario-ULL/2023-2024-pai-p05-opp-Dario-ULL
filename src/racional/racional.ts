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
 */


export class Racional {
  /**
   * Atributos privados de la clase
   * @param {number} numerador  -  Representa el numerador del numero
   * @param {number} denominador  -  Representa el denominador del numero
  */
  private numerador: number;
  private denominador: number;

	/**
   * Construcctor de la clase Racional
   * @param {number} numerador  -  Representa el numerador del numero
   * @param {number} denominador  -  Representa el denominador del numero
  */
  constructor(numerador: number, denominador: number) {
    if (denominador === 0) {
      throw new Error("El denominador no puede ser cero");
    }
    this.numerador = numerador;
    this.denominador = denominador;
    this.simplificar();
  }
 
	/**
   * Funcion simplificar de la clase Racional. Simplifica la fraccion lo mactimo posible.
   * @returns {void}
   */
  private simplificar(): void {
    const GCD = this.calcularMCD(this.numerador, this.denominador);
    this.numerador /= GCD;
    this.denominador /= GCD;
  }

  /**
   * Funcion calcularMCD de la clase Racional. Calcula el MCD de forma recursiva.
   * @returns {number}  -  MCD
   */
  private calcularMCD(numero1: number, numero2: number): number {
    return numero2 === 0 ? numero1 : this.calcularMCD(numero2, numero1 % numero2);
  }
  
	/**
   * Funcion sumar de la clase Racional. Suma dos numeros racioanles.
	 * @param {Racional} otro  -  otro numero racional
   * @returns {Racional}
   */
  sumar(otro: Racional): Racional {
    const NUEVO_NUMERADOR = this.numerador * otro.denominador + otro.numerador * this.denominador;
    const NUEVO_DENOMINADOR = this.denominador * otro.denominador;
    return new Racional(NUEVO_NUMERADOR, NUEVO_DENOMINADOR);
  }
  
	/**
   * Funcion restar de la clase Racional. Resta dos numeros racioanles.
	 * @param {Racional} otro  -  otro numero racional
   * @returns {Racional}
   */
  restar(otro: Racional): Racional {
    const NUEVO_NUMERADOR = this.numerador * otro.denominador - otro.numerador * this.denominador;
    const NUEVO_DENOMINADOR = this.denominador * otro.denominador;
    return new Racional(NUEVO_NUMERADOR, NUEVO_DENOMINADOR);
  }

	/**
   * Funcion multiplicar de la clase Racional. Multiplica dos numeros racioanles.
	 * @param {Racional} otro  -  otro numero racional
   * @returns {Racional}
   */
  multiplicar(otro: Racional): Racional {
		const NUEVO_NUMERADOR = this.numerador * otro.numerador;
    const NUEVO_DENOMINADOR = this.denominador * otro.denominador;
    return new Racional(NUEVO_NUMERADOR, NUEVO_DENOMINADOR);
  }
  
	/**
   * Funcion dividir de la clase Racional. Divide dos numeros racioanles.
	 * @param {Racional} otro  -  otro numero racional
   * @returns {Racional}
   */
  dividir(otro: Racional): Racional {
    if (otro.numerador === 0) {
      throw new Error("No se puede dividir por cero");
    }
    const NUEVO_NUMERADOR = this.numerador * otro.denominador;
    const NUEVO_DENOMINADOR = this.denominador * otro.numerador;
    return new Racional(NUEVO_NUMERADOR, NUEVO_DENOMINADOR);
  }
  
	/**
   * Funcion comparar de la clase Racional. Comapra dos numeros racioanles.
	 * @param {Racional} otro  -  otro numero racional
   * @returns {boolean}
   */
  comaparar(otro: Racional): boolean {
    return this.numerador === otro.numerador && this.denominador === otro.denominador;
  }
  
	/**
   * Funcion toString de la clase Racional. Devolvera un string con el valor del numero racional
   * @returns {string}
  */
  toString(): string {
    return `${this.numerador}/${this.denominador}`;
  }
}
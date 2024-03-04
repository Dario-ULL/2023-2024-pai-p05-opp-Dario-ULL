/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Darío Domínguez González
 * @since 28/02/2024
 * @desc Clock
 *       Clase Clock que simulara el funcionamiento de un reloj permitiendo sumas y restar minutos,
 *       asi como comparar si dos relojes tienen la misma hora
 */


/**
 * Clase Clock
 */
export class Clock {

  /**
   * Atributos privados de la clase
   * @param {number} hour  -  Representa la hora del relog
   * @param {number} minute  -  Representa los minutos del reloj
  */
  private hour: number;
  private minute: number;

  /**
   * Construcctor de la clase Clock
   * @param {number} hour  -  Representa la hora del relog
   * @param {number} minute  -  Representa los minutos del reloj
  */
  constructor(hour: number, minute: number = 0) {
    const MINUTES_MAX: number = 60;
    const TIME_IN_HOUR: number = Math.trunc(minute / MINUTES_MAX);
    if (minute >= 0) {
      this.minute = minute % MINUTES_MAX;
    } else {
      this.minute = 60 + minute % MINUTES_MAX;
    }
    const HOURS_MAX: number = 24;
    if (hour >= 0) {
      if(minute < 0) { 
        this.hour = (24 + (hour + (TIME_IN_HOUR - 1)) % HOURS_MAX) % HOURS_MAX;
      } else {
        this.hour = (hour + TIME_IN_HOUR) % HOURS_MAX;
      }
    } else {
      if(minute < 0) {   
        this.hour = (24 + (hour + (TIME_IN_HOUR - 1)) % HOURS_MAX) % HOURS_MAX;
      } else {
        this.hour = 24 + (hour - (TIME_IN_HOUR)) % HOURS_MAX;
      }

    }
  }

  /**
   * Funcion toString de la clase Clock. Devolvera un string con la hora en modo digital
   * @returns {string}
  */
  public toString(): string {
    return this.hour.toString().padStart(2, '0') + ':' + this.minute.toString().padStart(2, '0'); 
  }

  /**
   * Funcion plus de la clase Clock. Añade una cantidad de minutos al reloj.
   * @param {number} minutes  -  minutos que se vas a sumar
   * @returns {Clock}
   */
  public plus(minutes: number): Clock {
    const MINUTES_MAX: number = 60;
    const TIME_IN_HOUR: number = Math.trunc((this.minute + minutes) / MINUTES_MAX);
    const HOURS_MAX: number = 24;
    const NEW_HOUR = (this.hour + TIME_IN_HOUR) % HOURS_MAX;
    const NEW_MINUTE = (this.minute + minutes) % MINUTES_MAX;
    console.log(NEW_HOUR);
    return new Clock(NEW_HOUR, NEW_MINUTE);
  }

  /**
   * Funcion minus de la clase Clock. REsta una cantidad de minutos al reloj.
   * @param {number} minutes  -  minutos que se vas a restar
   * @returns {Clock}
   */
  public minus(minutes: number): Clock {
    const MINUTES_MAX: number = 60;
    const TIME_IN_HOUR: number = Math.trunc((minutes) / MINUTES_MAX);
    const HOURS_MAX: number = 24;
    const NEW_HOUR = (this.hour - TIME_IN_HOUR) % HOURS_MAX;
    const NEW_MINUTE = (this.minute - minutes) % MINUTES_MAX;
    console.log(NEW_HOUR);
    return new Clock(NEW_HOUR, NEW_MINUTE);  }

  public equals(other: unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }
}

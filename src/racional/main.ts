import { Racional } from "./racional"


// Funcion principal que inicia el programa
  const RACIONAL1 = new Racional(30, 60);
  const RACIONAL2 = new Racional(6, 60);
  const NEW_RACIONAL = RACIONAL1.sumar(RACIONAL2);
  console.log(NEW_RACIONAL.toString());

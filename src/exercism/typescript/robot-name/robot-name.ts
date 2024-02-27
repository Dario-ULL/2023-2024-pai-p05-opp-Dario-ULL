
export class Robot {
  private nombre_: string;
  public static baseDeNombres_: Set<string>;

  constructor() {
    Robot.baseDeNombres_ = new Set();
    this.nombre_ = this.generarNombre();
  }
  public get nombre(): string {
    return this.nombre_;
  }
  generarNombre(): string {
    let nombreAleatorio: string;
    do {
      nombreAleatorio = this.nombreAleatorio()
    } while (Robot.baseDeNombres_.has(nombreAleatorio));
    Robot.baseDeNombres_.add(nombreAleatorio);
    return nombreAleatorio;
  }
  nombreAleatorio(): string {
    let nombre = '';
    for (let i = 0; i < 2; i++) {
      nombre += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
    }
    for (let i = 0; i < 3; i++) {
      nombre += '0123456789'[Math.floor(Math.random() * 10)];
    }
    return nombre
  }
  public resetNombre(): void {
    this.nombre_ = this.generarNombre();
  }
  public static liberarNombre(): void {
    this.baseDeNombres_.clear();
  }
}
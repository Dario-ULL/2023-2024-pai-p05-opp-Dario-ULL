/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Darío Domínguez González
 * @since 26/02/2024
 * @desc MySet
 *       Clase MySet con sus operaciones basicas
 *       
 */

export class MySet {
  private elements: number[];

  constructor(initialElements: number[] = []) {
    this.elements = [];
    initialElements.forEach((element) => {
      this.insert(element);
    });
  }

  toString(): string {
    return `{${this.elements.join(', ')}}`;
  }

  size(): number {
    return this.elements.length;
  }

  union(otherSet: MySet): MySet {
    const newSet = new MySet();
    this.elements.forEach((element) => newSet.insert(element));
    otherSet.elements.forEach((element) => newSet.insert(element));
    return newSet;
 }

  intersection(otherSet: MySet): MySet {
    const newSet = new MySet();
    this.elements.forEach((element) => {
	    if (otherSet.belongsTo(element)) {
 	      newSet.insert(element);
  	  }
  	});
  	return newSet;
  }

  difference(otherSet: MySet): MySet {
    const newSet = new MySet();
    this.elements.forEach((element) => {
      if (!otherSet.belongsTo(element)) {
        newSet.insert(element);
      }
    });
    return newSet;
  }

  belongsTo(element: number): boolean {
    return this.elements.includes(element);
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  isSubset(otherSet: MySet): boolean {
    return this.elements.every((element) => otherSet.belongsTo(element));
  }

  areDisjoint(otherSet: MySet): boolean {
    return this.elements.every((element) => !otherSet.belongsTo(element));
  }

  areEqual(otherSet: MySet): boolean {
    return this.isSubset(otherSet) && otherSet.isSubset(this);
  }

  insert(element: number): void {
    if (!this.belongsTo(element)) {
      this.elements.push(element);
    }
  }
}
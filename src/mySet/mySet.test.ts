import { MySet } from "./mySet"

describe('Comprobacion de las operaciones Basicas', () => {
  const SET1 = new MySet([1, 2, 3]);
  const SET2 = new MySet([3, 4, 5]);
  it('tamaño', () => {
    expect(SET1.size()).toEqual(3);
  })
  it('lectura', () => {
    expect(SET1.toString()).toEqual(`{1, 2, 3}`);
  })
  it('union', () => {
    expect(SET1.union(SET2)).toEqual(new MySet([1, 2, 3, 3, 4, 5]));
  })
	it('interseccion', () => {
    expect(SET1.intersection(SET2)).toEqual(new MySet([3]));
  })
	it('diferecia', () => {
    expect(SET1.difference(SET2)).toEqual(new MySet([1, 2]));
  })
	it('contiene', () => {
    expect(SET1.belongsTo(3)).toEqual(true);
  })
	it('vacio', () => {
    expect(SET1.isEmpty()).toEqual(false);
  })
	it('subconjunto', () => {
    expect(SET1.isSubset(new MySet([1, 2, 3, 4])) ).toEqual(true);
  })
	it('disjunto', () => {
    expect(SET1.areDisjoint(SET2) ).toEqual(false);
  })
	it('igualdad', () => {
    expect(SET1.areEqual(SET2) ).toEqual(false);
  })
	it('añadir', () => {
		SET1.insert(4)
    expect(SET1.toString()).toEqual(`{1, 2, 3, 4}`);
  })
})
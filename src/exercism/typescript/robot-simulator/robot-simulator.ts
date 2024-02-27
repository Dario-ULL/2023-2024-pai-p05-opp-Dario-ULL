export class InvalidInputError extends Error {
  constructor(message: string) {
    super();
    this.message = message || 'Invalid Input';
  }
}

type Direccion = 'north' | 'east' | 'south' | 'west';
type Coordinates = [number, number];

const isDirection = (s: string): s is Direccion => {
  switch (s) {
    case 'north':
    case 'east':
    case 'south':
    case 'west':
      return true;
  }
  return false;
}



const dirDic: { [k in Direccion]: number } = {
  "north": 0,
  "east": 1,
  "south": 2,
  "west": 3
}



const toDir: (dir: number) => Direccion = (dir) => {
  for (let [k, v] of Object.entries(dirDic)) {
    if (dir == v) return k as Direccion;
  }
  throw new Error();
}



export class Robot {
  _cood: Coordinates;
  _dir: Direccion;

  constructor() {
    this._cood = [0, 0];
    this._dir = "north";

  }
  get bearing(): Direccion {
    return this._dir;
  }

  get coordinates(): Coordinates {
    return this._cood;
  }

  place({ x, y, direccion }: { x: number; y: number; direccion: string }) {
    this._cood = [x, y];
    if (isDirection(direccion)) this._dir = direccion;
    else throw new InvalidInputError(direccion);
  }

  advance() {
    switch (this._dir) {
      case "north":
        this._cood[1] = this._cood[1] + 1;
        break;
      case "east":
        this._cood[0] = this._cood[0] + 1;
        break;
      case "south":
        this._cood[1] = this._cood[1] - 1;
        break;
      case "west":
        this._cood[0] = this._cood[0] - 1;
    }
  }
  
  evaluate(instructions: string) {
    const list = [...instructions];
    let dir = dirDic[this._dir];
    for (const c of list) {
      switch (c) {
        case "L":
          dir = (dir + 3) % 4;
          this._dir = toDir(dir);
          break;
        case "R":
          dir = (dir + 1) % 4;
          this._dir = toDir(dir);
          break;
        case "A":
          this.advance();
          break;
      }
    }
  }
}
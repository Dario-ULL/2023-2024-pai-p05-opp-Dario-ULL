import { Robot } from './robot-name'

const areSequential = (name1: string, name2: string): boolean => {
  const alpha1 = name1.substring(0, 2)
  const alpha2 = name2.substring(0, 2)
  const num1 = Number(name1.substring(2, 5))
  const num2 = Number(name2.substring(2, 5))

  const numDiff = num2 - num1
  const alphaDiff =
    (alpha2.charCodeAt(0) - alpha1.charCodeAt(0)) * 26 +
    (alpha2.charCodeAt(1) - alpha1.charCodeAt(1))

  const totalDiff = alphaDiff * 1000 + numDiff

  return Math.abs(totalDiff) <= 1
}

const NAME_RE = /^[A-Z]{2}\d{3}$/
const TOTAL_NUMBER_OF_NAMES =
  26 * // A-Z
  26 * // A-Z
  10 * // 0-9
  10 * // 0-9
  10 // 0-9

describe('Robot', () => {
  let robot: Robot

  beforeEach(() => {
    robot = new Robot()
  })

  afterEach(() => {
    Robot.liberarNombre()
  })

  it('has a name', () => {
    expect(robot.nombre).toMatch(NAME_RE)
  })

  it('name is the same each time', () => {
    expect(robot.nombre).toEqual(robot.nombre)
  })

  it('different robots have different names', () => {
    const differentRobot = new Robot()
    expect(differentRobot.nombre).not.toEqual(robot.nombre)
  })

  it('is able to reset the name', () => {
    const originalName = robot.nombre

    robot.resetNombre()
    const newName = robot.nombre

    expect(newName).toMatch(NAME_RE)
    expect(originalName).not.toEqual(newName)
  })

  it('should set a unique name after reset', () => {
    const NUMBER_OF_ROBOTS = 10000
    const usedNames = new Set()

    usedNames.add(robot.nombre)
    for (let i = 0; i < NUMBER_OF_ROBOTS; i++) {
      robot.resetNombre()
      usedNames.add(robot.nombre)
    }

    expect(usedNames.size).toEqual(NUMBER_OF_ROBOTS + 1)
  })

  it('new names should not be sequential', () => {
    const name1 = robot.nombre
    const name2 = new Robot().nombre
    const name3 = new Robot().nombre
    expect(areSequential(name1, name1)).toBe(true)
    expect(areSequential(name1, name2)).toBe(false)
    expect(areSequential(name2, name3)).toBe(false)
  })

  it('names from reset should not be sequential', () => {
    const name1 = robot.nombre
    robot.resetNombre()
    const name2 = robot.nombre
    robot.resetNombre()
    const name3 = robot.nombre
    expect(areSequential(name1, name2)).toBe(false)
    expect(areSequential(name2, name3)).toBe(false)
    expect(areSequential(name3, name3)).toBe(true)
  })

  it('uses all letters', () => {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i = 0; i < 1000 - 1; i += 1) {
      const newRobot = new Robot()
      const lettersInName = newRobot.nombre.slice(0, 2)
      letters = letters.replace(lettersInName[0], '')
      letters = letters.replace(lettersInName[1], '')

      if (letters.length === 0) {
        break
      }
    }
    expect(letters).toEqual('')
  })

  it('uses all numbers', () => {
    let numbers = '0123456789'

    for (let i = 0; i < 1000 - 1; i += 1) {
      const newRobot = new Robot()
      const digitsInName = newRobot.nombre.slice(2, 5)
      numbers = numbers.replace(digitsInName[0], '')
      numbers = numbers.replace(digitsInName[1], '')
      numbers = numbers.replace(digitsInName[2], '')

      if (numbers.length === 0) {
        break
      }
    }
    expect(numbers).toEqual('')
  })
})

// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const getRandomLetter = () => {
  const min = 65
  const max = 90
  const result = Math.floor(Math.random() * (max - min + 1) + min)
  return String.fromCharCode(result)
}
const getRandomDigit = () => {
  const min = 0
  const max = 9
  const result = Math.floor(Math.random() * (max - min + 1) + min)
  return result
}
const robotsNamesBase = new Set()

export class Robot {
  #name
  constructor() {
    this.#name = this.asignRobotName()
  }
  makeRobotName() {
    return (
      getRandomLetter() +
      getRandomLetter() +
      getRandomDigit() +
      getRandomDigit() +
      getRandomDigit()
    )
  }
  asignRobotName() {
    while (1) {
      const newName = this.makeRobotName()
      if (!robotsNamesBase.has(newName)) {
        robotsNamesBase.add(newName)
        return newName
      }
    }
  }

  get name() {
    return this.#name
  }

  reset() {
    const { name: oldName } = this
    this.#name = this.asignRobotName()
    robotsNamesBase.delete(oldName)
  }
}

const robot = new Robot()
console.log(robot.name)
robot.reset()
console.log(robot.name)
// 12. let and const
let myName = 'Max'
// const myName = 'Max'

console.log(myName)

myName = 'Many'
console.log(myName)

// 13. Arrow Functions


function myFnc(name) {
  console.log(`MINHA ARROW FUNC: ${name}`)
}

const myFnc2 = (name) => {
  console.log(`MINHA ARROW FUNC2: ${name}`)
}

myFnc('Caio')
myFnc2('Bla')

// 14. Exports and Imports

// 15. Understanding Classes

class Human {
  constructor() {
    this.gender = 'male'
  }

  printGender() {
    console.log(this.gender)
  }
}

class Person extends Human {
  constructor() {
    super()
    this.name = 'Person'
  }

  printMyName() {
    console.log(this.name)
  }
}

const person = new Person()
person.printMyName()
person.printGender()

// 16. Classes, properties and methods

class Human2 {
  gender = 'Male';

  printGender = () => {
    console.log(this.gender)
  }
}

class Person2 extends Human2 {
  name = 'Person';

  printMyName = () => {
    console.log(this.name)
  }
}

const person3 = new Person2()
person3.printMyName()
person3.printGender()

// 17. The Spread & Rest Operator

const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4]

console.log(newNumbers)

const person2 = {
  name: 'Max'
}

const newPerson = {
  ...person2,
  age: 28
}

console.log(newPerson)

const filter = (...args) => {
  return args.filter(el => el === 1)
}

console.log(filter(1, 2, 3))

// 18. Destructuring

// const numbers2 = [1, 2, 3]
// [num1, num2] = numbers

// console.log(num1, num2)

// 19. Reference and Primitive Types Refresher

// 20. Refreshing Array methods

function transformToObjects(numberArray) {
  return numberArray.map((number) => {
      return ({ val: number })
  })
}

const numbers4 = [1, 2, 3]

console.log(transformToObjects(numbers4))
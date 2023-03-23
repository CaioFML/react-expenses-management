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

// class Human {
//   gender = 'Male';

//   printGender = () => {
//     console.log(this.gender)
//   }
// }

// class Person extends Human {
//   name = 'Person';

//   printMyName = () => {
//     console.log(this.name)
//   }
// }

// const person = new Person()
// person.printMyName()
// person.printGender()

// 17. The Spread & Rest Operator



// 18. Destructuring

// 19. Reference and Primitive Types Refresher

// 20. Refreshing Array methods
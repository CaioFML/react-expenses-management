// Primitives: numbers, strings, booleans
// More complex: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 32
};

// person = {
//   isEmployee: true
// };

let people: Person[];

// Type inference

let course = 'React - The Complete Guide';

// course = 12341;

// Union types

let course2: string | number = 'React - The Complete Guide';

course2 = 12341;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

// T is a generic type, which is a placeholder for the actual type

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 1);

// updatedArray[0].split('');

// Classes & types

class Student {
  firstName: string;
  lastName: string;
  age: number;
  private courses: string[];

  constructor(firstName: string, lastName: string, age: number, courses: string[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.courses = courses;
  }

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enroll('React');
student.listCourses();
// student.courses;

// student.firstName;

// Interface

interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;

max = {
  firstName: 'Max',
  age: 32,
  greet() {
    console.log('Hello!');
  }
};

class Instructor implements Human {
  firstName: string;
  age: number;

  greet() {
    console.log('Hello!!!');
  }
}

// max = new Instructor();

// Intersection types

type ElevatedEmployee = Human & Student;

const e1: ElevatedEmployee = {
  firstName: 'Max',
  age: 32,
  greet() {
    console.log('Hello!');
  },
  lastName: 'Schwarz',
  courses: []
};

// Type guards

// if (max instanceof Person) {
//   max.greet();
// }

// Discriminated unions

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

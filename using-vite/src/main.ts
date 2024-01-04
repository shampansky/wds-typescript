//string, number, boolean

let one: number = 1;
let two: string = 'two';
let three: boolean = true;

// Array type

const numbers = [1, 2, 3];

numbers.push(4);
// numbers.push('one')

const strings = ['one', 'two', 'three'];

const dates = [new Date()];

const mixed = [4, 6, 'two'];

const mixed2: (string | number)[] = [6, 7, 8, 'nine'];

const numbers2: number[] = [7, 5, 3];

// Any type
let anyVar;

const response = fetch('test')
  .then((res) => res.json())
  .then((data) => data);

// Object
const person: { age: number; name: string; isAdult?: boolean } = {
  age: 20,
  name: 'Peter',
};

// Types

type Person = {
  age: number;
  name: string;
  isAdult?: boolean;
  friends: string[];
  address: {
    street: string;
  };
};

interface Person2 {
  age: number;
  name: string;
  isAdult?: boolean;
  friends: string[];
  address: {
    street: string;
  };
}

const person1: Person = {
  age: 33,
  name: 'Ivan',
  friends: [],
  address: {
    street: 'Main st.',
  },
};

const person2: Person2 = {
  age: 4,
  name: 'Mike',
  friends: ['Dave'],
  address: {
    street: 'Fleet st.',
  },
};

// Functions

function printName(firstName: string, lastName: string) {
  console.log(`${firstName} ${lastName}`);
}

function sum(number1: number, number2: number): number {
  return number1 + number2;
}

function printPerson(person: { name: string }) {
  console.log(person.name);
}

const person3 = { name: 'Victoria', age: 30 };

printPerson({ name: 'Victoria' });

// Void type

function printName2(name: string): void {
  console.log(name);
}

// Optional parameters

type Options = {
  debugMode?: boolean;
  indentLevel?: number;
};

function printData(
  name: string,
  { debugMode = true, indentLevel }: Options = {}
) {
  console.log(name);
  console.log(debugMode, indentLevel);
}

function sumNumbers(...args: number[]) {
  return args.reduce((total, current) => total + current, 0);
}

// Typing variables as functions

type cbFunc = (num: number) => void;

function sumWithCallback(a: number, b: number, cb: cbFunc) {
  cb(a + b);
}

sumWithCallback(1, 2, (num: number) => {
  console.log(num);
});

// Union types
type Todo = {
  name: string;
  status: 'Complete' | 'Incomplete' | 'Draft';
};

const todo: Todo = {
  name: 'Laundry',
  status: 'Complete',
};

// Intersections

type Person3 = {
  name: string;
  age: number;
};

type PersonWithId = Person3 & { id: string };

const newPerson: PersonWithId = {
  name: 'Peter',
  age: 10,
  id: 'one',
};

interface PersonWithName {
  name: string;
}

interface PersonWithAge {
  age: number;
}

interface ComplexPerson extends PersonWithName, PersonWithAge {
  id: string;
}

const personTwo: ComplexPerson = {
  name: 'Ivan',
  age: 4,
  id: '231121',
};

// Readonly
type NumberArray = readonly number[];

const nums: NumberArray = [1, 2, 3];

// can't modify an array
// nums.push(4)

// keyof

type Fruit = {
  name: string;
  price: number;
};

function getValueByKey(key: keyof Fruit, obj: Fruit) {
  return obj[key];
}

getValueByKey('name', { name: 'apple', price: 30 });

// typeof

const product = { name: 'coat', price: 300 };
const productList: (typeof product)[] = [{ name: 'jeans', price: 24 }];
productList.push({ name: 'shirt', price: 10 });

function sayHi(message: string) {
  console.log(message);
}

type GreetFunction = typeof sayHi;

// Index Types

type Player = {
  name: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Expert';
};

type PeopleGroupedBySkillLevel = {
  [index in Player['skillLevel']]?: Player[];
};

const player1: Player = {
  name: 'John',
  skillLevel: 'Intermediate',
};

function printSkillLevel(skillLevel: Player['skillLevel']) {
  console.log(skillLevel);
}

const players: PeopleGroupedBySkillLevel = {
  Beginner: [{ name: 'ted', skillLevel: 'Expert' }],
};

const a1 = {
  name: 'Ivan',
  age: 4,
  isProgrammer: false,
};

type A = (typeof a1)[keyof typeof a1]; // sting | number | boolean

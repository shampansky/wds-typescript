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

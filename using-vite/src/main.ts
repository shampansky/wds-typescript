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

// as const

const numbersArray = ['1', '2', '3'] as const; // readonly

const firstItem = numbersArray[0]; // '1'

const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Expert'] as const;

type Player2 = {
  skillLevel: (typeof SKILL_LEVELS)[number];
};

SKILL_LEVELS.forEach((skillLevel) => {
  console.log(skillLevel);
});

// tuple

type Tuple = [string, boolean];

const tupleItem: Tuple = ['one', true];

// Generics

const input = document.querySelector<HTMLInputElement>('.input');

console.log(input?.value);

function getSecond<ArrayType>(array: ArrayType[]) {
  return array[1];
}

const testArray1 = [1, 2, 3];
const testArray2 = ['one', 'two', 'three'];

const secondItem1 = getSecond<number>(testArray1);
const secondItem2 = getSecond(testArray2);

const typedSet = new Set<string>();
typedSet.add('one');

const typedMap = new Map<string, number>();
typedMap.set('one', 1);

type APIResponse<TData extends object = { status: number }> = {
  data: TData;
  isError: boolean;
};

type UserResponse = APIResponse<{ name: string; age: number }>;
type BlogResponse = APIResponse<{ title: string }>;

const userResponse: UserResponse = {
  data: {
    name: 'Anna',
    age: 30,
  },
  isError: false,
};

const blogResponse: BlogResponse = {
  data: {
    title: 'New Year Post',
  },
  isError: false,
};

function aToO<T>(array: [string, T][]) {
  const obj: {
    [index: string]: T;
  } = {};

  array.forEach(([key, value]) => {
    obj[key] = value;
  });

  return obj;
}

const arrayToConvert: [string, number | boolean][] = [
  ['one', 1],
  ['two', 2],
  ['tree', true],
];

const convertedToObject = aToO(arrayToConvert);

// async functions

function wait(duration: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve('hi'), duration);
  });
}

wait(1000).then((value) => {
  console.log(value.length);
});

// Pick and Omit

type Todo1 = {
  id: string;
  name: string;
  status: string;
  completed: boolean;
};

// type NewTodo1 = Pick<Todo1, 'name' | 'status' | 'completed'>; // use these keys
type NewTodo1 = Omit<Todo1, 'id'>; // exclude these keys

function saveTodo(todo: NewTodo1) {
  return { ...todo, id: crypto.randomUUID() };
}

function renderTodo(todo: Todo1) {
  const div = document.createElement('div');
  div.id = todo.id;
  // do the rest
}

// Partial and Required

type PartialTodo = Partial<Todo1>;
type RequiredTodo = Required<Todo1>;

// type FormTodo = Partial<Pick<Todo1, 'name'>> & Omit<Todo1, 'name'>;

type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>> & T;
type PartialPick<T, Key extends keyof T> = Partial<Pick<T, Key>> & Omit<T, Key>;

type FormTodo = PartialPick<Todo1, 'name'>;

const formTodo: FormTodo = {
  completed: false,
  id: 'fdf2',
  status: 'draft',
};

// ReturnType and Parameters

function checkLength(a: string, b: number) {
  return a.length > b;
}

type ReturnOfLengthCheck = ReturnType<typeof checkLength>;

type FunctionParams = Parameters<typeof checkLength>;

// Record

type Person4 = {
  name: string;
  age: number;
};

// type PeopleGroupedByName = {
//   [index: string]: Person[];
// };

type PeopleGroupedByName = Record<string, Person[]>;

// Readonly

type Todo2 = {
  title: string;
  completed: true;
};

const completedItem = {
  title: 'task1',
  completed: false,
} as const;

type TodoRO = typeof completedItem;

type FinalTodo = Readonly<Todo2>;

// Awaited

async function doSomething() {
  return 3;
}

type AsyncValue = Awaited<ReturnType<typeof doSomething>>; // number

// Type guards

type Todo3 = {
  title: string;
  priority: 'High' | 'Normal' | 'Low' | 'Very Low';
  isComplete: boolean;
  description?: string;
  dueDate: Date | string | number;
};

function extendTodo(todo: Todo3) {
  if (typeof todo.dueDate === 'string') {
    console.log(todo.dueDate);
  } else if (todo.dueDate instanceof Date) {
    console.log(todo.dueDate);
  } else {
    console.log(todo.dueDate);
  }

  if (todo.description !== undefined) {
    todo.description.length;
  }
  todo.description?.length;

  switch (todo.priority) {
    case 'High':
      console.log(todo.priority);
      break;
    case 'Normal':
      console.log(todo.priority);
      break;
    case 'Low':
      console.log(todo.priority);
      break;
    case 'Very Low':
      console.log(todo.priority);
      break;
    default:
      const exhaustiveCheck: never = todo.priority;
      return exhaustiveCheck;
  }
}

const form1 = document.querySelector<HTMLFormElement>('.form');
form1!.addEventListener('submit', () => {}); // ! - means always exists

// Unknown type

function func(data: unknown) {
  if (data != null && typeof data === 'object' && 'name' in data) {
    return data.name;
  }
}

// As casting

fetch('path')
  .then((res) => res.json())
  .then((data) => {
    return data as Todo;
  })
  .then((data) => console.log(data));

// satisfies

type Todo4 = {
  type: string;
  dueDate: string | Date;
  isCompleted: boolean;
};

const todo1 = {
  type: 'buy bread',
  dueDate: new Date(),
  isCompleted: false,
} satisfies Todo4;

todo1.dueDate.setDate(4);

// Discriminated union

type SuccessUserApiResponse = {
  status: 'Success';
  data: {
    name: string;
    id: string;
  };
};

type ErrorUserApiResponse = {
  status: 'Error';
  errorMessage: string;
};

type UserApiResponse = SuccessUserApiResponse | ErrorUserApiResponse;

function handleResponse(res: UserApiResponse) {
  if (res.status === 'Success') {
    console.log(res.data.name);
  } else {
    console.log(res.errorMessage.length);
  }
}

// Function overloads
function sum12(numbers: number[]): number;
function sum12(a: number, b: number): number;
function sum12(first: number | number[], second?: number) {
  if (Array.isArray(first)) {
    return first.reduce((total, num) => total + num, 0);
  }
  if (second !== undefined) {
    return first + second;
  }
}

sum12(2, 3);
sum12([3, 4]);

// Type predicate function

const PRIORITIES = ['High', 'Medium', 'Low'] as const;
type Priority = (typeof PRIORITIES)[number];
type Todo13 = {
  title: string;
  description: string;
};

function func123(todo: Todo13) {
  if (isDescription(todo.description)) {
    todo.description;
  } else {
    todo.description;
  }
}

function isDescription(description: string): description is Priority {
  return PRIORITIES.includes(description as Priority);
}

// debugging

// @ts-ignore: ignores typescript error
func123('test');

// @ts-expect-error: description of the error
func123('test2');

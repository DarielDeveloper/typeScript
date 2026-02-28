console.log(Math.floor(3.14));
//Any type
let cosas: any = 0;
cosas = "no se";
//No es aconsejable usar el any

//Type annotation with object
const personExtern: {
  name: string;
  age: number;
  address: {
    city: string;
    street: string;
  };
} = {
  name: "Alice",
  age: 28,
  address: {
    city: "Habana",
    street: "lisa",
  },
};

//Type Annotations with function
function calculateRectangleArea(lengthRect: number, width: number): number {
  return lengthRect * width;
}

function greeTOpioanl(name: string, age?: number) {
  console.log(
    age !== undefined ? `Hello ${name}, you are ${age} ` : `Hello ${name} `
  );
}

//Function with a reset parameter and type annotations
function addAll(...nums: number[]): number {
  return nums.reduce((n, n1) => n + n1, 0);
}
console.log(addAll(1, 2, 3, 4, 5, +true));

//Union Types
let myVar: string | number;
myVar = "Hello";
myVar = 42;

//La diferencias de los Unions type y los Literal type es que los Literal le especificas los valores que puede tomar, mientras en los unions mientra que respete el tipo puede tomar cualquier valor

// Literal Type
let color: "Red" | "Azul" | "Amarillo";

//Nullable Type se usa cuando las variables no siempre los valores van a estar presente
let username: string | null = "Dariel";
let ageEx: number | null = null;

//Type Alias
type Employee = {
  name: string;
  age?: number;
  email: string;
};

const alice: Employee = {
  name: "Alice",
  age: 28,
  email: "alice@.cu",
};
const clay: Employee = {
  name: "Clay",
  email: "clay@.cu",
};

//Intersection Type
type FirstType = {
  name: string;
  age: number;
};
type SecondType = {
  email: string;
  address: string;
};

const personInter: FirstType & SecondType = {
  name: "Dariel",
  age: 34,
  email: "dnunez@uci.cu",
  address: "Habana",
};

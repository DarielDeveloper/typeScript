//Es una característica que te permite escribir código reutilizable pasando un tipo como parámetro
//Se puede usar para crear class, function, interfaces, Type

function returnType<T>(val: T): T {
  return val;
}
const numValue: number = returnType(100);
const strValue: string = returnType("Dariel");

function multipleType<T, S>(value1: T, values2: S) {
  return `The first value is ${value1} and secund ${values2}`;
}
const valueM = multipleType<string, number>("Dariel", 34);
console.log(valueM);

//Generic Class
class User<T = string> {
  constructor(public value: T) {}
  show(msg: T): void {
    console.log(`${msg} - ${this.value}`);
  }
}

let userOne = new User<string>("Dariel");

let userTwo = new User<number | string>(100);

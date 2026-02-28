//Es una forma de definir una construcción o modelo para la forma y estructura de un objeto

interface Person {
  name: string;
  age: number;
}

const John: Person = {
  name: "John",
  age: 34,
};

interface Person2 {
  name: string;
  age: number;
  greet(msg: string): void;
}

const Sarah: Person2 = {
  name: "Sarah",
  age: 34,
  greet(msg: string) {
    console.log(`${this.greet}`);
  },
};

//Otra forma
interface Setting {
  readonly theme: boolean;
  font: string;
}

interface Setting {
  sidebar: boolean;
}
interface Setting {
  external: boolean;
}
//De esta forma se une todas la declaraciones de la interface Setting
let userSetting: Setting = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true,
};

//Diferencia con type
interface Animal {
  type: string;
}

interface Dog extends Animal {
  bark(): void;
}

class Labrador implements Dog {
  type: string = "dog";
  bark(): void {
    console.log("Woof");
  }
}

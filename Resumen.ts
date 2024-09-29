/*
Typescript es un lenguaje de programcion creado por Microsoft, no sirve para validar datos en tiempo de ejecucion. Es un lenguaje estatico y solo funciona en tiempo de compilacion.

´*/
//Inferencia
//como a y b infiere que son number sin decirle nada
const a = 1;
const b = 1;
const c = a + b;
//c también es number

let cadenatexto = "hola";
//error por tipado
//  cadenatexto=2

//any
let obj: any = { x: 0 };

//function
//Los parametros se debe decir el tipo porque si no obtiene el tipo any
function saludar(name: string) {
  console.log(`Hola ${name}`);
}
//saludar('Dariel');
//Incorecto el llamdo por el tipo de parametro, la function espera un string no un number saludar(2);

//En caso de que el parametro es un Object
//1 forma
//Para especificar el tipo
function saludarObject({ name, age }: { name: string; age: number }) {}

//2 forma
//Para especificar el tipo
function saludarObjectPersona(persona: { name: string; age: number }) {
  const { name, age } = persona;
}

//En caso de que sea una function de parametro para el tipado es:
const sayHi = (name: string) => {
  console.log(`Hola ${name}`);
};

//Otra forma es:
//Hay que tener precausion con la respuesta de la function
const sayHiFromFunction = (fn: (name: string) => void) => {
  fn("Dariel");
};

//Tipar las arrow function
//1 forma y mejor para leer el codigo
const sumar = (a: number, b: number): number => {
  return a + b;
};

//2 forma
const suma2: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

//Hay un tipo que es never se utiliza para los errores la diferencia de este con el void es que el never no termina la function y el void si

//Template union types
// Se usa para validar las asignaciones de las variables
/*
Ejemplo:
type HexadecimalColor=`#${string}` esto es una plantilla que es un string que empieza con #

const color: HexadecimalColor='0033ff' Esto es incorrecto ya que le falta la #

const color: HexadecimalColor='#0033ff' Esto es valido 

*/

//Objetos
//Type Alias
type Hero = {
  readonly id?: string; // readonly le indicas a la propiedad que es solo lectura por lo que advierte cuando se trata de inmutar la propiedad.
  name: string;
  power: number;
  isActive?: boolean; //Propiedad que no es requeridad al crear un Hero
};

let hero: Hero = {
  name: "thor",
  power: 2000,
};

function createHero(hero: Hero): Hero {
  const { name, power } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    power,
    isActive: true,
  };
}

const thor = createHero({ name: "Thor", power: 4000 });

//Union Types
type HeroPowerScale = "local" | "planetary" | "galactic" | "universal";
//Para que no se de error debe escoger los que estan declarado en el HeroPowerScale
let powerHero: HeroPowerScale = "local";

//Type Indexing
type HeroProperties = {
  isActive: boolean;
  address: {
    planet: string;
    city: string;
  };
};

const addressHero: HeroProperties["address"] = {
  planet: "Earth",
  city: "Cuba",
};

//Type from value
const address = {
  planet: "Earth",
  city: "La Habana",
};

type Address = typeof address;
//Cuando utilizas typeof es como crear pero con la base del type
const addressTwitch: Address = {
  planet: "Mars",
  city: "Twitch",
};

//Array

//Forma de declarar array
//1 Forma y mejor vista
const languages: string[] = [];
//2 Forma
const languages2: Array<string> = [];
//Para decir que el array va soportar diferentes tipos es:
const languages3: (string | number)[] = [];

//En caso de matriz
const matrizEjemplo: string[][] = [];

//Tuplas
//Es como un esquema a seguir
//Ejemplo
type CellValue = "X" | "O" | ""; //Especifico los valores permitidos
//Creando tupla
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];

//Creando array que require GameBoard que es una tupla
const gameBoard: GameBoard = [
  ["X", "X", "O"],
  ["X", "X", "O"],
  ["X", "X", "O"],
];

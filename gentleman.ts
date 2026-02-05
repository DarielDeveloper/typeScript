//TypeScript -> javascript con esteroides
//Beneficios
/*
1-Seguridad
2-Mantenibilidad
3-Refactorización
*/

//Ejemplo de class

class Persona {
  //Propiedades
  name: string;
  //Constructor
  constructor(name: string) {
    this.name = name;
  }
  //Métodos
  getName = () => this.name;
  setName = (name: string) => (this.name = name);
}

//Ejemplo de Interfaz
interface PersonaInterfaz {
  name: string;
  getName(): string;
  setName(name: string): void;
}
/*OJO*/
//Si se comparte las mismas propiedades y métodos typeScript no se queja ya que se crea con la misma forma esto es llamado shein

const persona: Persona = new Persona("Dariel");
let personaPosible: PersonaInterfaz = persona;

//Ejemplo problemático, donde hay que ayudar a typescript indicarle al tipo
//Caso un array de objeto donde el label de un objeto es opcional, pero lo declara undefined
const arregloValores = [{ numero: 1, label: "valor 1" }, { numero: 2 }];

const buscar = (param: typeof arregloValores): void => {
  const indexArray = [1, 2];
  indexArray.forEach((index: number): void => {
    /*OJO*/
    //typeScript no va guardando lo que esta controlando, lo va haciendo en cuanto su referencia
    const value = param[index];
    //El problema es aca cuando tipo te dice que value.label puede ser string | undefined, pero cuando ya tiene referencia con la const value y se pregunta por el label ya el solo deja pasar cuando el label exista que este caso es tipo string, por lo que en el console solo aparece que value.label es de tipo string y no undefined
    if (value.label) {
      console.log(value.label);
    }
  });
};

//Enum
// Es un tipo por lo que se puede Tipar
enum NIENUM {
  ARG = "passport",
  ES = "nie",
}
//Ejemplo de Tipar con enum
const dimeELNI = (ni: NIENUM) => ni;
//Aceptando el enum
dimeELNI(NIENUM.ARG);

/*OJO */
//type es una palabra reservada de typescript para crear custom type
type ARG = string; //Esto es conocido como alias ya que cuando se utilice el type ARG y se decida cambiar el tipo a number ejemplo solo se cambia en la declaración
//Ejemplo de unionType
type NITYPE = "passport" | "nie";

//Son los elementos que se comparten entre string y number
type A = string | number;

//Son los elementos que se suman entre string y number
type B = string & number;

//Diferencias entre unknown y any
//unknown
let numero: unknown = 1;
//Cuando vas a usar la variable n de tipo unknown tienes que castear una de las formas es <type>var
let suma = (n: unknown) => <number>n + 1;

//any
let numero2: any = "2";
//Estas declarando la variable con tipado dinámico ya que puede coger cualquier tipo, al usar la variable no va haber quejas ya que declaraste que es de tipo any

/* OJO */
//En typescript trata de generalizar para tipar de esta forma le estas diciendo que es solo de lectura y va tomar de valor ["rojo", "azul", "amarillo"]. Si quitas el as const te va decir que es de tipo string [].
const colores = ["rojo", "azul", "amarillo"] as const;

//Se utiliza mucho en variables de configuración ya que pone la variable en solo lectura
//Ejemplo
function configuration() {
  return {
    modo: "prod",
    version: "1.0",
    depurar: false,
  } as const;
}
const obtenerConfig = configuration();
//obtenerConfig.depurar = true; No puedes modificar la propiedad

//Genérico
const metodo = <T>(x: T): T => x;
const a = metodo<number>(1);
const b = metodo<string>("1");

//functional overloading
//Solo se hace con funciones
function metodoStringOrNumber(x: string): number;
function metodoStringOrNumber(x: number): string;
function metodoStringOrNumber(x: string | number): number | string {
  if (typeof x === "number") {
    return x.toString();
  }
  if (typeof x === "string") {
    return x.length;
  }
  return x;
}

//Ejemplo que no se puede usar interface
enum Claver {
  name = "name",
  raza = "raza",
}
//Has todo con interface HAST que no puedas y ahi usa type
type Mamal = {
  [key in Claver]: string;
};

//Haciendo un tipo que dependa de una propiedad para el resultado de la función
type Dependant<T extends { properties: any }> = T["properties"];
type Independant = {
  properties: string;
};
const dependant: Dependant<Independant> = "1";

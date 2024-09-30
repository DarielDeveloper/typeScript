//Ejemplo de plantilla de tipo o template of type
type Color = `#${string}`;

const hexadecimalColor: Color = "#ff0000er";

//En el momento de utilizar las tuplas hay que tener cuidado ya que hay un problema que es: mutables a no ser que le actives el modo solo lectura.

/******************** Tuplas ************/
type RGB = readonly [number, number, number];

const rgb: RGB = [255, 255, 0];

//Ojo con esto, ahi se esta mutando la tupla ya que se declara la tupla con 3 elementos. Para solucionar este error es mediante del uso readonly en la declaración.
//rgb.push(4)

/******************** Enums ************/
//Se utiliza para tratar con datos finitos y estáticos
//Ejemplo: Dia de la semana, mes, errores ...

//Hay 2 formas de declarar:
//1- sin const:
enum Error_TYPES {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
}
//2- con const
const enum Error_TYPES_PAGE {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
}
//Cuando se compila el código el ejemplo 1 genera mas código, en la mayoría de los caso se utiliza el enum con const. El otro se utiliza cuando estas desarrollando para un producto externo.

function mostrarMensaje(tipodeError: Error_TYPES) {
  if (tipodeError == Error_TYPES.NOT_FOUND) {
    console.log("No se encuentra el recuro.");
  } else if (tipodeError == Error_TYPES.UNAUTHORIZED) {
    console.log("No puedes acceder.");
  } else if (tipodeError == Error_TYPES.FORBIDDEN) {
    console.log("No tiene los permisos requeridos.");
  }
}

//Ascensiones  de tipo
const canvas = document.getElementsByTagName("canvas");
//Le preguntamos por la instancia del elemento
if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
}

//typeof -> para tipos
// instanceof -> para instancias

/******************** interface ************/
//Es como el type, pero es como decirle como debe ser la forma
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  quality: number;
}

//Entre type e interface es mas recomendado usar type por sus restricciones:
//-No se puede repetir el la declaración

/******************** type guard ************/
//Esto es una forma de discriminar un type o interface
//Esto se debe evitar
interface Sonic {
  nombre: string;
  company: string;
  correr: () => void;
}
interface Mario {
  nombre: string;
  company: string;
  salta: () => void;
}
//Teniendo en cuenta lo planteado como identificas uno del otro, es por la function

type Personajes = Sonic | Mario;

function checkendPersonajes(personaje: Personajes): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined;
}

function jugar(personaje: Personajes) {
  if (checkendPersonajes(personaje)) personaje.correr();
}

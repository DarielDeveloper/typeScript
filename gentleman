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

/*OJO */
//type es una palabra reservada de typescript para crear custom type

//Enum
// Es un tipo por lo que se puede Tipar

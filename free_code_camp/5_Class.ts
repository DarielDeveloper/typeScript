//Es un modelo para hacer objetos con propiedades y métodos
class Product {
  id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getProduct(): string {
    return `ID: ${this.id}, name: ${this.name}, price: ${this.price}`;
  }
}
//Creando una instancia de la clase
const product1 = new Product(1, "Pera", 20);
console.log(product1.getProduct());
//Por default si no le especifica las propiedades van a tomar como public

//Class public
class MyClassPublic {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const instancePublic = new MyClassPublic("Dadi");
//Cuando una propiedad se hace publica se puede acceder desde la instancia y no necesario de métodos
console.log(instancePublic.name);

//Class private
class MyClassPrivate {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  revealName() {
    return `El name secreto es ${this.name}`;
  }
}

const instancePrivate = new MyClassPrivate("Dariel");
//Cuando una propiedad se hace privada solo se  puede acceder desde el método
console.log(instancePrivate.revealName());

//Extend class
class Parent {
  protected famalyName: string;
  constructor(name: string) {
    this.famalyName = name;
  }
}
class Child extends Parent {
  introduceFamily() {
    console.log(`Our family name es ${this.famalyName}`);
  }
}

/*
Polymorphism & Method Override  
 */
//Define an abstract class
abstract class AbstractEntity {
  private static nextId: number = 1;
  protected constructor(public id: number, protected name: string) {}
  static generateNexId(): number {
    return AbstractEntity.nextId++;
  }
  abstract getEntityInfo(): string;
}

//Create a concrete subclass
class Entity extends AbstractEntity {
  constructor(id: number, name: string) {
    super(id, name);
  }
  getEntityInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

/* 
Diferencia entre interface y class
*/
//Las clases sirve para crear objetos mientras las interfaces sirve para definir la forma de un objeto

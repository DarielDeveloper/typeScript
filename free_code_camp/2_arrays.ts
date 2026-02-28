let fruits: string[] = ["apple", "orange", "banana"];

let arrayOne: number[] = [1, 2, 3];
let arrayTwo: string[] = ["a", "b", "c"];
let arrayThree: (string | number)[] = [...arrayOne, ...arrayTwo];

// Tuple
let articule: readonly [number, string, boolean] = [1, "React", true];

//Assigning a new tuple value
articule = [2, "Vue", false];

//Destructure the tuple
const [id, title, activated] = articule;

let a: number;
let b: boolean;
let c: string;
let d: any;

let e: number[];


enum Color { Red, Green, Blue };
let background = Color.Red;


interface Point {
    x: number,
    y: number
}
let point: Point;  //Interface defines shape of an object

type Circle = { //Type => type alias, they provide alias alternate type names
    radius: number,
    center: number
}

let circle: Circle
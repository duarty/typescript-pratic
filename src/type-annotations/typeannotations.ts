/* eslint-disable */

// primitive types
let nome: string = 'jose'; //any string type "string" or 'string'
let age: number = 30; // 10, 1.41, -1.41, 0xf00d, 0b1010...
let adult: boolean =  true; // boolean type, true or false
let simbol: symbol = Symbol('any symbol'); //symbol
//let big: bigint =  20n; //big int


//Arrays
let arrNumbers1: Array<number> = [1, 2, 3]; //numbers array mode 1
let arrNumbers2: number[] = [1, 2, 3]; //numbers array mode 2

let arrStrings1: Array<string> = ['jose', 'duarty', 'neto']; //strings array mode 1
let arrStrings2: string[] = ['jose', 'duarty', 'neto']; //strings array mode 1

//Objects
let perssoa: {nome: string; idade: number; adulto?: boolean} = {
    nome: 'jose',
    idade: 32,
    adulto: true
};

//functions

const sum1 = (x:number, y: number): number => {
    return x + y;
};

const sum2: (x:number, y:number) => number = (x, y) => x + y;

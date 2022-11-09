// Array<Type>; Type[]

// Array[Type]
const multyArgs = (...args: Array<number>): number => {
  return args.reduce((multiply, value) => multiply * value, 1);
};

const resultMultiply: number = multyArgs(1, 2, 3, 4, 5, 6, 7);
console.log(resultMultiply);

// Type[]
const sumArgs = (arr: number[]): number => {
  return arr.reduce((sum, value) => sum + value, 1);
};

const resultSum: number = sumArgs([1, 2, 3, 4, 5, 6, 7]);
console.log(resultSum);

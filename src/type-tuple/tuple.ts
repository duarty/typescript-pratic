const clientData: [number, string] = [1, 'jose'];

console.log(clientData);

clientData[0] = 2;
clientData[1] = 'maximus';
console.log(clientData);

//readonly
const arr: readonly string[] = ['Jose', 'Duarte'];
const arrDog: ReadonlyArray<string> = ['Jose', 'Duarte'];
console.log(arr, arrDog);

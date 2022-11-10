type Age = number;
type Person = {
  name: string;
  age: number;
  salary: number;
  country?: string;
};

type African = 'Congo' | 'Egipt' | 'South Africa';
type American = 'USA' | 'Brazilian' | 'Candian';
type Country = African | American;

const person: Person = {
  name: 'jose',
  age: 32,
  salary: 120_000, //120000
};

const setPersonCountry = (country: Country, person: Person) => {
  return { ...person, country: country };
};

console.log(setPersonCountry('Brazilian', person));

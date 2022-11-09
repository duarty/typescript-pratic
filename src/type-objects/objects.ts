const ObjectA: {
  readonly planet: string;
  name: string;
  age: number;
  race?: string;
  [key: string]: string;
} = {
  planet: 'eath',
  name: 'jose',
  age: 32,
  race: 'human',
};

console.log(ObjectA);

ObjectA.name = 'maximus';
ObjectA.age = 2;
ObjectA.race = 'dog';
ObjectA.color = 'white/yellow';
console.log(ObjectA);

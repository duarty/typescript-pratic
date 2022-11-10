type mapOddsCallback = (item: number) => string;
const odds = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const mapNumbers = (arr: Array<number>, cb: mapOddsCallback): Array<string> => {
  const oddsArr: Array<string> = [];
  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];
    oddsArr.push(cb(item));
  }
  return oddsArr;
};

const mapedOdds = mapNumbers(odds, (item) => item.toString());

console.log(mapedOdds);

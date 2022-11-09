// never type is used when a function never returns  , ex: errors
const err = (): never => {
  throw new Error('Any error!');
};

err();

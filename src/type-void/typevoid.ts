const noReturn = (...args: Array<string>): void => {
  console.log(args.join(' '));
};
noReturn('jose', 'duarte');

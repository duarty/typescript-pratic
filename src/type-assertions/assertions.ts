// test recomended
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

//Type assertion recomended
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//not recomended
const body4 = document.querySelector('.input') as HTMLInputElement;
body4.style.background = 'red';

//Non-null assertion  not recomended
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

//Type assertion not recomended
const body5 = document.querySelector('body') as unknown as number;
body5.style.background = 'red';

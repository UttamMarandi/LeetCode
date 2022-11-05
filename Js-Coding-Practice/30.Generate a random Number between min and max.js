//  Generate a random Number between min and max?

const min = 10;
const max = 120;

const findRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(findRandom(10, 120));

const findRandom2 = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

console.log(findRandom2(10, 120));

const findRandom3 = (min, max) => {
  const randomMax = max - min;
  const randomValue = Math.ceil(Math.random() * randomMax);
  return randomValue + min;
};

console.log(findRandom3(10, 120));

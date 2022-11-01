// Write a random integers function to print integers with in a range?
// Example:

// Input: 1, 100
// Output: 63

const findRandom = (minRange, maxRange) => {
  let randomValue = Math.floor(Math.random() * maxRange);
  if (randomValue < minRange) {
    randomValue = randomValue + minRange;
  }
  return randomValue;
};

console.log(findRandom(10, 120));

const findRandom2 = (minRange, maxRange) => {
  return Math.ceil(Math.random() * (maxRange - minRange)) + minRange; // NO need of adding +1 here
};

console.log(findRandom2(10, 120));

const findRandom3 = (minRange, maxRange) => {
  return Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange; //we have to add one here b.c Math.floor returns 0 for 0<value<1
};

console.log(findRandom3(10, 120));

const names = ["John", "Paul", "George", "Ringo", "John"];

const findDuplicateOne = (names) => {
  const mySet = new Set(names);
  return [...mySet];
};

console.log(findDuplicateOne(names));
console.log("names:", names);

const findDuplicateTwo = (names) => {
  return names.filter((name, i) => names.indexOf(name) === i); //indexOf(value) will return the index of the first occurance of the value in the array. So acc to our comparision 2nd occurance will be discarder
};

console.log(findDuplicateTwo(names));

const findDuplicateThree = (names) => {
  let unique = {};
  names.forEach((name) => {
    if (!unique[name]) {
      // If name key exists in unique then pass , if it does not existt set name as key of unique object with value true.
      unique[name] = true;
    }
  });
  return Object.keys(unique);
};

console.log(findDuplicateThree(names));

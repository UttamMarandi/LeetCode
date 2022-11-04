// Q. Write a script that returns the number of occurrences of character given a string as input

function countCharacters(str) {
  return str
    .replace(/ /g, "") //replace empty string with nothing
    .toLowerCase()
    .split("")
    .reduce((p, c) => {
      if (c in p) {
        p[c]++;
      } else {
        p[c] = 1;
      }
      return p;
    }, {});
}
console.log(countCharacters("Uttam"));

const countCharacters2 = (str) => {
  const splitArray = str.replace(/ /g, "").toLowerCase().split("");
  console.log("splitArray:", splitArray);
  const reduced = splitArray.reduce((a, c) => {
    if (c in a) {
      a[c]++; //Intially the char key will not be present in reduced object. so the key will get initialize with value 1 in else block. and on subsequent occurences it gets incremented
    } else {
      a[c] = 1;
    }
    return a;
  }, {});
  console.log("reduced:", reduced);
  return reduced;
};

console.log(countCharacters2("Uttam 2"));

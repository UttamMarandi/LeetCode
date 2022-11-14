const arr = [5, 1, 3, 2, 6];

// Double -

// Triple -

// Binary -

const output = arr.map((item) => {
  return item * 2;
});

console.log("output:", output);

const double = (x) => {
  return x * 2;
};

const output2 = arr.map(double);
console.log("output2:", output2);

const binary = (x) => {
  return x.toString(2);
};

const output3 = arr.map(binary);
console.log("output3:", output3);

const triple = (x) => x * 3;

const output4 = arr.map(triple);
console.log("output4:", output4);

// Filter Function

// filter odd values
const outpu5 = arr.filter((x) => x % 2 !== 0);
console.log("outpu5:", outpu5);

// find even values

const output6 = arr.filter((x) => x % 2 === 0);
console.log("output6:", output6);

// find elements greater than 4

const output7 = arr.filter((x) => x > 4);
console.log("output7:", output7);

// Reduce Method
// take all elements of an array and come up with a single element

// sum , max, min

const findSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

const output8 = findSum(arr);
console.log("output8:", output8);

const output9 = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log("output9:", output9);

// Maximum value in an array

const findMax = () => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log("findMax:", findMax());

//Find max using reduce

const outuput10 = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return curr;
}, 0);

console.log("outuput10:", outuput10);

const users = [
  { firstName: "Akshay", lastName: "Saini", age: 26 },
  { firstName: "Uttam", lastName: "Marandi", age: 75 },
  { firstName: "Donald", lastName: "Trump", age: 50 },
  { firstName: "Barack ", lastName: "Obama", age: 26 },
  { firstName: "Bill", lastName: "Clinton", age: 26 },
];

// list of full name of all the users

const fulNames = users.map((user) => `${user.firstName} ${user.lastName}`);
console.log("fulNames:", fulNames);

// How may users have same age
// Output : {26:3, 75:1, 50:1}

const ages = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age]; // left side is key & right side is value
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log("ages:", ages);

// Get first name of all the people whose age is less than 30
//Output = ["Akshay","Barack","Bill"]

const lessThan30Persons = users
  .filter((user) => user.age < 30)
  .map((user) => user.firstName);

console.log("lessThan30Persons:", lessThan30Persons);

const reduceLessThan30 = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log("reduceLessThan30:", reduceLessThan30);

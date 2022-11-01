// Q. Use a closure to create a private counter?
// Example:

// You can create a function within an outer function (a closure) that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function.

const counter = () => {
  let count = 0;
  return {
    add: function () {
      count = count + 1; //increment
    },
    retrieve: function () {
      return `The value of count is ${count}`;
    },
  };
};

console.log(counter());

console.log(counter().count);
console.log(counter.count);

const c = counter();

c.add();

const value = c.retrieve();
console.log("value:", value);

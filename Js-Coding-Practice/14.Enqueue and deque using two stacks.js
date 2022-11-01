// Q. Implement enqueue and dequeue using only two stacks
// Enqueue means to add an element, dequeue to remove an element.

// Meaning
// Dequeue - If there is element in the output stack pop that element. If there is no element in the output stack than pop an element from the input stack and push it to the output stack as long as the the input stack is not empty. Then pop the last element from output stack
// Enqueue - Push an element to the input stack.

let inputStack = [1, 2, 3]; //main container
let outputStack = [4, 5, 6];

const enqueue = (inputStack, item) => {
  //Enqueue
  return inputStack.push(item);
};

const dequeue = (inputStack, outputStack) => {
  if (outputStack.length <= 0) {
    while (inputStack.length > 0) {
      const outputElememt = inputStack.pop(); //.pop() returns deletes the last element of an array and returns the emlemenet.
      outputStack.push(outputElememt);
      //   above lines is basically causing reversion. pop() from input and push to output
    }
  }
  outputStack.pop();
};

console.log(enqueue(inputStack, 8));
console.log(inputStack);
console.log(outputStack);

console.log(dequeue(inputStack, outputStack));
console.log(outputStack);
console.log(inputStack);

console.log(dequeue(inputStack, outputStack));
console.log(outputStack);
console.log(inputStack);

console.log(dequeue(inputStack, outputStack));
console.log(outputStack);
console.log(inputStack);

console.log(dequeue(inputStack, outputStack));
console.log(outputStack);

console.log(inputStack);

console.log(dequeue(inputStack, outputStack));
console.log(outputStack);
console.log(inputStack);

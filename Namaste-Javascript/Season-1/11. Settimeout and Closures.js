function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 1000);
  console.log("Uttam Marandi");
}
x();

// Result
// Uttam Marandi // b.c setTimeout is async
// 1

// Write a function that will print 1 after 1s , 2 after 2s, 3 after 3s and so on .

// Wrong Method

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("Uttam Marandi");
}

x();

//output
//6
//6
//6
//6
//6
//6

//We are receiving such output because of the closure. A closure is function along with it's lexical enviroment.
//so when a fucntion is executed outside it's scope still it remembers it's lexical enviroment. So it has access to the variables of it's lexical scope.
//When setTimeOut store the callback function in some place, that callback function remembers the reference to i and not the value of i.
//So they receive the same value b.c they are referencing to that same i b.c we have only one execution context for the callback function.
//Javascript is synchronous in nature. So it does not wait for anything. The for loop runs first,completes and then the setTimeout callback functions starts running.
//So in the end value of i is set to 6.So , we log 6 5 times as we have the same i reference

// Right Code 1

// use let instead of var

function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("Uttam Marandi");
}

x();

// let has block scoble and are not stored in function execution context. So, each block will persist the value of i when async setTimeOut code runs , the callback function
// creates a new scope for itself and has it's own version of i

// Right Code 2
// What if you can't use var
// Above issue was happening with var because as var has function scope it creates a closure with for loop i variable and persists that single reference i only.
// Instead of that what we can do is create a new function inside for loop and pass i as a parameter which will be user for setTimeout method. In this way we will create a different closure
// each time for loop runs with new i variable.

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(j) {
      setTimeout(() => {
        console.log(j);
      }, j * 1000);
    }
    close(i);
  }
}

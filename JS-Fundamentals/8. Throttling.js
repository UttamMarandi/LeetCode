// Throttling is used for performance optimization.
// It is used for rate limiting of function call or function execution.
// Let's say we have a button which fetches an data from an api. so it's an expensive execution
// But if user clicks multiple times than api get's called multiple time which can cause performance issues.
// What throttling does is , it delays the function call after certain amount of time let's say 1000ms , even if user is clicking it multiple times.

const expensive = () => {
  console.log("Expensive function");
};

// let's say this expensive function gets called while resizing window. But resize event can fire an unhealthy amount of times in fraction of seconds.
// Here we need to implement throttling.

window.addEventListener("resize", expensive);

const betterExpensive = throttle(expensive, 500); // we need to create a throttle function that takes the expensive function and the delay as parameters and returns the better verison of expensive
// function  which can be called only after 500ms

const throttle = (func, limit) => {
  let flag = true;
  return function () {
    if (flag) {
      func();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

//  handling this and arguments function

const betterThrottle = (func, limit) => {
  let flag = true;
  return (...args) => {
    if (flag) {
      func.apply(this, args);
      flag = false;
      setTimeout(() => (flag = false), limit);
    }
  };
};

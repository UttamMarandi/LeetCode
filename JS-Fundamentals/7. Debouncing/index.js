// Debouncing in javascript

let counter = 0;

const getData = () => {
  // calls an API and gets data
  console.log("Fetching Data", counter++);
};

//  Once we pause then only getData() should be called
const doSomeMagic = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d); // once getData is called wait for 300ms
  };
};

const betterFunction = doSomeMagic(getData, 300);

// Debouncing is use to optimize functions.

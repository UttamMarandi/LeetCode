// Check if object is empty or not using javaScript?

const isObjectEmpty = (obj) => {
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      return `It is an array`;
    } else {
      if (Object.keys(obj).length > 0) {
        return `Object is not empty`;
      } else {
        return `Object is empty`;
      }
    }
  } else {
    return `Not an object`;
  }
};

console.log(isObjectEmpty({ s: 2 }));
console.log(isObjectEmpty({}));
console.log(isObjectEmpty());
console.log(isObjectEmpty([]));
console.log(isObjectEmpty([3]));

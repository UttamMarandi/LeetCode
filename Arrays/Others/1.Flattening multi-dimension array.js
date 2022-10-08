const flatenArray = (arr) => {
  const flatArray = [].concat(...arr);

  return flatArray.some((item) => Array.isArray(item))
    ? flatenArray(flatArray)
    : flatArray;
};

const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
const flatArr = flatenArray(multiDimensionalArr);
console.log("flatArr:", flatArr);

const multiDimensionalArr2 = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];

const flatArray2 = multiDimensionalArr2.flat(Infinity);
console.log("flatArray2:", flatArray2);

// We can also pass number values into .flat() instead of Infinity to define level of flatness

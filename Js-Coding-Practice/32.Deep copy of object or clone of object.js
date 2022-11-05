// Q. How to perform deep copy of object or clone of object?

const myObj = { a: 1, b: { c: 2, d: 3, f: 1 }, e: 4 };

const deepCopyObj = JSON.parse(JSON.stringify(myObj)); //It will not work for these object types  : Dates, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays, Typed Arrays
console.log("deepCopyObj:", deepCopyObj);

// const structureDeep = structuredClone(deepCopyObj);

//For deepcloning better to use loadash functions
const deepObject = _.deepClone(myObj);
console.log("deepObject:", deepObject);

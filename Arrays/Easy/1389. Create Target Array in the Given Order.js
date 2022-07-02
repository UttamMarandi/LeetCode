/**
 * 1389. Create Target Array in the Given Order
 * 
 * Given two arrays of integers nums and index. Your task is to create target array under the following rules:

    Initially target array is empty.
    From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
    Repeat the previous step until there are no elements to read in nums and index.
    Return the target array.

    It is guaranteed that the insertion operations will be valid.
 * 

    Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
    Output: [0,4,1,3,2]
 */

const nums = [0, 1, 2, 3, 4];
const index = [0, 1, 2, 2, 1];

var createTargetArray = (nums, index) => {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    // We are assuming that the nums and index array will have same length.
    let value = nums[i];
    let idx = index[i];
    output.splice(idx, 0, value);
    // Array.splice(index,numberOfItemstobeDeleted, value1Inserted,value2...)
    //if numberOfItemstobeDeleted is 0 , then splice acts as insertion method.
    console.log("output:", output);
  }
  return output;
};

createTargetArray(nums, index);

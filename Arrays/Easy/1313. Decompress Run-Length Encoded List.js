/**
 * 1313. Decompress Run-Length Encoded List
 *
 * Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.
 *
 * Input: nums = [1,2,3,4]
 * Output: [2,4,4,4]
 *
 */

var decompressRLElist1 = function (nums) {
  let output = [];

  for (let i = 0; i < nums.length; i = i + 2) {
    // We only want the even numbers b.c they represent frequencies.
    for (let j = 0; j < nums[i]; j++) {
      //with nums[i] as constraint , push the next element to the output.
      output.push(nums[i + 1]);
    }
  }
  return output;
};

var decompressRLElist2 = function (nums) {
  let output = [];

  for (i = 0; i < nums.length; i = i + 2) {
    let frequency = nums[i]; // All even indexed are frequecies
    let value = nums[i + 1]; //All odd indexed are values.

    output.push(...new Array(frequency).fill(value)); // Array(lengthOfArray).fill(filling value)
    // We are spreading b.c we don't want array inside of an array. We want the values only.
  }

  return output;
};

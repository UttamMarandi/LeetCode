/**
 * 
 * Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.



Input: nums = [1,2,2,1], k = 1
Output: 4
 */

const nums = [1, 2, 2, 1];
const k = 1;

/**
 * Answer 1
 *
 * Errorr : 1. Time limit exceeded
 * Eror 2 : 2 . output is NaN
 *
 */

var countKDifference = function (nums, k) {
  let output = 0;
  for (let i = nums.length; i >= 0; i++) {
    output += Math.abs(nums[i] - nums[i - 1]);
  }

  return output;
};

countKDifference(nums, k);

/**
 * Answer 2
 *
 *
 *
 */

var countKDifference2 = function (nums, k) {
  let output = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // 2nd itereation is to get the next element
      if (Math.abs(nums[i] - nums[j]) === k) {
        output++;
      }
    }
  }
  console.log("output:", output);
  return output;
};

countKDifference2(nums, k);

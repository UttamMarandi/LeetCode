/* 
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
*/

var smallerNumbersThanCurrent = function (nums) {
  let output = [];
  let count = 0;
  for (i = 0; i < nums.length; i++) {
    // Get hold of the first elements
    for (j = 0; j < nums.length; j++) {
      // With first element as reference start traversing all the elements including first and compare.
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    output.push(count);
    count = 0; //reset to 0 after eact element traversed.
  }
  return output;
};

// # 2367. Number of Arithmetic Triplets

// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

// ```

// Example 1:

// Input: nums = [0,1,4,6,7,10], diff = 3
// Output: 2
// Explanation:
// (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3.
// ```

// Brute Force , O(n^3) solution

{
  const returnTriplets = (nums, diff) => {
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
        for (let k = i + 2; k < nums.length; k++) {
          if (nums[j] - nums[i] == diff && nums[k] - nums[j] == diff) {
            count++;
          }
        }
      }
    }
    return count;
  };

  console.log(returnTriplets([1, 3, 4, 6, 8, 12, 14], 3));
  console.log(returnTriplets([1, 3, 5, 7, 9], 2));
}

// O(n^2) solution

{
  const arithmeticTriplets = (nums, diff) => {
    let count = 0;
    for (let num of nums) {
      if (nums.includes(num + diff) && nums.includes(num + diff * 2)) {
        count++;
      }
    }
    return count;
  };

  console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
}

// O(nlogn) solution

{
  const arithmeticTriplets = (nums, diff) => {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      let j = binarySearch(nums, nums[i] + diff, i + 1, nums.length - 1);
      let k = binarySearch(nums, nums[j] + diff, j + 1, nums.length - 1);
      if (k !== -1) {
        count++;
      }
    }
    return count;
  };

  const binarySearch = (array, target, start, end) => {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (array[mid] === target) {
        return mid;
      } else if (array[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  };

  console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
}

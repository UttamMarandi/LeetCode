/**
 * There is a hidden integer array arr that consists of n non-negative integers.

It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].

You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].
 * 
 Input: encoded = [1,2,3], first = 1
Output: [1,0,2,1]
 */

var decode = function (encoded, first) {
  let output = [first]; //the first output element is given.

  for (let i = 0; i < encoded.length; i++) {
    // try to understand XOR operation on integers.
    output.push(output[i] ^ encoded[i]);
  }

  return output;
};

//  Let's say we have two elements a,x
// a =b ^ x;
// b = a ^ x; // In order to find the decoded value , we have apply XOR on result itself.

// Time Complexity : O(n)
// Space Complexity : O(n)

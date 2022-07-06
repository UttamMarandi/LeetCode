/**
 * Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.
 * 
 * 
 * Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
 * 
 */

const word1 = ["ab", "c"];
const word2 = ["a", "bc"];

/**
 * Answer 1
 *
 *
 */

var arrayStringsAreEqual = function (word1, word2) {
  let output;
  let string1 = "";
  let string2 = "";
  for (let i = 0; i < word1.length; i++) {
    string1 += word1[i];
  }
  for (let i = 0; i < word2.length; i++) {
    string2 += word2[i];
  }
  if (string1 === string2) {
    output = true;
  } else {
    output = false;
  }

  return output;
};

arrayStringsAreEqual(word1, word2);

/**
 * Answer 2
 *
 *
 */

var arrayStringsAreEqual2 = function (word1, word2) {
  if (word1.join("") === word2.join("")) {
    return true;
  } else {
    return false;
  }
};

arrayStringsAreEqual2(word1, word2);

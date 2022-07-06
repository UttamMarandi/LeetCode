/**
 * You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.
 * 
 * Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
   Output: 2
 * 
 */

const allowed = "ab";
const words = ["ad", "bd", "aaab", "baa", "badab"];

/**
 * Wrong Answer 1
 *
 *
 */

var countConsistentStrings = function (allowed, words) {
  let ouptput = 0;

  words.forEach((word) => {
    console.log("word:", word);
    if (allowed.includes(word)) {
      // The error is that .includes check if the entire string is present in the passed string. But we want if any of the char is present and if any other char outside allowed is present then discard.
      ouptput++;
    }
  });
  return ouptput;
};

countConsistentStrings(allowed, words);

/**
 *
 * Answer 2
 *
 *
 *
 */

var countConsistentStrings = function (allowed, words) {
  let ouptput = 0;

  words.forEach((word) => {
    let isConsistent = true;
    for (let char of word) {
      //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
      if (allowed.indexOf(char) < 0) {
        isConsistent === false;
      }
    }
    if (isConsistent) {
      ouptput++;
    }
  });
  return ouptput;
};

countConsistentStrings(allowed, words);

/**
 * You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

 Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
 */

const items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "phone"],
  ["phone", "gold", "iphone"],
];

const ruleKey = "color";
const ruleValue = "silver";

var countMatches = function (items, ruleKey, ruleValue) {
  const matched = items
    .map((item) => item.filter((value) => value === ruleValue))
    .flat();
  console.log("matched:", matched.length);

  //   This did not work b.c I was just trying to match any value in the array with rule value.
  // But I guess I have to do it the manual way.

  return matched.length;
};

countMatches(items, ruleKey, ruleValue);

var countMatches2 = function (items, ruleKey, ruleValue) {
  const position = ["type", "color", "name"]; // we are defining the rulekeys in the same order as defined in the input array items.
  const ruleIndex = position.findIndex((e) => e === ruleKey);
  //   find the index of ruleKey in position so that we can check ruleValue for only that key.
  console.log("ruleIndex:", ruleIndex);

  const output = items.filter((item) => item[ruleIndex] === ruleValue).length;
  console.log("output:", output);
};

countMatches2(items, ruleKey, ruleValue);

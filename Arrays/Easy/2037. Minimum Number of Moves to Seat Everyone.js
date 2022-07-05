/**
 * There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.

You may perform the following move any number of times:

Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

Note that there may be multiple seats or students in the same position at the beginning.

Input: seats = [3,1,5], students = [2,7,4]
Output: 4
 * 
 */

const seats = [3, 1, 5];
const students = [2, 7, 4];

/**
 * Original Answer
 * Error : Time limit exceeded
 */

var minMovesToSeat = function (seats, students) {
  let output = 0;
  seats = seats.sort((a, b) => a - b); // sort the arays
  console.log("seats:", seats);
  students = students.sort((a, b) => a - b);
  console.log("students:", students);
  for (let i = 0; i < seats.length; i++) {
    for (let j = 0; j < students.length; j++) {
      while (seats[i] !== students[i]) {
        // as long as value are not same in both arrays perform operation.
        if (students[i] > seats[i]) {
          students[i] - 1;
          output++;
        } else {
          students[i] + 1;
          output++;
        }
      }
    }
  }
  console.log("output:", output);
  return output;
};

minMovesToSeat(seats, students);

/**
 * Attempt 2
 *
 *
 *
 */

var minMovesToSeat2 = function (seats, students) {
  let counter = 0;
  seats.sort((a, b) => a - b); // Number are sorted in this manner
  students.sort((a, b) => a - b);

  for (let i = 0; i < seats.length; i++) {
    let diff = students[i] - seats[i];
    if (diff < 0) {
      // we can also use Math.abs instead of this way.
      diff = diff * -1;
    }
    counter += diff;
  }
  return counter;
};

minMovesToSeat2(seats, students);
console.log("minMovesToSeat2:", minMovesToSeat2(seats, students));

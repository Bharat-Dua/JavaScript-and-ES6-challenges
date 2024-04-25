/* CHALLENGE 20 - Sum positive and negative numbers

Create a function sumPlusMinus() that takes array
and sums separately positive and negative numbers.

It should return an object like this:
{
  plus: 74, // sum of all positive numbers
  minus: -54 // sum of all negative numbers
}
*/

"use strict";

var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Write sumPlusMinus() function here
//* method 1 for of loop
function sumPlusMinus(arr) {
  let sumPlus = 0;
  let sumMinus = 0;

  for (let num of arr) {
    if (num > 0) {
      sumPlus += num;
    } else if (num < 0) {
      sumMinus += num;
    }
  }

  return {
    plus: sumPlus,
    minus: sumMinus,
  };
}

//* method 2 for loop

function sumPlusMinus(arr) {
  let plus = 0;
  let minus = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      plus += arr[i];
    } else if (arr[i] < 0) {
      minus += arr[i];
    }
  }

  return { plus, minus };
}

//* method 3  using reduce

function sumPlusMinus(arr) {
  return arr.reduce(
    (acc, ele) => ({
      plus: ele > 0 ? acc.plus + ele : acc.plus,
      minus: ele < 0 ? acc.minus + ele : acc.minus,
    }),
    { plus: 0, minus: 0 }
  );
}

//* method 4

function sumPlusMinus(arr) {
  return arr.reduce(
    (acc, num) => {
      if (num > 0) {
        acc.plus += num;
      } else if (num < 0) {
        acc.minus += num;
      }
      return acc;
    },
    { plus: 0, minus: 0 }
  );
}

//* method 5  for each

function sumPlusMinus(arr) {
  let sums = { plus: 0, minus: 0 };

  arr.forEach((num) => {
    if (num > 0) {
      sums.plus += num;
    } else if (num < 0) {
      sums.minus += num;
    }
  });

  return sums;
}

console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}

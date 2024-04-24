/* CHALLENGE 15 - Iterate over String

Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/

"use strict";

var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = "Today is best day of my life";

// Write code here
//* method 1 for-of loop
for (const char of str) {
  if (vowels.includes(str[i])) {
    vowelsCount++;
  }
}
//* method 2  for loop

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    vowelsCount++;
  }
}
console.log(vowelsCount);
// 8

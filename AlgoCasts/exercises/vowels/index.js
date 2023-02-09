// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  var vowelSet = str.match(/[aeiou]/gi);
  return vowelSet ? vowelSet.length : 0;
}

module.exports = vowels;

// My Original Solution
// var result = 0;
//   var set = ["a", "e", "i", "o", "u"];

//   for (const key of str.toLowerCase()) {
//     if (set.includes(key)) {
//       result++;
//     }
//   }
//   return result;

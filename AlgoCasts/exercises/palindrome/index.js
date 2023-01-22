// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str == str.split("").reduce((acc, val) => val + acc, "");
}

module.exports = palindrome;

// Solution 1 Easy
//return str.split("").every((item, i) => item == str[str.length - i - 1]);

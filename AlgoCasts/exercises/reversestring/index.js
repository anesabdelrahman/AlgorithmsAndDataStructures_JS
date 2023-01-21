// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((acc, val) => val + acc, "");
}

module.exports = reverse;

// Easy solution 1
// One possible easy solution
// function reverse(str) {
//     return str.split("").reverse().join("");
//   }

// Medium solution 2
// let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;

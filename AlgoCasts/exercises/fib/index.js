// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Using recursive approach - however this is an exponential runtime O(n^2)
// function memoize(fn) {
//   const cache = {};

//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }
//     const result = fn.apply(this, args);
//     cache[args] = result;
//     return result;
//   };
// }

// function slowFib(n) {
//   return n < 2 ? n : fib(n - 1) + fib(n - 2);
// }

//fib = memoize(slowFib);

function fib(n) {
  var result = [];

  for (var i = 0; i <= n; i++) {
    if (i < 2) {
      result.push(i);
      continue;
    }

    result.push(result[i - 1] + result[i - 2]);
  }

  return result[n];
}

module.exports = fib;

// Using iterative approach
// function fib(n) {
//     var result = [];

//     for (var i = 0; i <= n; i++) {
//       if (i <= 1) {
//         result.push(i);
//         continue;
//       }
//       result.push(result[i - 1] + result[i - 2]);
//     }

//     return result[n];
//   }

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function chunk(array, size) {
  var chunked = [];
  var index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;

// Third Solution
// var chunked = [];
//   var upperIndex = size;

//   for (let i = 0; i < array.length; i += size) {
//     var current = array.slice(i, upperIndex);
//     chunked.push(current);
//     upperIndex += size;
//   }
//   return chunked;

// Second Solution
// const chunked = [];

//   for (let item of array) {
//     var last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([item]);
//     } else {
//       last.push(item);
//     }
//   }
//   return chunked;

// My Original Solution
// var result = [];
// var index = 0;
// var innerCollection = [];

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];

//   if (++index <= size) {
//     innerCollection.push(element);
//   }

//   if (index == size && i < array.length) {
//     index = 0;
//     result.push(innerCollection);
//     innerCollection = [];
//     continue;
//   }

//   if (i == array.length - 1) {
//     result.push(innerCollection);
//   }
// }
// return result;

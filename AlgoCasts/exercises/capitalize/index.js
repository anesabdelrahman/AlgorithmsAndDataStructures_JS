// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var collection = str.split(" ");
  collection.forEach(function (element, index) {
    collection[index] = element[0].toUpperCase() + element.slice(1);
  }, collection);

  return collection.join(" ");
}

module.exports = capitalize;

// First Solution
// var result = "";
//   var stringCollection = str.split(" ");
//   for (let item of stringCollection) {
//     item = item[0].toUpperCase() + item.slice(1);
//     result += item + " ";
//   }

//   return result.trimEnd();

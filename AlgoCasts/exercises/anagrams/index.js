// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let compareStringA = stringA
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let compareStringB = stringB
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  return compareStringA === compareStringB;
}

module.exports = anagrams;

// Second verbose solution
// const firstCharMap = BuildCharacterMap(stringA);
//   const secondCharMap = BuildCharacterMap(stringB);

//   if (Object.keys(firstCharMap).length !== Object.keys(secondCharMap).length) {
//     return false;
//   }

//   for (let char in firstCharMap) {
//     if (firstCharMap[char] !== secondCharMap[char]) {
//       return false;
//     }
//     return true;
//   }
// }

// function BuildCharacterMap(input) {
//   let charMap = {};

//   for (let char of input.replace("/[^w]g", "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

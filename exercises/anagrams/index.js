// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const aCharMap = charMapBuilder(stringA)
//   const bCharMap = charMapBuilder(stringB)
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false
//   }
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }
//   return true
// }

// function charMapBuilder(str) {
//   const charMap = {}
//   for (let char of str.replace(/^[\w]$/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//   return charMap
// }

function anagrams(stringA, stringB) {
return stringCleaner(stringA) === stringCleaner(stringB)
}

function stringCleaner(str) {
  return str.replace(/[^\w]/g).split('').sort().join('')
}


module.exports = anagrams;

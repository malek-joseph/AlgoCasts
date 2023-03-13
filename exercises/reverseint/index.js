// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

  const reversed=  n.toString().split('').reverse().join('')
  // Math.sign, takes a number as an argument, and returns 1 if it was positive and -1 if it was negative.
    return parseInt(reversed) * Math.sign(n)

}
// function reverseInt(n) {

//   const reversed=  n.toString().split('').reverse().join('')
//   if(n<0){
//     return parseInt(reversed) * -1

//   } else {
//     return parseInt(reversed)
//   }
// }

module.exports = reverseInt;

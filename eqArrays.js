const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrOne, arrTwo) {
  let match
  if (arrOne.length !== arrTwo.length) {
    return false
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] === arrTwo[i]) {
      match = true
    } else {
      match = false
      break
    }
  }
  return match
}

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
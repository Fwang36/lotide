//Assert Equal Arrays Function
const assertArraysEqual = function(arrOne, arrTwo) {
  let match;
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] === arrTwo[i]) {
      match = true;
    } else {
      match = false;
      break;
    }
  }
  if (match === true) {
    console.log(`Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};
//Assert Equal Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemstoRemove) {
  let result = []
  result.push(...source)
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < itemstoRemove.length; j++){
      if (result[i] === itemstoRemove[j]) {
        result.splice(result.indexOf(result[i]), 1)
      }
    }
  }
  console.log(result)
}

without(["1","2","3"] , [1,2,"3"])
without([1, 2, 3], [1]) // => [2, 3]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
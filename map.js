const assertArraysEqual = function(arrOne, arrTwo) {
  let match;
  if (arrOne.length !== arrTwo.length) {
    match = false
  }
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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = []

  for (let item of array) {
    results.push(callback(item));
  }

  return results
}

const results1 = map(words, word => word[0]);



assertArraysEqual(results1, ['g','c', 't', 'm','t']);
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

const eqArrays = function(arrOne, arrTwo) {
  let match
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

const middle = function (arr) {
  const result = []
  let mid = 0
  if (arr.length <= 2) {
    return result
  }
  mid = Math.floor((arr.length - 1) / 2)
  result.push(arr[mid])
  if (arr.length % 2 === 0) {
    result.push(arr[mid + 1])
  }
  return result
}

assertArraysEqual(middle([1,"2",3]),[2])
const eqArrays = function(arrOne, arrTwo) {
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
eqArrays([1,2,3] , [1,2,3]);
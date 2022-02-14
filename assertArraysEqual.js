const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arrOne, arrTwo) {

  if (eqArrays(arrOne, arrTwo)) {
    console.log(`Assertion Passed ✅✅✅: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`Assertion Failed ❌❌❌: ${arrOne} !== ${arrTwo}`);
  }
};
assertArraysEqual([1,2,3,4],[1,2,3]);

module.exports = assertArraysEqual
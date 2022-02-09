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

const letterPositions = function(sentence) {
  const results = {};
  const split = sentence.split("")
  for (let i = 0; i < split.length; i++) {
    if (split[i] === " "){
      split.splice(i , 1)
    }
  }
  for (let j = 0; j < split.length; j++){

    if (results[split[j]]) {
      results[split[j]].push(j) 
    } else {
      results[split[j]] = [j]
    }
  }
  return results;
};

assertArraysEqual(letterPositions("lighthouse labs").e, [9])
const assertArraysEqual = function(arrOne, arrTwo) {
  let match;
  if (arrOne.length !== arrTwo.length) {
    return match = false
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


const takeUntil = function(array, callback) {
  // ...
  const map = array.map(callback)
  const result = []
  for (let i = 0; i < map.length; i++ ) {
    if (map[i] === false) {
      result.push(array[i])
    } else if  (map[i] === true) {
      break
    }
  } 
  return result
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0), [1,2,5,7,2])
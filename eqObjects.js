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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }
  for (key in object1) {

    if (Array.isArray(object1[key])) {
      if (Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false
        }  
      }
    } else if (object1[key] !== object2[key]) {
        return false
    }
  }
  return true
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2)); // => false
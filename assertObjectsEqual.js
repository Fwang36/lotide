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

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;

  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
}
const obj1 = {
  b: 2,
  a: 1
}
const obj2 = {
  b: 2,
  a: 1,
  c: 1
}
assertObjectsEqual(obj1, obj2)
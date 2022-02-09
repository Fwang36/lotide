const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters= function(str) {
  const result = {}
  const split = str.split("")
  for (let i = 0; i < split.length; i++) {
    if (split[i] === " ") {
      split.splice(i, 1)
    }
  }
  for (letter of split) {
    if (result[letter]) {
      result[letter] += 1
    } else {
      result[letter] = 1
    }
  }
  return result
} 

console.log(countLetters("aaaaaabbbbbcccc"))
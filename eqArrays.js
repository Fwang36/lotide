const eqArrays = function(arrOne, arrTwo) {
  let match
  if (arrOne.length !== arrTwo.length) {
    return match = false
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

module.exports = eqArrays
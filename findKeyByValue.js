const findKeyByValue = function(object, value) {
  let found = ""
  for (key in object) {
    if (object[key] === value) {
      found += key
    }
  }
  return found
}

module.exports = findKeyByValue
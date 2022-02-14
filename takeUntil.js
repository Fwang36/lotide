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

module.exports = takeUntil
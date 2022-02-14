const without = function(source, itemstoRemove) {
  let result = []
  result.push(...source)
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < itemstoRemove.length; j++){
      if (result[i] === itemstoRemove[j]) {
        result.splice(result.indexOf(result[i]), 1)
      }
    }
  }
  console.log(result)
}

module.exports = without
const middle = function (arr) {
  const result = []
  let mid = 0
  if (arr.length <= 2) {
    return result
  }
  mid = Math.floor((arr.length - 1) / 2)
  result.push(arr[mid])
  if (arr.length % 2 === 0) {
    result.push(arr[mid + 1])
  }
  return result
}


module.exports = middle
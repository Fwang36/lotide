const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array === []) {
    return undefined
  } else {
    let header = array[0]
    return header
  }
};

module.exports = head
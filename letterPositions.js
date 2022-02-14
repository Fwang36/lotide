const letterPositions = function(sentence) {
  const results = {};
  const split = sentence.split("")
  for (let i = 0; i < split.length; i++) {
    if (split[i] === " "){
      split.splice(i , 1)
    }
  }
  for (let j = 0; j < split.length; j++){

    if (results[split[j]]) {
      results[split[j]].push(j) 
    } else {
      results[split[j]] = [j]
    }
  }
  return results;
};

module.exports = letterPositions
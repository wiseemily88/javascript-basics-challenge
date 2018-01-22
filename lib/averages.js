var pry = require('pryjs');

function total(collection){
  return collection.reduce(add, 0)
  function add(a, b){
    return a + b;
  }
}

function mean(collection) {
  return total(collection) / collection.length
}

function median(collection) {
  var half = Math.floor(collection.length / 2)
  var sorted_array = collection.sort()
  if (collection.length % 2 === 0){
    halfway = collection.length / 2;
    return ((sorted_array[half] + sorted_array[half - 1])/ 2);
  }
else {

  return sorted_array[half]
}
}
module.exports = {
total,
mean,
median
}

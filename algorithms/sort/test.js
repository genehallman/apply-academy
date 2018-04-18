var sortFns = Object.assign({},
  require('./insertion.js'),
  require('./selection.js'),
  require('./bubble.js'),

  require('./merge.js'),
  require('./heap.js'),
  require('./quick.js'),
  { "arraySort": (arr) => arr.sort() }
);
//delete sortFns["mergeSortIterative"];

// var input = [];
// var input = [9];
// var input = [1,9];
// var input = [2,9,7,8,3,0,6,5,1,4];
//var input = [9,8,7,6,5,4,3,2,1];
var input = new Array(10000);

for (var i = 0; i< input.length; i++) {
  input[i] = input.length-i; //Math.random();
}
console.log(`finished building set of size ${input.length}`)
// Array.apply(null, {length: 500000}).map(Function.call, Math.random);

for (var sortFn in sortFns) {
  var tInput = input.slice(0);
  console.time(sortFn);
  var output = sortFns[sortFn](tInput);
  console.timeEnd(sortFn);
  // console.log(`  > ${output}\n`);
}

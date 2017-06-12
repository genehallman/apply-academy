var array = Array.apply(null, Array(1600)).map(i => (Math.random() > 0.5) ? 1 : null);
var root = Math.ceil(Math.sqrt(array.length));
var square = root*root;

console.log("P2");
console.log(root+" "+root);
console.log("2");

var line = [];

for (var i = 0; i < square; i ++) {  
  if (i >= array.length) {
    line.push("1");
  } else if (array[i]) {
    line.push("0");
  } else {
    line.push("2");
  }
  if (i % root == root - 1) {
    console.log(line.join(" "));
    line = [];
  }
}

exports = module.exports = print = function(node, isRoot) {
  isRoot = isRoot == null ? true : isRoot;
  var null_left = "null_" + node.key + "_left";
  var null_right = "null_" + node.key + "_right"
  
  if (isRoot) {
    console.log("digraph BST {");
  }
  
  console.log("  " + node.key + " -> " + (node.left ? node.left.key : null_left));
  console.log("  " + node.key + " -> " + (node.right ? node.right.key : null_right));

  if (node.left) {
    print(node.left, false);
  } else {
    console.log("  " + null_left + " [shape=point]");
  }
  if (node.right) {
    print(node.right, false);
  } else {
    console.log("  " + null_right + " [shape=point]");
  }
  if (isRoot) {
    console.log("}");
  }
};


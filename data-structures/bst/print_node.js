var fs = require('fs');

exports = module.exports = print = function(node, filename) {
  var write = function(str) { console.log(str); };

  if (filename != null) {
    if (fs.existsSync(filename)) {
      fs.truncateSync(filename);
    }
    write = function(str) {
      fs.appendFileSync(filename, str + '\n');
    };
  }

  write("digraph BST {");
  print_connections(node, write);
  write("}");
};

function print_connections(node, write) {
  var null_left = "null_" + node.key + "_left";
  var null_right = "null_" + node.key + "_right";

  write("  " + node.key + " -> " + (node.left ? node.left.key : null_left));
  write("  " + node.key + " -> " + (node.right ? node.right.key : null_right));

  if (node.left) {
    print_connections(node.left, write);
  } else {
    write("  " + null_left + " [shape=point]");
  }
  if (node.right) {
    print_connections(node.right, write);
  } else {
    write("  " + null_right + " [shape=point]");
  }

}
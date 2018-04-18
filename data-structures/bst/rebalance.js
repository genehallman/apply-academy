var count_nodes = require('./count_nodes.js');
var print = require('./print_node.js');

function tree_to_vine(node) {
  // Convert tree to a "vine", i.e., a sorted linked list,
  // using the right pointers to point to the next node in the list
  var temp, tail, rest, it = 0;
  
  print(node, `ext${it}.dot`);
  
  tail = node;
  rest = tail.right;
  

  while (rest != null) {
    if (rest.left == null) {
      tail = rest;
      rest = rest.right;
    } else {
      temp = rest.left;
      rest.left = temp.right;
      temp.right = rest;
      rest = temp;
      tail.right = temp;
      it++;
      print(node, `ext${it}.dot`);
    }
  }
}

function vine_to_tree(node, size) {
  var leaves = (size + 1) - Math.pow(2, Math.floor(Math.log2(size + 1)));
  var it = 0;

  compress(node, leaves, it);
  size = size - leaves;

  while (size > 1) {
    it++;
    compress(node, Math.floor(size / 2), it);
    size = Math.floor(size / 2);
  }
}

function compress(node, count, it) {
  scanner = node;
  for (var i = 0; i < count; i++) {
    child = scanner.right;
    scanner.right = child.right;
    scanner = scanner.right;
    child.right = scanner.left;
    scanner.left = child;
    print(node, `mid${it}${i+1}.dot`);
  }

}

function rebalance(node) {
  var size = count_nodes(node);
  var psuedo_root = {left:null, right:node, key:0};
  tree_to_vine(psuedo_root);
  vine_to_tree(psuedo_root, size);
  return psuedo_root.right;
}

exports = module.exports = rebalance;
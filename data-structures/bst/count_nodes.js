exports = module.exports = function count_nodes(node) {
  if (node == null) {
    return 0;
  } else {
    return count_nodes(node.left) + count_nodes(node.right) + 1;
  }
}
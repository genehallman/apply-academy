function depthFirstInOrder(node, callback) {
  if (!node) {
    return;
  }
  depthFirstInOrder(node.left, callback);
  callback(node.key, node.value);
  depthFirstInOrder(node.right, callback);
}

function depthFirstPreOrder(node, callback) {
  if (!node) {
    return;
  }
  callback(node.key, node.value);
  depthFirstPreOrder(node.left, callback);
  depthFirstPreOrder(node.right, callback);
}

function depthFirstPostOrder(node, callback) {
  if (!node) {
    return;
  }
  depthFirstPreOrder(node.left, callback);
  depthFirstPreOrder(node.right, callback);
  callback(node.key, node.value);
}

function breadthFirst(node, callback) {
  var work = [node];

  while (work.length > 0) {
    var currNode = work.unshift();
    callback(currNode.key, currNode.value);
    if (currNode.left) { work.push(currNode.left); }
    if (currNode.right) { work.push(currNode.right); }
  }
}
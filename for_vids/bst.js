function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;

  this.insert = function(key) {
    if (key < this.key) {
      if (this.left) {
        this.left.insert(key);
      } else {
        this.left = new Node(key);
      }
    } else if (key > this.key) {
      if (this.right) {
        this.right.insert(key);
      } else {
        this.right = new Node(key);
      }
    }
  };

  this.lookup = function(key) {
    if (key == this.key) {
      return this;
    } else if (key < this.key && this.left) {
      return this.left.lookup(key);
    } else if (key > this.key && this.right) {
      return this.right.lookup(key);
    }
    return null;
  };

  this.delete = function(key) {
    if (key == this.key) {
      if (this.left && this.right) {
        // find in order successor
        var successor = this.right;

        while (successor.left) {
          successor = successor.left;
        }
        var newKey = successor.key;

        // if it has a right child, swap
        if (successor.right) {
          successor.key = successor.right.key;
          successor.left = successor.right.left;
          successor.right = successor.right.right;
        }

        // swap this.key with successor's key
        this.key = newKey;

      } else if (this.left) {
        this.key = this.left.key;
        this.right = this.left.right;
        this.left = this.left.left;
      } else if (this.right) {
        this.key = this.right.key;
        this.left = this.right.left;
        this.right = this.right.right;
      } else {
        this.key == null;
      }

    } else if (key < this.key && this.left) {
      this.left.delete(key);
    } else if (key > this.key && this.right) {
      this.right.delete(key);
    }

    if (this.left && this.left.key == null) {
      this.left = null;
    }
    if (this.right && this.right.key == null) {
      this.right = null;
    }
  };
}

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
  depthFirstInOrder(node.left, callback);
  depthFirstInOrder(node.right, callback);
}

function depthFirstPostOrder(node, callback) {
  if (!node) {
    return;
  }
  depthFirstInOrder(node.left, callback);
  depthFirstInOrder(node.right, callback);
  callback(node.key, node.value);
}

function breadthFirst(node, callback) {
  var work = [node];

  while (work.length > 0) {
    var currNode = work.unshift();
    callback(currNode.key, currNode.value);
    if (currNode.left) {
      work.push(currNode.left);
    }
    if (currNode.right) {
      work.push(currNode.right);
    }
  }
}
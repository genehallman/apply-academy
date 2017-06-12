var print = require('./print_node.js');

const input = [5,3,7,4,2,1,6,8,9];

function Node(key) {
  this.deleted = false;
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
    if (key == this.key && !this.deleted) {
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
      this.deleted = true;
    } else if (key < this.key && this.left) {
      this.left.delete(key);
    } else if (key > this.key && this.right) {
      this.right.delete(key);
    }
  };
}


var rootNode = null;

for (var i = 0; i < input.length; i++) {
  if (i === 0) {
    rootNode = new Node(input[i]);
  } else {
    rootNode.insert(input[i]);
  }
}

print(rootNode);
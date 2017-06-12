var fs = require('fs');

function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.root = null;
  this.last = null;

  this.print = function(filename) {
    var current = this.root;
    var log = function(str) { console.log(str); };
    if (filename) {
      var file = fs.openSync(filename, 'w');
      log = function(str) { fs.write(file, str); }
    }

    log("digraph BST {");
    while (current && current.next) {
      log("  " + current.value + " -> " + current.next.value);
      current = current.next;
    }
    if (current) {
      log("  " + current.value + " -> null");
    }
    log("  null [shape=point]");
    log("}");

  };

  this.addStart = function(value) {
    var node = new Node(value);
    node.next = this.root;
    this.root = node;
    if (!this.last) {
      this.last = node;
    }
  };

  this.addEnd = function(value) {
    var node = new Node(value);
    if (!this.root) {
      this.root = node;
      this.last = node;
      return;
    }
    this.last.next = node;
    this.last = node;
  };

  this.addAt = function(value, index) {
    var node = new Node(value);
    var prev = null;
    var current = this.root;

    while (current) {
      if (index == 0) {
        node.next = current;
        if (prev) {
          prev.next = node.next;
        } else {
          this.root = node.next;
        }
        return true;
      }
      prev = current;
      current = current.next;
      index--;
    }

    return false;
  }

  this.deleteStart = function(value) {
    this.root = this.root ? this.root.next : this.root;
  };

  this.deleteEnd = function(value) {
    var prev = null;
    var current = this.root;

    while (current) {
      prev = current;
      current = current.next;
    }
    
    if (prev) {
      prev.next = null;
    } else {
      this.root = null;
    }
  };

  this.deleteAt = function(index) {
    var prev = null;
    var current = this.root;

    while (current) {
      if (index == 0) {
        if (prev) {
          prev.next = current.next;
        } else {
          this.root = current.next;
        }
        return true;
      }
      prev = current;
      current = current.next;
      index--;
    }

    return false;
  };

  this.get = function(index) {
    var current = this.root;
    
    while (current) {
      if (index == 0) {
        return current.value;
      }
      current = current.next;
      index--;
    }
    return null;
  };

  this.indexOf = function(value) {
    var current = this.root;
    var index = 0;
    
    while (current) {
      if (current.value == value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  };

}

var input = [1];
var ll = new LinkedList();
input.forEach(i => ll.addStart(i));
ll.print();


var fs = require('fs');

function Node(value) {
  this.value = value;
  this.next = null;
}

function Stack() {
  this.root = null;

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

  this.push = function(value) {
    var node = new Node(value);
    node.next = this.root;
    this.root = node;
  };

  this.pop = function(value) {
    this.root = this.root ? this.root.next : this.root;
  };

}

var input = [1];
var ll = new Stack();
input.forEach(i => ll.push(i));
ll.print();


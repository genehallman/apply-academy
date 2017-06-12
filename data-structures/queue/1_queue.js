var fs = require('fs');

function Node(value) {
  this.value = value;
  this.next = null;
}

function Queue() {
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


  this.enqueue = function(value) {
    var node = new Node(value);
    if (!this.root) {
      this.root = node;
      this.last = node;
      return;
    }
    this.last.next = node;
    this.last = node;
  };


  this.dequeue = function(value) {
    if (this.root) {
      var res = this.root;
      this.root = this.root.next;
      return res.value;
    }
    return null;
  };


}

var input = [1];
var ll = new Queue();
input.forEach(i => ll.enqueue(i));
ll.print();


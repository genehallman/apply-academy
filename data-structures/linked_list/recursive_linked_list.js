var print = require('./print_ll.js');

function Node(value) {
  this.value = value;
  this.next = null;

  this.add = function(value) {
    if (this.next) {
      this.next.add(value);
    } else {
      this.next = new Node(value);
    }
  };

  this.insert = function(value, index) {
    if (index == 0) {
      var oldNext = this.next;
      this.next = new Node(this.value);
      this.next.next = oldNext;
      this.next = value;
    } else {
      this.next.insert(value, index - 1);
    }
  };

  this.get = function(index) {
    if (index == 0) {
      return this.value;
    } else {
      this.next.get(index - 1);
    }
  };

  this.indexOf = function(value) {
    if (value == this.value) {
      return 0;
    } else if (this.next) {
      var result = this.next.indexOf(value);
      return result == null ? null : result + 1;
    } else {
      return null;
    }
  };

  this.delete = function(index) {
    if (index == 1 && this.next) {
      this.next = this.next.next;
    } else if (index == 0) {
      this.value = this.next ? this.next.value : null; 
      this.next = this.next ? this.next.next : null;
    } else {
      this.next.delete(value);
    }
  };
}

var input = [5,3,7,6,9,1,4,2,8];
var rootNode = null;

for (var i = 0; i < input.length; i++) {
  if (i === 0) {
    rootNode = new Node(input[i]);
  } else {
    rootNode.add(input[i]);
  }
}

print(rootNode);


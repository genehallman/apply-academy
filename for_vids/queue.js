function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

function Queue() {
  this.root = null;
  this.tail = null;

  this.enqueue = function(value) {
    var node = new Node(value);
    if (this.tail == null) {
      this.tail = node;
    }
    node.next = this.root;
    this.root = node;
  };

  this.dequeue = function(value) {
    var res = this.tail;
    if (this.tail) {
      if (this.tail.prev) {
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        this.root = null;
        this.tail = null;
      }
    }
    return res;
  };

}
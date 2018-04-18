function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

function Stack() {
  this.root = null;
  this.tail = null;

  this.push = function(value) {
    var node = new Node(value);
    if (this.tail == null) {
      this.tail = node;
    }
    node.next = this.root;
    this.root = node;
  };

  this.pop = function(value) {
    var res = this.root;
    this.root = this.root ? this.root.next : this.root;
    return res;
  };

}
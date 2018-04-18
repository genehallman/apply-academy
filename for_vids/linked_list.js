function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

function LinkedList() {
  this.root = null;
  this.tail = null;

  this.addStart = function(value) {
    var node = new Node(value);
    if (this.tail == null) {
      this.tail = node;
    }
    node.next = this.root;
    this.root = node;
  };

  this.addEnd = function(value) {
    var node = new Node(value);

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.root = node;
      this.tail = node;
    }
  };

  this.addAt = function(value, index) {
    var node = new Node(value);
    var prev = null;
    var current = this.root;

    while (current) {
      if (index == 0) {
        node.next = current;
        if (prev) {
          prev.next = node;
        } else {
          this.root = node;
        }
        if (current == null) {
          this.tail = node;
        }
        return true;
      }
      prev = current;
      current = current.next;
      index--;
    }

    return false;
  };

  this.deleteStart = function(value) {
    this.root = this.root ? this.root.next : this.root;
  };

  this.deleteEnd = function(value) {
    if (this.tail) {
      if (this.tail.prev) {
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        this.root = null;
        this.tail = null;
      }
    }
  };

  this.deleteAt = function(value) {
    var prev = null;
    var current = this.root;

    while (current) {
      if (index == 0) {
        if (prev) {
          prev.next = current.next;
        } else {
          this.root = current.next;
        }
        if (!current) {
          this.tail = prev;
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

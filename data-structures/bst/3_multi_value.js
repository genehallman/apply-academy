function Node(key, value) {
  this.deleted = false;
  this.key = key;
  this.values = value ? [value] || [];
  this.left = null;
  this.right = null;

  this.insert = function(key, value) {
    if (key < this.key) {
      if (this.left) {
        this.left.insert(key, value);
      } else {
        this.left = new Node(key, value);
      }
    } else if (key > this.key) {
      if (this.right) {
        this.right.insert(key, value);
      } else {
        this.right = new Node(key, value);
      }
    } else if (key == this.key) {
      this.deleted = false;
      this.values.push(value); 
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
  
  this.delete = function(key, value) {
    if (key == this.key) {
      if (value) {
        var idx = this.values.indexOf(value);
        if (idx >= 0) {
          this.values.splice(idx, 1);
        }
        if (this.values.length == 0) {
          this.deleted = true;
        }
      } else {
        this.deleted = true;
      }
    } else if (key < this.key && this.left) {
      this.left.delete(key, value);
    } else if (key > this.key && this.right) {
      this.right.delete(key, value);
    }
  };
}

function Node(key, value) {
  this.deleted = false;
	this.key = key;
	this.value = value || null;
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

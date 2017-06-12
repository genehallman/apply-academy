var print = require('./print_node.js');

const input = [1,2,3,4,5,6,7,8,9];

function Node(key, value) {
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
		if (key == this.key) {
			return this;
		} else if (key < this.key && this.left) {
			return this.left.lookup(key);
		} else if (key > this.key && this.right) {
			return this.right.lookup(key);
		}
		return null;
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
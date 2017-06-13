function Node(value) {
  this.value = value;
  this.children = {};
}

function Trie() {
  this.root = new Node();

  this.add = function(value) {
    var node = this.root;

    for (var i in value) {
      if (!(value[i] in node.children)) {
        node.children[value[i]] = new Node();
      }
      node = node.children[value[i]];
    }
    node.value = value;
  }

  this.find = function(value) {
    for (var i in value) {
      if (value[i] in node.children) {
        node = node.children[value[i]];
      } else {
        return false;
      }
    }
    return node.value == value;
  };

  this.print = function() {
    var children = [{prefix: "", node: this.root}];

    console.log("digraph Trie {")
    while (children.length > 0) {
      var child = children.shift();
      var node = child.node;
      var prefix = child.prefix;
      var keys = Object.keys(node.children);
      for (var i in keys) {
        var key = keys[i];
        children.push({prefix: prefix + key, node: node.children[key]});
        console.log("  " + (prefix.length == 0 ? "_" : prefix) + " -> " + prefix + key + " [label=\"" + key + "\"]")
      }
    }
    console.log("}")
  }
}


var trie = new Trie();
["tee", "ten", "cod", "car", "cat", "see", "set", "sly"].forEach(i => trie.add(i));
trie.print();
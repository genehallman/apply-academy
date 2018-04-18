function Node(value) {
  this.value = value;
  this.children = {};
}

function Trie() {
  this.root = new Node();

  this.insert = function(value) {
    var node = this.root;

    for (var i in value) {
      if (!(value[i] in node.children)) {
        node.children[value[i]] = new Node();
      }
      node = node.children[value[i]];
    }

    node.value = value;
  };

  this.lookup = function(value) {
    var node = this.root;

    for (var i in value) {
      if (value[i] in node.children) {
        node = node.children[value[i]];
      } else {
        return false;
      }
    }

    return node.value == value;
  };

  this.delete = function(value) {
    var nodes = [];
    var node = this.root;

    for (var i in value) {
      if (value[i] in node.children) {
        node = node.children[value[i]];
        nodes.push({node, v:value[i]});
      } else {
        return false;
      }
    }

    node.value = null;

    while (nodes.length > 0) {
      var next = nodes.pop();
      var val = next.v;
      node = next.node;
      var parent = nodes[nodes.length - 1].node;

      if (Object.keys(node.children).length == 0 && node.value == null) {
        delete parent.children[v];
      } else {
        return true;
      }
    }
  };
}
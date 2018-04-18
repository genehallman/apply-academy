function Vertex(value) {
  this.value = value;
}

function ALGraph() {
  this.vertexes = new Map();

  this.addVertex = function(vertex) {
    this.vertexes.set(vertex, []);
  };

  this.removeVertex = function(vertex) {
    for (var v of this.vertexes.keys()) {
      var adj = this.vertexes.get(v);
      var i = adj.indexOf(vertex);
      if (i >= 0) {
        adj.splice(i, 1);
      }
    }
    this.vertexes.delete(vertex);
  };

  this.addEdge = function(v1, v2) {
    this.vertexes.get(v1).push(v2);
  };

  this.removeEdge = function(v1, v2) {
    var adj = this.vertexes.get(v1);
    var i = adj.indexOf(v2);
    if (i >= 0) {
      adj.splice(i, 1);
    }
  };

  this.is_adjacent = function(v1, v2) {
    var adj = this.vertexes.get(v1);
    var i = adj.indexOf(v2);
    return i >= 0;
  };
}
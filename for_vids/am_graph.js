function Vertex(value) {
  this.value = value;
}

function AMGraph() {
  this.vertexes = [];
  this.adjacents = [];

  this.getVertexIdx = function(vertex) {
    return this.vertexes.indexOf(vertex);
  }

  this.addVertex = function(vertex) {
    this.vertexes.push(vertex);
    for (var i in this.adjacents) {
      this.adjacents[i].push(false);
    }
    this.adjacents.push(new Array(this.vertexes.length).fill(false));
  };

  this.removeVertex = function(idx) {
    this.vertexes.splice(idx, 1);
    for (var i in this.adjacents) {
      this.adjacents[i].splice(idx, 1);
    }
    this.adjacents.splice(idx, 1);
  };

  this.addEdge = function(idx1, idx2) {
    this.adjacents[idx1][idx2] = true;
  };

  this.removeEdge = function(idx1, idx2) {
    this.adjacents[idx1][idx2] = false;
  };

  this.is_adjacent = function(idx1, idx2) {
    return this.adjacents[idx1][idx2];
  };
}
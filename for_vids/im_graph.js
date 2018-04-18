function Vertex(value) {
  this.value = value;
}

function Edge(value) {
  this.value = value;
}

function IMGraph() {
  this.vertexes = [];
  this.edges = [];
  this.adjacents = [];

  this.getVertexIdx = function(vertex) {
    return this.vertexes.indexOf(vertex);
  };

  this.addVertex = function(vertex) {
    this.vertexes.push(vertex);
    this.adjacents.push(new Array(this.edges.length).fill(false));
  };

  this.removeVertex = function(idx) {
    this.vertexes.splice(idx, 1);
    var adj = this.adjacents.splice(idx, 1)[0];

    for (var i = adj.length - 1; i >= 0; i--) {
      if (adj[i]) {
        for (var j in this.adjacents) {
          this.adjacents[j].splice(i, 1);
        }
        this.edges.splice(i, 1);
      }
    }
  };

  this.addEdge = function(idx1, idx2, value) {
    this.edges.push(new Edge(value));
    for (var i in this.adjacents) {
      this.adjacents[i].push(i == idx1 || i == idx2);
    }
  };

  this.removeEdge = function(idx1, idx2) {
    for (var j in this.adjacents[idx1]) {
      if (this.adjacents[idx1][j] && this.adjacents[idx2][j]) {
        for (var i in this.adjacents) {
          this.adjacents[i].splice(j, 1);
        }
        this.edges.splice(j, 1);
      }
    }
  };

  this.is_adjacent = function(idx1, idx2) {
    for (var j in this.adjacents[idx1]) {
      if (this.adjacents[idx1][j] && this.adjacents[idx2][j]) {
        return true;
      }
    }
    return false;
  };
}
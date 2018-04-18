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
  }

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

  this.is_adjacent = function(v1, v2) {
    for (var j in this.adjacents[idx1]) {
      if (this.adjacents[idx1][j] && this.adjacents[idx2][j]) {
        return true;
      }
    }
    return false;
  };

  this.print = function() {
    console.log("digraph IMG {");
    for (var i in this.edges) {
      var verts = [];
      for (var j in this.vertexes) {
        if (this.adjacents[j][i]) {
          verts.push(this.vertexes[j].value);
        }
      }
      console.log(`  v${verts[0]} -> v${verts[1]} [label="e${this.edges[i].value}"]`);
      // console.log(`  v${verts[1]} -> v${verts[0]} [label="e${this.edges[i].value}"]`);
    }
    console.log("}");
  }
};


var g = new IMGraph();
var v0 = new Vertex(0);
var v1 = new Vertex(1);
var v2 = new Vertex(2);
var v3 = new Vertex(3);
g.addVertex(v0);
g.addVertex(v1);
g.addVertex(v2);
g.addVertex(v3);
g.addEdge(1, 2, 1);
g.addEdge(2, 3, 2);
g.addEdge(3, 0, 3);
// g.addEdge(0, 1, 4);
g.addEdge(2, 0, 5);
g.addEdge(1, 0, 6);
// g.removeEdge(0, 1);
g.removeVertex(0);

g.print();

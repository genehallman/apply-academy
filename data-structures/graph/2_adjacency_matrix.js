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

  this.print = function() {
    console.log("digraph AMG {");
    for (var i = 0; i < this.vertexes.length; i++) {
      for (var j = 0; j < this.vertexes.length; j++) {
        if (this.adjacents[i][j]) {
          console.log(`  v${this.vertexes[i].value} -> v${this.vertexes[j].value}`);
        }
      }
    }
    console.log("}");
  }
};


var g = new AMGraph();
var v0 = new Vertex(0);
var v1 = new Vertex(1);
var v2 = new Vertex(2);
var v3 = new Vertex(3);
g.addVertex(v0);
g.addVertex(v1);
g.addVertex(v2);
g.addVertex(v3);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(3, 0);
g.addEdge(0, 1);
g.addEdge(2, 0);
g.addEdge(1, 0);
g.removeEdge(0, 1);
g.removeVertex(0);

g.print();







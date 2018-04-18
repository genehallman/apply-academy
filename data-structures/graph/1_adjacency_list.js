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

  this.print = function() {
    console.log("digraph ALG {");
    for (var v1 of this.vertexes.keys()) {
      var adj = this.vertexes.get(v1);
      for (var j in adj) {
        var v2 = adj[j];
        console.log(`  v${v1.value} -> v${v2.value}`);
      }
    }
    console.log("}");
  }
}

var g = new ALGraph();
var v1 = new Vertex(1);
var v2 = new Vertex(2);
var v3 = new Vertex(3);
var v4 = new Vertex(4);
g.addVertex(v1);
g.addVertex(v2);
g.addVertex(v3);
g.addVertex(v4);
g.addEdge(v1, v2);
g.addEdge(v2, v3);
g.addEdge(v3, v4);
g.addEdge(v4, v1);
g.addEdge(v2, v4);
g.addEdge(v1, v4);
g.removeEdge(v4, v1);
g.removeVertex(v4);

g.print();






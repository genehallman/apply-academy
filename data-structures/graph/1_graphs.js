function Vertex(value) {
  this.value = value;
}

function Edge(value) {
  this.value = value;
}

var v1 = new Vertex(1);
var v2 = new Vertex(2);
var v3 = new Vertex(3);
var v4 = new Vertex(4);
var e1 = new Edge(1);
var e2 = new Edge(2);
var e3 = new Edge(3);
var e4 = new Edge(4);
var e5 = new Edge(5);


function ALGraph() {
  this.vertexes = [
    { vertex: v1, adjacents: [v2, v3] },
    { vertex: v2, adjacents: [v1, v3, v4] },
    { vertex: v3, adjacents: [v1, v2, v4] },
    { vertex: v4, adjacents: [v2, v3] },
  ];

  this.print = function() {
    console.log("digraph ALG {");
    for (var i in this.vertexes) {
      for (var j in this.vertexes[i].adjacents) {
        console.log(`  v${this.vertexes[i].vertex.value} -> v${this.vertexes[i].adjacents[j].value}`);
      }
    }
    console.log("}");
  }
}


function AMGraph() {
  this.vertexes = [v1, v2, v3, v4];
  this.edges = [e1, e2, e3, e4, e5];
  this.adjacents = [
    [null,   e4,   e2, null], // v1
    [  e4, null,   e5,   e3], // v2
    [  e2,   e5, null,   e1], // v3
    [null,   e3,   e1, null]  // v4
  ];

  this.print = function() {
    console.log("digraph AMG {");
    for (var i = 0; i < this.vertexes.length; i++) {
      for (var j = 0; j < this.vertexes.length; j++) {
        if (this.adjacents[i][j] !== null) {
          console.log(`  v${this.vertexes[i].value} -> v${this.vertexes[j].value} [label="e${this.adjacents[i][j].value}"]`);
        }
      }
    }
    console.log("}");
  }
};


function IMGraph() {
  this.vertexes = [v1, v2, v3, v4];
  this.edges = [e1, e2, e3, e4, e5];

  this.adjacents = [
    [0, 1, 0, 1, 0, 0], // v1
    [0, 0, 1, 1, 1, 0], // v2
    [1, 1, 0, 0, 1, 0], // v3
    [1, 0, 1, 0, 0, 0]  // v4
  ];

  this.print = function() {
    console.log("digraph IMG {");
    for (var i in this.edges) {
      var verts = [];
      for (var j in this.vertexes) {
        if (this.adjacents[j][i] === 1) {
          verts.push(this.vertexes[j].value);
        }
      }
      console.log(`  v${verts[0]} -> v${verts[1]} [label="e${this.edges[i].value}"]`);
      console.log(`  v${verts[1]} -> v${verts[0]} [label="e${this.edges[i].value}"]`);
    }
    console.log("}");
  }
};


// (new ALGraph()).print();
(new AMGraph()).print();
// (new IMGraph()).print();






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
var e6 = new Edge(6);


function ALGraph() {
  this.vertexes = [
    {
      vertex: v1,
      adjacents: [v2, v3]
    }
  ];
}

function AMGraph() {
  this.vertexes = [v1, v2, v3, v4];
  this.edges = [e1, e2, e3, e4, e5];
  this.adjacents = [
    [null,   e4,   e2, null],
    [  e4, null,   e5,   e3],
    [  e2,   e5, null,   e1],
    [null,   e3,   e1, null]
  ];
};


function IMGraph() {
  this.vertexes = [v1, v2, v3, v4];
  this.edges = [e1, e2, e3, e4, e5];

  this.adjacents = [
    [1, 0, 1, 0, 0, 1],
    [0, 1, 0, 1, 0, 1],
    [0, 0, 1, 1, 1, 0],
    [1, 1, 0, 0, 1, 0]
  ];
};

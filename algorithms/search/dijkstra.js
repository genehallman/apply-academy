function Vertex(value) {
  this.value = value;
}

var v1 = new Vertex(1);
var v2 = new Vertex(2);
var v3 = new Vertex(3);
var v4 = new Vertex(4);
var v5 = new Vertex(5);

function ALGraph() {
  this.vertexes = [
    { vertex: v1, adjacents: [{vertex: v2, weight: 4}, {vertex: v3, weight: 2}] },
    { vertex: v2, adjacents: [{vertex: v5, weight: 3}, {vertex: v3, weight: 3}, {vertex: v4, weight: 2}] },
    { vertex: v3, adjacents: [{vertex: v5, weight: 4}, {vertex: v2, weight: 1}, {vertex: v4, weight: 4}] },
    { vertex: v4, adjacents: [] },
    { vertex: v5, adjacents: [{vertex: v4, weight: 1}] }
  ];
}

function Dijkstra(graph, source) {
  var dists = graph.vertexes.map(e => e.vertex == source ? 0 : Number.MAX_SAFE_INTEGER)
  var unvisited = graph.vertexes.map((e, i) => i);
  var prev = [];

  while (unvisited.length > 0) {
    var idx = dists.indexOf(Math.min.apply(null, unvisited.map(i => dists[i])));
    unvisited.splice(unvisited.indexOf(idx))
    
    for (var i = 0; i < graph.vertexes[idx].adjacents.length; i++) {
      var delta = dists[idx] + graph.vertexes[idx].adjacents[i];
      if (delta < dists[i]) {
        dists[i] = delta;
        prev[i] = idx;
      }
    }
  }
  return {dists, prev}
}
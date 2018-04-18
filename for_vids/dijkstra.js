var MAX = Number.MAX_SAFE_INTEGER;

function Dijkstra(graph, source) {
  var dists = graph.vertexes.map(e => e.vertex == source ? 0 : MAX);
  var unvisited = graph.vertexes.map((e, i) => i);
  var prev = [];

  while (unvisited.length > 0) {
    var idx = dists.indexOf(Math.min.apply(null, unvisited.map(i => dists[i])));
    unvisited.splice(unvisited.indexOf(idx));

    for (var i = 0; i < graph.vertexes[idx].adjacents.length; i++) {
      var delta = dists[idx] + graph.vertexes[idx].adjacents[i];
      if (delta < dists[i]) {
        dists[i] = delta;
        prev[i] = idx;
      }
    }
  }
  return {dists, prev};
}
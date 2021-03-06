// function findAdjacent(street, vertices, edges){
//   let filteredEdges = [];
//   let filteredVertices = [];
//
//   for (var i = 0; i < edges.length; i++){
//     if (edges[i][0] == street || edges[i][1] == street) {
//       if (edges[i][0] == street){
//         filteredEdges.push(edges[i][1])
//       } else {
//         filteredEdges.push(edges[i][0])
//       }
//     }
//   }
//
//   for (var j = 0; j < vertices.length; j++){
//     if (filteredEdges.includes(vertices[j].name) && vertices[j].distance === null){
//       filteredVertices.push(vertices[j])
//     }
//   }
//   return filteredVertices;
// }
//
// function markDistanceAndPredecessor(root, branches){
//   return branches.map(branch => {
//     return branch.distance = root.distance + 1,
//     branch.predecessor = root
//   })
// }
//
// function bfs(rootNode, vertices, edges){
//   let root = rootNode;
//   let visited = [];
//   root.distance = 0;
//   let queue = [root];
//
//     while(queue.length > 0){
//       let current = queue.shift();
//       visited.push(current)
//       let adjacent = findAdjacent(current.name, vertices, edges);
//       markDistanceAndPredecessor(current, adjacent);
//       adjacent.forEach(vertex => {
//       queue.push(vertex)
//       })
//     }
//     return visited
// }

//version two

function findAdjacent(node, vertices, edges) {
  var edgesArr = [];
  for (var i = 0; i < edges.length; i++) {
    if (edges[i][0] === node) {
      edgesArr.push(edges[i][1])
    } else if (edges[i][1] === node) {
      edgesArr.push(edges[i][0])
    }
  }

  let filteredVertices = vertices.filter(vert => {
    return edgesArr.includes(vert.name) && vert.distance === null
  })

  return filteredVertices
}


function markDistanceAndPredecessor(rootNode, adjacentNodes) {
  rootNode.distance = 0;
  var markedNodes = [];
  adjacentNodes.forEach(node => {
    node.distance = rootNode.distance + 1;
    node.predecessor = rootNode
    markedNodes.push(node)
  })
  return markedNodes
}


function bfs(rootNode, vertices, edges) {
  var visited = [];
  var queue = [rootNode];
  rootNode.distance = 0;

  while (queue.length) {
    var currentNode = queue.shift();
    visited.push(currentNode);
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
    markDistanceAndPredecessor(currentNode, adjacentNodes);
    adjacentNodes.forEach(vert => {
      queue.push(vert)
    })
  }
  return visited;
}

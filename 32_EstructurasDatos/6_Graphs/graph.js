class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }

  /**
   * Agrega un nuevo nodo al grafo
   * @param {number} node nodo a agregar
   */
  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }

  /**
   * Conecta dos nodos
   * @param {number} firstNode nodo a conectar
   * @param {number} secondNode nodo a conectar
   */
  addEdge(firstNode, secondNode) {
    this.adjacentList[firstNode].push(secondNode);
    this.adjacentList[secondNode].push(firstNode);
  }

}

const myGraph = new Graph();
myGraph.addVertex(1)
myGraph.addVertex(3)
myGraph.addVertex(4)
myGraph.addVertex(5)
myGraph.addVertex(6)
myGraph.addVertex(8)


myGraph.addEdge(3, 5);
myGraph.addEdge(6, 3);
myGraph.addEdge(1, 6);
myGraph.addEdge(1, 3);
myGraph.addEdge(1, 4);
myGraph.addEdge(4, 5);
myGraph.addEdge(8, 4);
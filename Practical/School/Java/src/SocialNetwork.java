class Graph {
   private boolean[][] edges;
   private Object[] labels;

   public Graph(int n) {
      edges = new boolean[n][n];
      labels = new Object[n];
   }

   public void addEdge(int source, int target) {
      edges[source][target] = true;
   }

   public Object getLabel(int vertex) {
      return labels[vertex];
   }

   public boolean isEdge(int source, int target) {
      return edges[source][target];
   }

   public int[] neighbors(int vertex) {
      int i, count = 0;
      int[] answer;
      for (i = 0; i < labels.length; i++)
         if (edges[vertex][i])
            count++;
      answer = new int[count];
      count = 0;
      for (i = 0; i < labels.length; i++)
         if (edges[vertex][i])
            answer[count++] = i;
      return answer;
   }

   public void removeEdge(int source, int target) {
      edges[source][target] = false;
   }

   public void setLabel(int vertex, Object newLabel) {
      labels[vertex] = newLabel;
   }

   public int size() {
      return labels.length;
   }

   public static void depthFirstPrint(Graph g, int start) {
      boolean[] marked = new boolean[g.size()];
      depthFirstRecurse(g, start, marked);
   }

   public static void depthFirstRecurse(Graph g, int v, boolean[] marked) {
      int[] connections = g.neighbors(v);
      int i, nextNeighbor;
      marked[v] = true;
      System.out.println(g.getLabel(v));
      for (i = 0; i < connections.length; i++) {
         nextNeighbor = connections[i];
         if (!marked[nextNeighbor])
            depthFirstRecurse(g, nextNeighbor, marked);
      }
   }

   public static void outboundEdgesAll(Graph graph, Integer[] strArr) {
      for (int checkedPerson = 0; checkedPerson < graph.size(); checkedPerson++) {
         int[] checkedFriends = graph.neighbors(checkedPerson);
         System.out.println(strArr[checkedPerson] + " has " + checkedFriends.length + " outgoing edges.");

         for (int friend : checkedFriends) {
            System.out.println("  > " + strArr[friend]);
         }
      }
   }

   public static int outboundEdges(Graph graph, Integer[] strArr, int sourceVertex) {
      try {
         int connections = graph.neighbors(sourceVertex).length;
         return connections;
      } catch (Exception e) {
         System.err.println("Source Vertex " + sourceVertex + " does not exist.");
      }
      return -1;

   }

   public static boolean connectionFound(Graph graph, int index1, int index2) {
      return graph.isEdge(index1, index2) || graph.isEdge(index2, index1);

   }

   public static boolean hasLoops(Graph graph) {
      for (int i=0; i < graph.size(); i++) {
         if (graph.isEdge(i, i)) {
            return true;
         }
      }
      return false;
   }
}

public class SocialNetwork {
   public static void main(String[] args) {

      // vi
      // "Social Connections" class modified to use integers rather than strings
      // Below creates all connections listed.

      Integer[] friends = { 0, 1, 2, 3, 4, 5 };
      Graph myNet = new Graph(6);
      for (int i = 0; i < friends.length; i++)
         myNet.setLabel(i, friends[i]);
      myNet.addEdge(0, 1);
      myNet.addEdge(0, 2);
      myNet.addEdge(1, 2);
      myNet.addEdge(1, 3);
      myNet.addEdge(2, 3);
      myNet.addEdge(3, 4);
      myNet.addEdge(4, 0);
      myNet.addEdge(4, 1);
      myNet.addEdge(4, 5);

      // vii
      // There are no loops, as there are no edges connected to itself (eg. 2 => 2).
      // See x and below to see more info.

      // viii
      // Assumes index is the query
      // Single case.
      // Works with any sourceVertex; returns -1 if does not exist along with a error message.

      int sourceVertex = 1;
      int outgoingEdgesNum = Graph.outboundEdges(myNet, friends, sourceVertex); 
      System.out.println("There are " + outgoingEdgesNum + " outgoing edges for index " + sourceVertex + ".");
      
      System.out.println("\n\n");

      // ix
      // Same as the outboundEdges function, but iterates over all possible cases.
      // It also prints the outbound edges that are found.

      Graph.outboundEdgesAll(myNet, friends);

      // x
      // O(n) = n
      //
      // This would be O(n)^2 if we had to go through each sub-array; but
      //    with the hasNeighbor method, we only need to go over it a single
      //    time.

      System.out.println("\n\n");

      System.out.println("Graph has loop? " + Graph.hasLoops(myNet));
      myNet.addEdge(0,0);
      System.out.println("Graph has loop? " + Graph.hasLoops(myNet));
   
   }
}

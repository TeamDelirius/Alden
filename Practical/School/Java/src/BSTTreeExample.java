class BTNode<E> {
   private E data;
   private BTNode<E> left, right;   
   public BTNode(E initialData, BTNode<E> initialLeft, BTNode<E> initialRight)  {
      data = initialData;
      left = initialLeft;
      right = initialRight;
   } 
   public E getData( )  { return data;    }
   public BTNode<E> getLeft( )  { return left; } 
   public BTNode<E> getRight( )  { return right; } 
   public void setData(E newData) { data = newData; }
   public void setLeft(BTNode<E> newLeft) { left = newLeft; }
   public void setRight(BTNode<E> newRight) { right = newRight; }
}
class BSTree<E extends Comparable<E>> {
    private BTNode<E> root;
    public BSTree() {
        root = null;
    }
    public void add(E data) {
        root = addNode(root, data);
    }
    private BTNode<E> addNode(BTNode<E> node, E data) {
        if (node == null)
            return new BTNode<E>(data, null, null);
        if (data.compareTo(node.getData()) < 0) 
            node.setLeft(addNode(node.getLeft(), data));
        else if (data.compareTo(node.getData()) > 0)
            node.setRight(addNode(node.getRight(), data));
        return node;
    }
}
public class TreeExample {
    public static void main(String[] args) {
        BSTree<Integer> bst = new BSTree<Integer>();
        bst.add(50);
        bst.add(30);
        bst.add(70);
        bst.add(20);
        bst.add(40);
        bst.add(60);
        bst.add(80);
        bst.add(40);
    }
}

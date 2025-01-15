class BTNode<E> {
   private E data;
   private BTNode<E> left, right;

   public BTNode(E initialData) {
      data = initialData;
      left = null;
      right = null;
   }

   public BTNode(E initialData, BTNode<E> lBranch, BTNode<E> rBranch) {
      data = initialData;
      left = lBranch;
      right = rBranch;
   }

   public E getData() {
      return data;
   }

   public BTNode<E> getLeft() {
      return left;
   }

   public BTNode<E> getRight() {
      return right;
   }

   public void setData(E newData) {
      data = newData;
   }

   public void setLeft(BTNode<E> newLeft) {
      left = newLeft;
   }

   public void setRight(BTNode<E> newRight) {
      right = newRight;
   }

   public void print(int depth) {
      int i;
      for (i = 1; i <= depth; i++)
         System.out.print("    ");
      System.out.println(data);
      if (left != null)
         left.print(depth + 1);
      else if (right != null) {
         for (i = 1; i <= depth + 1; i++)
            System.out.print("    ");
         System.out.println("--");
      }
      if (right != null)
         right.print(depth + 1);
      else if (left != null) {
         for (i = 1; i <= depth + 1; i++)
            System.out.print("    ");
         System.out.println("--");
      }
   }

   @Override
   public String toString() {
       return data.toString();
   }

   public static <E> BTNode<E> getLeftmostNode(BTNode<E> node) {
      if (node.getLeft() == null) {
         return node;
      }
      else {
         return null;
      }
   }
   public static <E> long treeSize(BTNode<E> root) {
      if (root == null)
         return 0;
      else
         return 1 + treeSize(root.left) + treeSize(root.right);
   }
}

public class TreeExample {
   public static void main(String[] args) {
      BTNode<Integer> tree = 
      new BTNode<Integer>(1,
         new BTNode<Integer>(7,
            new BTNode<Integer>(2),
            new BTNode<Integer>(6, 
               new BTNode<Integer>(5),
               new BTNode<Integer>(11)
            )
         ),
         new BTNode<Integer>(9,
            null,
            new BTNode<Integer>(9,
               new BTNode<Integer>(5),
               null
            )
         )
      );

      tree.print(0);
      /*
         1                  | 0
            7               | 1
               2            | 2
               6            | 3
                     5      | 4
                     11     | 5
            9               | 6
               --           | ...
               9            | 7
                     5      | 8
                     --     | ...
         9                  | 9
       */
      System.out.println(BTNode.treeSize(tree));
      System.out.println(BTNode.getLeftmostNode(tree));
   }
}

// The leftmost node with a value is at D=2
//
import java.util.EmptyStackException;

class Node<E> {
   private E data;
   private Node<E> link;

   public Node(E initialData, Node<E> initialLink) {
      data = initialData;
      link = initialLink;
   }

   public void setData(E newData) {
      data = newData;
   }

   public E getData() {
      return data;
   }

   public Node<E> getLink() {
      return link;
   }

   public void setLink(Node<E> newLink) {
      link = newLink;
   }
}

class LinkedStack<E> implements Cloneable {
   private Node<E> top;

   public LinkedStack() {
      top = null;
   }

   public boolean isEmpty() {
      return (top == null);
   }

   public E peek() {
      if (top == null) {
         throw new EmptyStackException();
      }
      return top.getData();
   }

   public E pop() {
      E answer;
      if (top == null) {
         throw new EmptyStackException();
      }
      answer = top.getData();
      top = top.getLink();
      return answer;
   }

   public void push(E item) {
      top = new Node<E>(item, top);
   }

   @SuppressWarnings("unchecked")
   static public LinkedStack flip(LinkedStack stack) {
      LinkedStack newStack = new LinkedStack();

      Node previous = null;
      Node head = stack.top;
      while (head != null) {
         Node<E> next = head.getLink();
         head = previous;
         previous = head;
         head = next;
      }
      return previous;
   }

   public void display() {
      Node<E> current = top;
      while (current != null) {
         System.out.print(current.getData() + " ");
         current = current.getLink();
      }
      System.out.println();
   }

}

class StackApp {
   public static void main(String[] args) {
      String s = "racecar";
      LinkedStack<Character> myStack = new LinkedStack<Character>();
      System.out.println(s);
      for (int i = 0; i < s.length(); i++) {
         myStack.push(s.charAt(i));
      }


      StringBuilder myWord = new StringBuilder();
      while (!myStack.isEmpty()) {
         myWord.append(myStack.pop());
      }
      System.out.println(myWord);
      System.out.println(s.equals(myWord.toString()));
   }
}
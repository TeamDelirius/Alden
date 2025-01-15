class IntNode {
    private int data;
    private IntNode link;

    public IntNode(int initialData, IntNode initialLink) {
        data = initialData;
        link = initialLink;
    }

    public void setData(int newData) { data = newData; }
    public int getData( ) { return data; }
    public IntNode getLink( ) { return link; }
    public void setLink(IntNode newLink) { link = newLink; }

    public static IntNode listSearch(IntNode head, int target) {
        IntNode cursor;
        for (cursor = head; cursor != null; cursor = cursor.link) {
            if (target == cursor.data) {
                return cursor;
            }
        }
        return null;
    }

    public static IntNode listPosition(IntNode head, int position) {
        IntNode cursor;
        int i;
        if (position <= 0) {
            throw new IllegalArgumentException("position is not positive");
        }
        cursor = head;
        for (i = 1; (i < position) && (cursor != null); i++) {
            cursor = cursor.link;
        }
        return cursor;
    }
}

class IntLinkedBag implements Cloneable{
    private IntNode head;
    private int manyNodes;

    public IntLinkedBag( ) {
        head = null;
        manyNodes = 0;
    }
    
    public void add(int element) {
        head = new IntNode(element, head);
        manyNodes++;
    }
    
    public int countOccurrences(int target) {
        int answer;
        IntNode cursor;
        answer = 0;
        cursor = IntNode.listSearch(head, target);
        while (cursor != null) {
            answer++;
            //move the cursor to the next occurrence of the target.
            cursor = cursor.getLink( );
            cursor = IntNode.listSearch(cursor, target);
        }
        return answer;
    } 
   
    public boolean remove(int target) {
        IntNode targetNode = IntNode.listSearch(head, target);
        if (targetNode == null) {
            return false;
        }
        
        else {
            targetNode.setData(head.getData( ));
            head = head.getLink( );
            manyNodes--;
            return true;
        }
    }

    public int size( ) {
        return manyNodes;
    }
}


public class LinkedIntExample {
    public static void main(String[] args) {
        IntLinkedBag myBag = new IntLinkedBag();
        System.out.println("Current size: " + myBag.size());
        myBag.add(100);
        myBag.add(150);
        myBag.add(100);
        System.out.println("There are "+ myBag.countOccurrences(100)+ " copies 100.");
        System.out.println("There are "+ myBag.countOccurrences(300)+ " copies of 300.");
        myBag.remove(100);
        System.out.println("Current size: " + myBag.size());
    }
}
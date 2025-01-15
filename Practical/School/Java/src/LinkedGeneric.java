import java.util.Random;

class Position3D implements Comparable<Position3D> {
    private double x;
    private double y;
    private double z;

    public Position3D(double x, double y, double z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public Position3D() {
        Random rand = new Random();

        this.x = rand.nextDouble() * 100;
        this.y = rand.nextDouble() * 100;
        this.z = rand.nextDouble() * 100;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getZ() {
        return z;
    }

    public void setZ(double z) {
        this.z = z;
    }

    public double distanceTo(Position3D other) {
        double dx = this.x - other.x;
        double dy = this.y - other.y;
        double dz = this.z - other.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    public boolean equals(Position3D other) {
        return this.x == other.getX() && this.y == other.getY() && this.z == other.getZ();
    }

    public Position3D clone() {
        return new Position3D(this.x, this.y, this.z);
    }

    public int compareTo(Position3D other) {
        Position3D origin = new Position3D(0, 0, 0);
        double d1 = this.distanceTo(origin);
        double d2 = other.distanceTo(origin);
        if (d1 < d2) {
            return -1;
        } else if (d1 > d2) {
            return 1;
        } else {
            return 0;
        }
    }

    @Override
    public String toString() {
        return String.format("(x=%.2f, y=%.2f, z=%.2f)", x, y, z);
    }
}

class ObjectNode <T> {
    private Object data;
    private ObjectNode<T> link;

    public ObjectNode(Object initialData, ObjectNode<T> initialLink) {
        data = initialData;
        link = initialLink;
    }

    public void setData(Object newData) {
        data = newData;
    }

    public Object getData() {
        return data;
    }

    public ObjectNode getLink() {
        return link;
    }

    public void setLink(ObjectNode newLink) {
        link = newLink;
    }

    public static ObjectNode listSearch(ObjectNode head, Object target) {
        ObjectNode cursor;
        for (cursor = head; cursor != null; cursor = cursor.link)
            if (target.equals(cursor.data))
                return cursor;
        return null;
    }

    public static ObjectNode listPosition(ObjectNode head, int position) {
        ObjectNode cursor;
        int i;
        if (position <= 0)
            throw new IllegalArgumentException("position is not positive");
        cursor = head;
        for (i = 1; (i < position) && (cursor != null); i++)
            cursor = cursor.link;
        return cursor;
    }

    @Override
    public String toString() {
        if (this.data != null) {
            return this.data.toString();
        }
        return "null";
    }
}

class LinkedBag<T> implements Cloneable {
    private ObjectNode<T> head;
    private int manyNodes;

    public LinkedBag() {
        head = null;
        manyNodes = 0;
    }

    public void add(Object element) {
        head = new ObjectNode<T>(element, head);
        manyNodes++;
    }

    public int countOccurrences(Object target) {
        int answer;
        ObjectNode<T> cursor;
        answer = 0;
        cursor = ObjectNode.listSearch(head, target);
        while (cursor != null) {
            answer++;
            cursor = cursor.getLink();
            cursor = ObjectNode.listSearch(cursor, target);
        }
        return answer;
    }

    public boolean remove(Object target) {
        ObjectNode<T> targetNode;
        targetNode = ObjectNode.listSearch(head, target);
        if (targetNode == null)
            return false;
        else {
            targetNode.setData(head.getData());
            head = head.getLink();
            manyNodes--;
            return true;
        }
    }

    @SuppressWarnings("unchecked")

    /*
     *  public static <T extends Comparable<T> & Cloneable> LinkedBag<T> union(LinkedBag<T> bag1, LinkedBag<T> bag2) {
        LinkedBag<T> result = new LinkedBag();

        ObjectNode<T> cursor = bag1.head;
     */

    public static LinkedBag union(LinkedBag bag1, LinkedBag bag2) {
        LinkedBag result = new LinkedBag();

        ObjectNode cursor = bag1.head;
        while (cursor != null) {
            result.add(cursor);
            cursor = cursor.getLink();
        }

        cursor = bag2.head;
        while (cursor != null) {
            result.add(cursor);
            cursor = cursor.getLink();
            
        }

        return result;
    }

    @SuppressWarnings("unchecked")
    public Object grab() {
        int i;
        ObjectNode<T> cursor;
        if (manyNodes == 0)
            throw new IllegalStateException("Bag size is zero");
        i = (int) (Math.random() * manyNodes) + 1;
        cursor = ObjectNode.listPosition(head, i);
        return cursor.getData();
    }

    @SuppressWarnings("unchecked")
    public ObjectNode<T> reverse() {
        ObjectNode<T> previous = null;
        ObjectNode<T> head = this.head;
        while (head != null) {
            ObjectNode<T> next = head.getLink();
            head = previous;
            previous = head;
            head = next;
        }
        return previous;
    }

    public int size() {
        return manyNodes;
    }

    @Override
    public String toString() {
        ObjectNode<T> cursor = this.head;
        String str = "[" + head.toString();
        while (cursor != null) {
            str = str + ", " + cursor.toString();
            cursor = cursor.getLink();
        }

        return str + "]";
    }
}


public class LinkedGeneric {
    public static void main(String[] args) {
        
        LinkedBag<Position3D> posBag = new LinkedBag<Position3D>();
        System.out.println("Current size: " + posBag.size());

        Position3D testSearch = new Position3D();
        Position3D testSearch2 = new Position3D();
        posBag.add(testSearch);
        posBag.add(new Position3D());
        posBag.add(new Position3D());
        posBag.add(new Position3D());
        posBag.add(new Position3D());
        posBag.add(testSearch);

        System.out.println("There are "+ posBag.countOccurrences(testSearch)+ " copies of " + testSearch);
        System.out.println("There are "+ posBag.countOccurrences(testSearch2)+ " copies of " + testSearch2);

        posBag.remove(testSearch);
        System.out.println("Current size: " + posBag.size());

        for (int i = 0; i < 3; i++) {
            posBag = LinkedBag.union(posBag, posBag);
            System.out.println("Current size: " + posBag.size());
        }

        posBag.reverse();
    }
}
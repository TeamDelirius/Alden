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
  
    public double getX() { return x; }
    public void setX(double x) {this.x = x; }
    public double getY() { return y; }
    public void setY(double y) { this.y = y; }
    public double getZ() { return z; }
    public void setZ(double z) { this.z = z; }
    
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
        Position3D origin = new Position3D(0,0,0);
        double d1 = this.distanceTo(origin);
        double d2 = other.distanceTo(origin);
        if (d1 < d2) {
            return -1;
        }
        else if (d1 > d2) {
            return 1;
        }
        else {
            return 0;
        }
    }
  
    @Override
    public String toString() {
        return String.format("(x=%.2f, y=%.2f, z=%.2f)", x, y, z);
    }
}

class Position3DNode {
    private Position3D data;
    private Position3DNode link;

    public Position3DNode(Position3D initialData, Position3DNode initialLink) {
        data = initialData;
        link = initialLink;
    }

    public void setData(Position3D newData) { data = newData; }
    public Position3D getData( ) { return data; }
    public Position3DNode getLink( ) { return link; }
    public void setLink(Position3DNode newLink) { link = newLink; }

    public static Position3DNode listSearch(Position3DNode head, Position3D target) {
        Position3DNode cursor;
        for (cursor = head; cursor != null; cursor = cursor.link) {
            if (target == cursor.data) {
                return cursor;
            }
        }
        return null;
    }

    public static Position3DNode listPosition(Position3DNode head, int position) {
        Position3DNode cursor;
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

class Position3DLinkedBag implements Cloneable{
    private Position3DNode head;
    private int manyNodes;

    public Position3DLinkedBag( ) {
        head = null;
        manyNodes = 0;
    }
    
    public void add(Position3D element) {
        head = new Position3DNode(element, head);
        manyNodes++;
    }
    
    public int countOccurrences(Position3D target) {
        int answer;
        Position3DNode cursor;
        answer = 0;
        cursor = Position3DNode.listSearch(head, target);
        while (cursor != null) {
            answer++;
            //move the cursor to the next occurrence of the target.
            cursor = cursor.getLink( );
            cursor = Position3DNode.listSearch(cursor, target);
        }
        return answer;
    } 
   
    public boolean remove(Position3D target) {
        Position3DNode targetNode = Position3DNode.listSearch(head, target);
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

    public Position3D grab() {
        Position3D[] positions = new Position3D[manyNodes];
        int c = 0;
        for (Position3DNode cursor = head; cursor != null; cursor = cursor.getLink()) {
            positions[c] = cursor.getData();
            c++;
        }
        Random rng = new Random();
        return positions[rng.nextInt(0, manyNodes-1)];
    }

    /* /// the correct way of implementing this
    public Position3D grab() {
        Random rng = new Random();
        return Position3DNode.listPosition(head, rng.nextInt(manyNodes - 1));
    }
    */

    public int size( ) {
        return manyNodes;
    }
}

public class LinkedPosition3D {
    public static void main(String[] args) {
        Position3DLinkedBag posBag = new Position3DLinkedBag();
        System.out.println("Current size: " + posBag.size());

        Position3D testSearch = new Position3D();
        Position3D testSearch2 = new Position3D();
        posBag.add(testSearch);
        posBag.add(new Position3D());
        posBag.add(new Position3D());
        posBag.add(new Position3D());
        posBag.add(new Position3D());
        posBag.add(new Position3D());
        posBag.add(new Position3D());
        posBag.add(testSearch);

        System.out.println("There are "+ posBag.countOccurrences(testSearch)+ " copies of " + testSearch);
        System.out.println("There are "+ posBag.countOccurrences(testSearch2)+ " copies of " + testSearch2);

        posBag.remove(testSearch);
        System.out.println("Current size: " + posBag.size());

        System.out.println(posBag.grab()); 
        System.out.println(posBag.grab()); 
        System.out.println(posBag.grab()); 
        System.out.println(posBag.grab()); 
        System.out.println(posBag.grab()); 
    }
}
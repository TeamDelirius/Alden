import java.util.Random;
import java.util.ArrayList;
import java.util.Collections;

class ArrayBag<T>{
  private T[ ] data;
  private int manyItems;

  public ArrayBag( )
  {
    final int INITIAL_CAPACITY = 2;
    manyItems = 0;
    data = (T[]) new Position3D[INITIAL_CAPACITY];
  }
  // Overloaded constructor to copy an existing ArrayBag
  public ArrayBag(ArrayBag other) {
    this.manyItems = other.manyItems; // Copy the number of items
    this.data = (T[]) new Position3D[other.data.length]; // Allocate new memory
    for (int i = 0; i < other.manyItems; i++)
      // Clone each Position3D object to ensure a deep copy
      // Use the copy constructor in Position3D
      this.data[i] = (T) new Position3D();
  }
  public void add(Position3D element) {
    if (manyItems == data.length) {
      // Ensure twice as much space as we need.
      ensureCapacity((manyItems + 1)*2);
    }
    data[manyItems] = (T) element;
    manyItems++;
  }
  public void ensureCapacity(int minimumCapacity) {
    Position3D[ ] biggerArray;
    if (data.length < minimumCapacity) {
      biggerArray = new Position3D[minimumCapacity];
      System.arraycopy(data, 0, biggerArray, 0, manyItems);
      data = (T[]) biggerArray;
    }
  }
  public int getCapacity( ) {
    return data.length;
  }
  public int size( ) {
    return manyItems;
  }
  public void trimToSize( ) {
    Position3D[ ] trimmedArray;
    if (data.length != manyItems) {
      trimmedArray = new Position3D[manyItems];
      System.arraycopy(data, 0, trimmedArray, 0, manyItems);
      data = (T[]) trimmedArray;
    }
  }
  public static ArrayBag union(ArrayBag bag1, ArrayBag
          bag2) {
    ArrayBag result = new ArrayBag();
    result.ensureCapacity(bag1.manyItems + bag2.manyItems);
    for (int i = 0; i < bag1.manyItems; i++)
      result.add(new Position3D());
    for (int i = 0; i < bag2.manyItems; i++)
      result.add(new Position3D());
    return result;
  }
}

class TheBagExample {
  public static void main(String[] args) {
    ArrayBag myBag = new ArrayBag();
    System.out.println("Current Capacity: " + myBag.getCapacity());
    myBag.add(new Position3D(10, 10, 10));
    myBag.add(new Position3D(20, 20, 20));
    myBag.add(new Position3D(10, 10, 10));
    System.out.println("Current Capacity: " + myBag.getCapacity());
    myBag.trimToSize();
    System.out.println("Current Capacity: " + myBag.getCapacity());
    System.out.println("Current size: " + myBag.size());
    ArrayBag copiedBag = new ArrayBag(myBag);
    copiedBag.add(new Position3D(40, 40, 40));
    System.out.println("Copied bag Size: " + copiedBag.size());
    System.out.println("Copied Bag Capacity: " +
            copiedBag.getCapacity());
    ArrayBag unionBag = ArrayBag.union(myBag,
            copiedBag);
    System.out.println("Union Bag Size: " + unionBag.size());
    System.out.println("Union Bag Capacity: " + unionBag.getCapacity());
  }
}

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

  public Position3D(Position3D datum) {
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

class Bags{
  public static void main(String[] args) { //without the trim methods i put at the end it gives me nulls.
    ArrayBag bag1 = new ArrayBag();
    System.out.println("Current Capacity of Bag: " + bag1.getCapacity() + "\n");

    Position3D pos1 = new Position3D();
    Position3D pos2 = new Position3D();
    Position3D pos3 = new Position3D();

    bag1.add(pos1);
    bag1.add(pos2);
    bag1.add(pos3);
    System.out.println("Current Capacity of Bag 1: " + bag1.getCapacity() + "\n");
    bag1.trimToSize();
    bag1.toString();

    ArrayBag bag2 = new ArrayBag();

    Position3D pos4 = new Position3D();
    bag2.add(pos4);
    System.out.println("Current Capacity of Bag 2: " + bag2.getCapacity() + "\n");
    bag2.trimToSize();
    bag2.toString();

    Random rand = new Random();
    System.out.println(rand.nextInt(0, 5));

    ArrayBag bag;
    bag = ArrayBag.union(bag1, bag2);
    bag.toString();
    System.out.println("Current Capacity of Both Bags Total: " + bag.getCapacity() + "\n");
    System.out.println("Current Capacity of Both Bags Total(without the use of making another object to hold the union): " + bag1.getCapacity() + "\n");

  }
}

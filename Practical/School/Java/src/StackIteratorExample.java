import java.util.EmptyStackException;
import java.util.Iterator;
import java.util.NoSuchElementException;
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

class Node <E>{
    private E data;
    private Node<E> link;
   
    public Node(E initialData, Node<E> initialLink) {
    data = initialData;
    link = initialLink;
    }
    public void setData(E newData) { data = newData; }
    public E getData( ) { return data; }
    public Node<E> getLink( ) { return link; }
    public void setLink(Node<E> newLink) { link = newLink; }
   
   }    

class LinkedStack<E> implements Cloneable, Iterable<E> {
    private Node<E> top;

    public LinkedStack() {
        top = null;
    }

    public boolean isEmpty() {
        return (top == null);
    }

    public E peek() {
        if (top == null)
            throw new EmptyStackException();
        return top.getData();
    }

    public Node<E> getHead() {
        return top;
    }

    public E pop() {
        E answer;
        if (top == null)
            throw new EmptyStackException();
        answer = top.getData();
        top = top.getLink();
        return answer;
    }

    public void push(E item) {
        top = new Node<E>(item, top);
    }

    public Iterator<E> getIterator() {
        return new StackIterator<E>(top);
    }
}

class StackIterator<E> implements Iterator<E> {
    private Node<E> current;

    public StackIterator(Node<E> node) {
        current = node;
    }

    public boolean hasNext() {
        return (current != null);
    }

    public E next() {
        E answer;
        if (!hasNext())
            throw new NoSuchElementException("The stack is empty");
        answer = current.getData();
        current = current.getLink();
        return answer;
    }

    public void remove() {
        throw new UnsupportedOperationException("You are not allowed to remove an element from the stack!");
    }
}

public class StackIteratorExample {
    public static void main(String[] args) {
        LinkedStack<Position3D> stack = new LinkedStack<Position3D>(); 
        stack.push(new Position3D());
        stack.push(new Position3D());
        stack.push(new Position3D());

        System.out.println(stack.pop());
        System.out.println(stack.peek());

        LinkedStack.StackIterator<Position3D> iterator = stack.getIterator();

        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
        for (Position3D item : stack) {
            System.out.println(item);
        }
    }
}
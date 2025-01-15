import java.util.NoSuchElementException;
import java.util.EmptyStackException;

class ArrayStack<E> implements Cloneable {
    private E[] data;
    private int manyItems;

    public ArrayStack() {
        final int INITIAL_CAPACITY = 10;
        manyItems = 0;
        data = (E[]) new Object[INITIAL_CAPACITY];
    }

    public ArrayStack(int initialCapacity) {
        if (initialCapacity < 0)
            throw new IllegalArgumentException
                    ("initialCapacity too small " + initialCapacity);
        manyItems = 0;
        data = (E[]) new Object[initialCapacity];
    }

    public void ensureCapacity(int minimumCapacity) {
        E biggerArray[];

        if (data.length < minimumCapacity) {
            biggerArray = (E[]) new Object[minimumCapacity];
            System.arraycopy(data, 0, biggerArray, 0, manyItems);
            data = biggerArray;
        }
    }

    public boolean isEmpty() {
        return (manyItems == 0);
    }

    public E pop() {
        if (manyItems == 0){ throw new EmptyStackException(); }
        return data[--manyItems];
    }

    public void push(E item) {
        if (manyItems == data.length) {
            ensureCapacity(manyItems * 2 + 1);
        }
        data[manyItems] = item;
        manyItems++;
    }

    public int size() { return manyItems; }

    @Override //Big O-Notation: (O)n
    public String toString() {
        StringBuilder str = new StringBuilder();
        for(int i = this.manyItems- 1; i >= 0; i--) { str.append(this.data[i]).append(" "); }
        return str.toString();
    }
}

class ArrayQueue<E> implements Cloneable {
    private E[] data;
    private int manyItems;
    private int front;
    private int rear;

    public ArrayQueue() {
        final int INITIAL_CAPACITY = 5;
        manyItems = 0;
        data = (E[]) new Object[INITIAL_CAPACITY];
    }

    public void add(E item) {
        if (manyItems == data.length)
            ensureCapacity(manyItems * 2 + 1);

        if (manyItems == 0) {
            front = 0;
            rear = 0;
        } else
            rear = nextIndex(rear);

        data[rear] = item;
        manyItems++;
    }

    public void ensureCapacity(int minimumCapacity) {
        E[] biggerArray;
        int n1, n2;
        if (data.length >= minimumCapacity)
            return;
        else if (manyItems == 0)
            data = (E[]) new Object[minimumCapacity];
        else if (front <= rear) {
            biggerArray = (E[]) new Object[minimumCapacity];
            System.arraycopy(data, front, biggerArray, front, manyItems);
            data = biggerArray;
        } else {
            biggerArray = (E[]) new Object[minimumCapacity];
            n1 = data.length - front;
            n2 = rear + 1;
            System.arraycopy(data, front, biggerArray, 0, n1);
            System.arraycopy(data, 0, biggerArray, n1, n2);
            front = 0;
            rear = manyItems - 1;
            data = biggerArray;
        }
    }

    public boolean isEmpty() {
        return (manyItems == 0);
    }

    private int nextIndex(int i) {
        if (++i == data.length)
            return 0;
        else
            return i;
    }

    public int size() {
        return rear + 1;
    }

    public E remove() {
        E answer;
        if (manyItems == 0)
            throw new NoSuchElementException("Queue underflow");
        answer = data[front];
        front = nextIndex(front);
        manyItems--;
        return answer;
    }
}


public class QueueExample {
    public static void main(String[] args) {
        String str = "tacocat";
        ArrayQueue<Character> q = new ArrayQueue<Character>();
        ArrayStack<Character> s = new ArrayStack<Character>();
        System.out.println(str);

        for (int i = 0; i < str.length(); i++) {
            q.add(str.charAt(i));
            s.push(str.charAt(i));
        }
        int res = 0;
        while (!q.isEmpty()) {
            if (q.remove() != s.pop())
                ++res;
        }
        if (res == 0) {
            System.out.println(str + " is a Palyndrome.");
        }
        else {
            System.out.println(str + " is not a Palyndrome.");
        }

        System.out.println("There are " + q.size() + " Characters in this queue.");
    }
}

public class Sort {
   public static void mergesort(int data[], int first, int n) {
      int n1; // Size of the first half of the array
      int n2; // Size of the second half of the array
      if (n > 1) {
         // Compute sizes of the two halves.
         n1 = n / 2;
         n2 = n - n1;

         mergesort(data, first, n1); // Sort first half
         mergesort(data, first + n1, n2); // Sort second half
         // Merge the two sorted halves.
         merge(data, first, n1, n2);
      }
   }

   private static void merge(int[] data, int first, int n1, int n2) {
      int[] temp = new int[n1 + n2]; // Allocate the temporary array
      int copied = 0; // Number of elements copied from data to temp
      int copied1 = 0; // Number copied from the first half of data
      int copied2 = 0; // Number copied from the second half of data
      int i; // Array index to copy from temp back into data
      // Merge elements, copying from data to the temporary array.
      while ((copied1 < n1) && (copied2 < n2)) {
         if (data[first + copied1] < data[first + n1 + copied2])
            temp[copied++] = data[first + (copied1++)];
         else
            temp[copied++] = data[first + n1 + (copied2++)];
      }
      // Copy any remaining entries in the lower subarray
      while (copied1 < n1)
         temp[copied++] = data[first + (copied1++)];
      // Copy from temp back to the data array.
      for (i = 0; i < copied; i++)
         data[first + i] = temp[i];
   }

   public static void main(String[] args) {
      final String BLANKS = " "; // A String of two blanks
      int[] data = { 83, 15, -21, 15, 100, 30, 88, 74, 45, 0 };
      System.out.println("Here is the original array:");
      for (int i = 0; i < data.length; i++)
         System.out.print(data[i] + BLANKS);
      System.out.println();

      mergesort(data, 0, data.length);
      System.out.println("In sorted order, the numbers are:");
      for (int i = 0; i < data.length; i++)
         System.out.print(data[i] + BLANKS);
      System.out.println();
   }
}
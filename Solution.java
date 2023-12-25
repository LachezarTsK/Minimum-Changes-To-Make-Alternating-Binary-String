
public class Solution {

    public int minOperations(String input) {
        int expectedDigit = 0;
        int numberOfOperationsForLeadingDigit_0 = 0;

        for (char currentDigit : input.toCharArray()) {
            numberOfOperationsForLeadingDigit_0 += Math.abs(expectedDigit - (currentDigit - '0'));
            expectedDigit ^= 1;
        }

        int numberOfOperationsForLeadingDigit_1 = input.length() - numberOfOperationsForLeadingDigit_0;

        return Math.min(numberOfOperationsForLeadingDigit_0, numberOfOperationsForLeadingDigit_1);
    }
}

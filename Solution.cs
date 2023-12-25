
using System;

public class Solution
{
    public int MinOperations(string input)
    {
        int expectedDigit = 0;
        int numberOfOperationsForLeadingDigit_0 = 0;

        foreach (char currentDigit in input)
        {
            numberOfOperationsForLeadingDigit_0 += Math.Abs(expectedDigit - (currentDigit - '0'));
            expectedDigit ^= 1;
        }

        int numberOfOperationsForLeadingDigit_1 = input.Length - numberOfOperationsForLeadingDigit_0;

        return Math.Min(numberOfOperationsForLeadingDigit_0, numberOfOperationsForLeadingDigit_1);
    }
}

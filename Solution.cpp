
#include <cmath>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
    
public:
    int minOperations(const string& input) const {
        int expectedDigit = 0;
        int numberOfOperationsForLeadingDigit_0 = 0;

        for (const auto& currentDigit : input) {
            numberOfOperationsForLeadingDigit_0 += abs(expectedDigit - (currentDigit - '0'));
            expectedDigit ^= 1;
        }

        int numberOfOperationsForLeadingDigit_1 = input.length() - numberOfOperationsForLeadingDigit_0;

        return min(numberOfOperationsForLeadingDigit_0, numberOfOperationsForLeadingDigit_1);
    }
};


/**
 * @param {string} input
 * @return {number}
 */
var minOperations = function (input) {
    const ASCII_0 = 48;
    let expectedDigit = 0;
    let numberOfOperationsForLeadingDigit_0 = 0;

    for (let i = 0; i < input.length; ++i) {
        numberOfOperationsForLeadingDigit_0 += Math.abs(expectedDigit - (input.codePointAt(i) - ASCII_0));
        expectedDigit ^= 1;
    }

    let numberOfOperationsForLeadingDigit_1 = input.length - numberOfOperationsForLeadingDigit_0;

    return Math.min(numberOfOperationsForLeadingDigit_0, numberOfOperationsForLeadingDigit_1);
};

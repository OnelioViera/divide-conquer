const sortedFrequency = require('./sorted-frequency');

// Example test cases
test('Example Test Case 1', () => {
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toBe(4);
});

test('Example Test Case 2', () => {
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toBe(1);
});

test('Example Test Case 3', () => {
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toBe(2);
});

test('Example Test Case 4', () => {
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toBe(-1);
});

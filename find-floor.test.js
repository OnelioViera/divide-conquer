const findFloor = require('./find-floor');

// Example test cases
test('Test Case 1', () => {
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 9)).toBe(8);
});

test('Test Case 2', () => {
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 20)).toBe(19);
});

test('Test Case 3', () => {
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 0)).toBe(-1);
});

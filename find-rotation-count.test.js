const findRotationCount = require('./find-rotation-count.js');

// Example test cases
test('Test Case 1', () => {
    expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2);
});

test('Test Case 2', () => {
    expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4);
});

test('Test Case 3', () => {
    expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0);
});

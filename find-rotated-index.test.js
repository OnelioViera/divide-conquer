const findRotatedIndex = require('./find-rotated-index');

// Example test cases
test('Test Case 1', () => {
    expect(findRotatedIndex([3, 4, 1, 2], 4)).toBe(1);
});

test('Test Case 2', () => {
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toBe(2);
});

test('Test Case 3', () => {
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toBe(6);
});

test('Test Case 4', () => {
    expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)).toBe(-1);
});

test('Test Case 5', () => {
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toBe(-1);
});


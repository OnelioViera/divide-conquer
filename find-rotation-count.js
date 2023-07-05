function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] > arr[mid + 1]) {
            // Found the rotation point
            return mid + 1;
        } else if (arr[start] <= arr[mid]) {
            // Left half is sorted, search in the right half
            start = mid + 1;
        } else {
            // Right half is sorted, search in the left half
            end = mid - 1;
        }
    }

    // Array is not rotated
    return 0;
}

module.exports = findRotationCount;

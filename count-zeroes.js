function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if mid is the first occurrence of 0
        if ((arr[mid] === 0 && mid === 0) || (arr[mid] === 0 && arr[mid - 1] === 1)) {
            return arr.length - mid;
        }

        // Adjust the search range based on the value at mid
        if (arr[mid] === 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return 0; // If there are no zeroes in the array, return 0
}
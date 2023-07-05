function findFloor(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    let floor = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === x) {
            // Found exact match, return it as the floor
            return arr[mid];
        } else if (arr[mid] < x) {
            // Update the floor and search in the right half
            floor = arr[mid];
            start = mid + 1;
        } else {
            // Search in the left half
            end = mid - 1;
        }
    }

    return floor;
}

module.exports = findFloor;

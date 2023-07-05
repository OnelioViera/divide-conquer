function sortedFrequency(arr, num) {
    const first = findFirstOccurrence(arr, num);
    if (first === -1) {
        return -1; // If the number is not found, return -1
    }

    const last = findLastOccurrence(arr, num);
    return last - first + 1;
}

function findFirstOccurrence(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let first = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            first = mid;
            right = mid - 1;
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return first;
}

function findLastOccurrence(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let last = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            last = mid;
            left = mid + 1;
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return last;
}

module.exports = sortedFrequency;

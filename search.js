function linearSearch(arr, target) {
    let n = arr.length - 1;

    for (let i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;
        }
        return -1;

    }
}
const array1 = [2, 5, 1, 9, 3];
console.log(linearSearch(array1, 9)); // Output: 3


function findAllOccurrences(arr, target) {
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            indices.push(i);
        }
    }
    return indices.length > 0 ? indices : -1; // Return indices or -1 if not found
}


const array2 = [2, 5, 9, 9, 3];
console.log(findAllOccurrences(array2, 9)); // Output: [2, 3]

function linearSearchLastOccurrence(arr, target) {
    let lastIndex = -1;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            lastIndex = i; // Update lastIndex whenever the target is found
        }
    }
    
    return lastIndex; // Return the last index or -1 if the target is not found
}

// Test the function
const arr = [1, 3, 7, 8, 7, 5, 6];
const target = 7;
console.log(linearSearchLastOccurrence(arr, target)); // Output: 4



function binarySearch(arr, target) {
    let right = arr.length - 1;
    let left = 0;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (target > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

    }
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 8], 8))


function binarySearchFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid; // Update result and search in left half for first occurrence
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result; // Return index of the first occurrence or -1 if not found
}


const array5 = [1, 2, 2, 2, 4, 5];
console.log(binarySearchFirstOccurrence(array5, 2)); // Output: 1


function binarySearchLastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid; // Update result and search in right half for last occurrence
            left = mid + 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result; // Return index of the last occurrence or -1 if not found
}

// Test the function
const arr6 = [1, 2, 4, 4, 4, 5, 6];
const target6 = 4;
console.log(binarySearchLastOccurrence(arr6, target6)); // Output: 4

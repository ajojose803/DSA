function findMax(arr) {
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

// Test the function
console.log(findMax([3, 5, 7, 2, 8, 1])); // Output: 8


function sumArray(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}

// Test the function
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        // Swap elements at left and right indices
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        
        left++;
        right--;
    }
    
    return arr;
}

// Test the function
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

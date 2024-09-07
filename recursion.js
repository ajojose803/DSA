function fibonacii(n) {
    if (n < 2) {
        return n;
    }
    return fibonacii(n - 1) + fibonacii(n - 2)
}

//console.log(fibonacii(6))


//Factorial
function factorial(n) {
    if (n == 0) return 1;

    else return n * factorial(n - 1);
}
//console.log(factorial(5))


//Binary Search
function recursiveBinarySearch(arr, target) {

    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, left, right) {
    if (left > right) {
        return -1
    }

    let middle = Math.floor((left + right) / 2)
    if (target === arr[middle]) {
        return middle
    }

    if (target < arr[middle]) {
        return search(arr, target, left, middle - 1)
    } else {
        return search(arr, target, middle + 1, right)
    }
}

//console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 8], 20))



//Reverse a string
function reverse(s) {
    if (s == '') return '';
    
    return reverse(s.substr(1)) + s.charAt(0);
}
console.log(reverse("hello"))

//Reverse an Array 

function reverseArray(arr, start = 0, end = arr.length - 1) {

    if (start >= end) return arr;

    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    console.log(1);

    return reverseArray(arr, start + 1, end - 1);

}

let arr = [1, 2, 3, 4, 5];


console.log(reverseArray(arr));


function sumArray(arr) {

    if (arr.length == 0) {
        return 0;
    }

    return arr[0] + sumArray(arr.slice(1))
}

//console.log(sumArray(arr));

function sumOddNumbers(arr, index = 0) {
    // Base case: if index is out of bounds, return 0
    if (index >= arr.length) {
        return 0;
    }

    // Recursive case: check if the current element is odd
    const current = arr[index];
    const sum = (current % 2 !== 0 ? current : 0) + sumOddNumbers(arr, index + 1); 

    return sum;
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7];
console.log(sumOddNumbers(array)); // Output: 16 (1 + 3 + 5 + 7)


function removeChar(str, charToRemove, index = 0) {
    // Base case: If the index is out of bounds, return the empty string
    if (index >= str.length) {
        return '';
    }

    // Get the current character
    const currentChar = str[index];

    // Recursive case: If the current character is not the one to remove, include it in the result
    if (currentChar !== charToRemove) {
        return currentChar + removeChar(str, charToRemove, index + 1);
    } else {
        // If the current character is the one to remove, skip it
        return removeChar(str, charToRemove, index + 1);
    }
}

// Example usage:
const originalString = "hoello worold";
const charToRemove = 'o';
console.log(removeChar(originalString, charToRemove)); // Output: "hell wrld"

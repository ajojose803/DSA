function recursion(n) {
    if (n < 2) {
        return n;
    }
    return recursion(n - 1) + recursion(n - 2)
}

//console.log(recursion(6))


//Factorial
function factorial(n) {
    if (n == 0) return 1;

    else return n * factorial(n - 1);
}
//console.log(factorial(5))




//Binary Search
function binarySearch(arr, target) {

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

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 8], 20))



//Reverse a string
function reverse(s) {
    if (s == '') return '';
    return reverse(s.substr(1)) + s.charAt(0);
}


//Reverse an Array 

function reverseArray(arr, start = 0, end = arr.length - 1) {

    if (start >= end) return arr;

    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = arr[temp];

    return reverseArray(arr, start + 1, end - 1);

}

let arr = [1, 2, 3, 4, 5];

// console.log(reverseArray(arr));


function sumArray(arr) {

    if (arr.length == 0) {
        return 0;
    }

    return arr[0] + sumArray(arr.slice(1))
}


console.log(sumArray(arr))
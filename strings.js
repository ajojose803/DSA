function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Test the function
console.log(reverseString("hello")); // Output: "olleh"


function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome("A man a plan a canal Panama")); // Output: true

function isPalindrome(str) {
    let cleanedStr = '';
    // Convert to lowercase and remove non-alphanumeric characters manually
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleanedStr += char;
        }
    }

    // Check if the string is a palindrome
    let left = 0;
    let right = cleanedStr.length - 1;
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Test the function
console.log(isPalindrome("A man a plan a canal Panama")); // Output: true


function firstNonRepeatingChar(str) {
    const charCount = {};

    // Count the occurrences of each character manually
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }

    // Find the first non-repeating character
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];
        }
    }

    return ''; // Return an empty string if no non-repeating character is found
}

// Test the function
console.log(firstNonRepeatingChar("swiss")); // Output: "w"

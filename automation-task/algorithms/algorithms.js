// 1. Sum of Numbers: Write a program that calculates the sum of all numbers from 1 to N, where N is input by the user.

function sumOfNums(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
} 


// 2.Factorial: Implement an algorithm to compute the factorial of a number N.

function factorial(n) {
    let result = 1;
    for(let i = n; i >= 1; i--) {
        sum *= i;
    }
    return result;
} 


// 3. Maximum Value Search: Find the maximum value in an array of integers.

let maxNum = (arr) => Math.max(...arr);


// 4. Minimum Value Search: Find the minimum value in an array of integers.

let minNum = (arr) => Math.min(...arr);


// 5. Palindrome: Determine whether a string is a palindrome (reads the same forwards and backwards).

function isPalindrome(string) {
    let formattedStr = string.toLowerCase().replaceAll(" ", "");
    let reversedStr = formattedStr.split("").reverse().join("");
    return formattedStr === reversedStr;
}


// 6. Element Search: Write a function that searches for a specified element in an array and returns its index (if the element is found) or -1 (if the element is not found).

let elSearch = (arr, element) => arr.indexOf(element);
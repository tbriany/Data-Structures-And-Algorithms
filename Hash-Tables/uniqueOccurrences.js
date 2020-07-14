// Given an array of integers arr, write a function that returns true if and only if 
// the number of occurrences of each value in the array is unique.


// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the 
// same number of occurrences.


// Example 2:
// Input: arr = [1,2]
// Output: false


// Example 3:
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true


// Constraints:
// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000

let input1 = [1, 2, 2, 1, 1, 3]
// output: true 

let input2 = [1, 2]
// Output: false

let input3 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]
// Output: true

let input4 = [0, 0, -2, -1, 4, 8, -3, 9, 6]
// Output: false

var uniqueOccurrences = function (arr) {
    let nums = {}
    let check = {}
    for (let i = 0; i < arr.length; i++) {
        if (!nums[arr[i]]) {
            nums[arr[i]] = 1
        } else {
            nums[arr[i]]++
        }
    }

    for (let el in nums) {
        let curr = nums[el]
        if (check[curr]) {
            return false
        } else {
            check[curr] = 1
        }
    }

    return true
};

console.log(uniqueOccurrences(input1))
console.log(uniqueOccurrences(input2))
console.log(uniqueOccurrences(input3))
console.log(uniqueOccurrences(input4))
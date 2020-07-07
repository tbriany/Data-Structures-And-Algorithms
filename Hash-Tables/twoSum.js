// Given an array of integers, return indices of the two numbers such that they add
// up to a specific target.

// You may assume that each input would have exactly one solution, and you may not 
// use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function (nums, target) {
    let obj = {};
    let out = []

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        const diff = target - curr;

        if (diff in obj) {
            out.push(obj[diff], i)
        } else {
            obj[curr] = i;
        }

    }

    return out
};

let input = [2, 7, 11, 15]
let target = 9

console.log(twoSum(input, target))
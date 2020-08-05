// Given an array A of strings made only from lowercase letters, return a list of 
// all characters that show up in all strings within the list (including duplicates).  
// For example, if a character occurs 3 times in all strings but not 4 times, you need 
// to include that character three times in the final answer.

// You may return the answer in any order.

// Note:
// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] is a lowercase letter

// Example 1:
// Input: ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:
// Input: ["cool","lock","cook"]
// Output: ["c","o"]

var commonChars = function (A) {
    let output = []
    let tracker = []


    for (let i = 0; i < A.length; i++) {
        let obj = {}
        for (let j = 0; j < A[i].length; j++) {
            if (!obj[A[i][j]]) {
                obj[A[i][j]] = 1
            } else {
                obj[A[i][j]]++
            }
        }
        tracker.push(obj)

    }


    let first = tracker[0]

    for (let ltr in first) {
        let nums = []
        nums.push(first[ltr])
        for (let i = 1; i < tracker.length; i++) {
            if (tracker[i][ltr]) {
                nums.push(tracker[i][ltr])
            }
        }

        if (nums.length === tracker.length) {
            let times = Math.min(nums)

            for (j = 0; j <= times; j++) {
                output.push(ltr)
            }
        }
    }

    return output

};
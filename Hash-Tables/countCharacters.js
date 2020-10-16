// You are given an array of strings words and a string chars.
// A string is good if it can be formed by characters from chars 
// (each character can only be used once).
// Return the sum of lengths of all good strings in words.

// Note:
// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// All strings contain lowercase English letters only.

// Example 1:
// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: 
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.


// Example 2:
// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: 
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

var countCharacters = function (words, chars) {
    let charsObj = {}
    let goodStr = ""

    for (let i = 0; i < chars.length; i++) {
        if (!charsObj[chars[i]]) {
            charsObj[chars[i]] = 1
        } else {
            charsObj[chars[i]]++
        }
    }


    for (let i = 0; i < words.length; i++) {
        let good = true
        let charsCopy = { ...charsObj }

        for (let j = 0; j < words[i].length; j++) {
            if (!charsCopy[words[i][j]]) {
                good = false
                break;
            } else {
                charsCopy[words[i][j]]--;
                if (charsCopy[words[i][j]] === 0) {
                    delete charsCopy[words[i][j]]
                }
            }
        }

        if (good) {
            goodStr += words[i]
        }
    }

    return goodStr.length
};

let words = ["cat","bt","hat","tree"]
let chars = "atach"

console.log(countCharacters(words, chars))
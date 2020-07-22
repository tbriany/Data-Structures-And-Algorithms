// Given a singly linked list, determine if it is a palindrome.

// Example 1:
// Input: 1->2
// Output: false

// Example 2:
// Input: 1->2->2->1
// Output: true

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(2)
let n4 = new Node(1)

n1.next = n2
n2.next = n3
n3.next = n4


var isPalindrome = function (head) {
    let curr = head
    let a = []
    let b = []

    while (curr) {
        a.push(curr.val)
        b.unshift(curr.val)
        curr = curr.next
    }

    return a.join('') === b.join('')
};

console.log(isPalindrome(n5))
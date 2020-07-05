// Given a linked list, determine if it has a cycle in it.
// To represent a cycle in the given linked list, we use an integer pos 
// which represents the position (0-indexed) in the linked list where tail connects to. 
// If pos is -1, then there is no cycle in the linked list.


// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.pre = null
    }
}

let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)
let n4 = new Node(4)
let n5 = new Node(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n1


const findCycle = (node) => {
    let curr = node
    let obj = {}

    while (curr) {
        if (!curr.next) {
            return false
        } else if (obj[curr.next.val]) {
            return true
        } else if (!obj[curr.val]) {
            obj[curr.val] = [curr.val]
            curr = curr.next
        }
    }
}

findCycle(n1)
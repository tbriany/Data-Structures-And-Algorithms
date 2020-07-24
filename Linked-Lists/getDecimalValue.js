// Given head which is a reference node to a singly-linked list. The value of each node 
// in the linked list is either 0 or 1. The linked list holds the binary representation of 
// a number.


// Return the decimal value of the number in the linked list.

// Constraints:
// The Linked List is not empty.
// Number of nodes will not exceed 30.
// Each node's value is either 0 or 1.


// Example 1:
// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10


// Example 2:
// Input: head = [0]
// Output: 0


// Example 3:
// Input: head = [1]
// Output: 1


// Example 4:
// Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
// Output: 18880


// Example 5:
// Input: head = [0,0]
// Output: 0
 

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let n1 = new Node(1)
let n2 = new Node(0)
let n3 = new Node(1)

n1.next = n2
n2.next = n3


var getDecimalValue = function(head) {
    let curr = head
    let count = 0
    
    while (curr){
        count = (count * 2) + curr.val
        curr = curr.next 
    }
    return count 
};


console.log(getDecimalValue(n1))s
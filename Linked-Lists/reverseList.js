// Reverse a singly linked list.

// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

class Node {
    constructor(val) {
        this.val = val
        this.next = null
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

var reverseList = function (head) {
    let prev = null

    while (head) {
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }

    return prev
};

console.log(reverseList(n1))
// Merge two sorted linked lists and return it as a new sorted list. 
// The new list should be made by splicing together the nodes of the first two lists.

// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.pre = null
    }
}

let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(4)

let n4 = new Node(1)
let n5 = new Node(3)
let n6 = new Node(4)

n1.next = n2
n2.next = n3

n4.next = n5
n5.next = n6


var mergeTwoLists = function (l1, l2) {
    if (l1 == null && l2 == null) { return null }
    if (l1 == null) { return l2 }
    if (l2 == null) { return l1 }

    let currA = l1
    let currB = l2
    let newHead;
    let currNew;

    while (currA && currB) {
        if (currA.val <= currB.val) {
            let newA = new ListNode(currA.val)
            if (!newHead) {
                newHead = newA
                currNew = newHead
            } else {
                currNew.next = newA
                currNew = currNew.next
            }
            currA = currA.next
        } else {
            let newB = new ListNode(currB.val)
            if (!newHead) {
                newHead = newB
                currNew = newHead
            } else {
                currNew.next = newB
                currNew = currNew.next
            }
            currB = currB.next
        }
    }

    while (currA) {
        let newA = new ListNode(currA.val)
        currNew.next = newA
        currNew = currNew.next
        currA = currA.next
    }

    while (currB) {
        let newB = new ListNode(currB.val)
        currNew.next = newB
        currNew = currNew.next
        currB = currB.next
    }

    return newHead
};

console.log(mergeTwoLists(n1, n4))
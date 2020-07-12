// Given two binary trees, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical and the 
// nodes have the same value.

// Example 1:
// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true

// Example 2:
// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// Output: false

// Example 3:

// Input:     1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// Output: false


class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);


a.left = b;
a.right = c;

let d = new TreeNode(1);
let e = new TreeNode(2);
let f = new TreeNode(3);

d.left = e;
d.right = f;


var isSameTree = function (p, q) {
    if (!p || !q) {
        if (p || q) { return false }
        return true
    }

    let leftSame = isSameTree(p.left, q.left)
    let rightSame = isSameTree(p.right, q.right)
    let nodeSame = (p.val === q.val)
    return leftSame && rightSame && nodeSame
};

console.log(isSameTree(a, d))
// Invert a binary tree.

// Example:
// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let a = new TreeNode(4);
let b = new TreeNode(7);
let c = new TreeNode(2);
let d = new TreeNode(9);
let e = new TreeNode(6);
let f = new TreeNode(3);
let g = new TreeNode(1);

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;
c.right = g;


//           (4)
//     (7)       (2)
//   (9) (6)  (3)   (1)


var invertTree = function (root) {
    if (!root) return root;

    let left = invertTree(root.left);
    let right = invertTree(root.right);

    root.left = right
    root.right = left

    return root;
};

console.log(invertTree(a))
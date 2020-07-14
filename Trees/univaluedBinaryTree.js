// A binary tree is univalued if every node in the tree has the same value.
// Return true if and only if the given tree is univalued.

// Note:
// The number of nodes in the given tree will be in the range [1, 100].
// Each node's value will be an integer in the range [0, 99].

// Example 1:
// Input: [1,1,1,1,1,null,1]
// Output: true

// Example 2:
// Input: [2,2,2,5,2]
// Output: false

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//   let a = new TreeNode("A");
//   let b = new TreeNode("B");
//   let c = new TreeNode("C");
//   let d = new TreeNode("D");
//   let e = new TreeNode("E");
//   let f = new TreeNode("F");
//   let g = new TreeNode("G");
//   let h = new TreeNode("H");
//   let i = new TreeNode("I");
//   let j = new TreeNode("J");
//   let k = new TreeNode("K");

let a = new TreeNode("A");
let b = new TreeNode("A");
let c = new TreeNode("A");
let d = new TreeNode("A");
let e = new TreeNode("A");
let f = new TreeNode("A");
let g = new TreeNode("A");
let h = new TreeNode("A");
let i = new TreeNode("A");
let j = new TreeNode("A");
let k = new TreeNode("A");


a.left = b;
a.right = g;

b.left = c;
b.right = f;

c.left = d;
c.right = e;

g.left = h;
g.right = k;

h.left = i;
h.right = j;

// We could visualize the tree constructed as: 
//           (A)
//     (B)       (G)
//   (C) (F)  (H)   (K)
// (D)(E)   (I)(J)


var isUnivalTree = function (root) {
    return solution(root, root.val)
};

const solution = (root, val) => {
    if (!root) {
        return true
    }

    if (root.val !== val) {
        return false
    }

    let sameLeft = solution(root.left, val)
    let sameRight = solution(root.right, val)

    return (sameLeft && sameRight)
}

console.log(isUnivalTree(a))
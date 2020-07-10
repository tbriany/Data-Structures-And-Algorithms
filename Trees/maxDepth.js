// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node 
// down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.


class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


let a = new TreeNode(3);
let b = new TreeNode(9);
let c = new TreeNode(20);
let d = new TreeNode(15);
let e = new TreeNode(7);


a.left = b;
a.right = c;

c.left = d;
c.right = e;


// We could visualize the tree constructed as: 
//           (3)
//     (9)       (20)
//            (15)   (7)


const maxDepth = function (root) {
    if (root === null) {
        return 0
    }

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};


console.log(maxDepth(a))


const maxDepth2 = (root) => {
    let max = 0

    let BFS = (node, level) => {
        if (node === null) return
        if (level > max) max = level
        BFS(node.left, level + 1)
        BFS(node.right, level + 1)
    }
    BFS(root, 1)
    return max
};

console.log(maxDepth2(a))

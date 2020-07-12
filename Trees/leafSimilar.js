// Consider all the leaves of a binary tree.  From left to right order, the values of 
// those leaves form a leaf value sequence.


// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.


// Constraints:
// Both of the given trees will have between 1 and 200 nodes.
// Both of the given trees will have values between 0 and 200


class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let a = new TreeNode(3);
let b = new TreeNode(5);
let c = new TreeNode(1);
let d = new TreeNode(6);
let e = new TreeNode(2);
let f = new TreeNode(9);
let g = new TreeNode(8);
let h = new TreeNode(7);
let i = new TreeNode(4);


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
e.left = h;
e.right = i;

//           (3)
//     (5)       (1)
//   (6) (2)   (9) (8)
//     (7) (4)


let j = new TreeNode(2);
let k = new TreeNode(4);
let l = new TreeNode(1);
let m = new TreeNode(6);
let n = new TreeNode(3);
let o = new TreeNode(9);
let p = new TreeNode(8);
let q = new TreeNode(7);
let r = new TreeNode(4);


j.left = k;
j.right = l;
k.left = m;
k.right = n;
l.left = o;
l.right = p;
n.left = q;
n.right = r;

//           (2)
//     (4)       (1)
//   (6) (3)   (9) (8)
//     (7) (4)


var leafSimilar = function (root1, root2) {
    const dfs = (node, arr) => {
        if (node.left) dfs(node.left, arr)
        if (node.right) dfs(node.right, arr)
        if (node && !node.left && !node.right) arr.push(node.val)
        return arr
    }

    const first = dfs(root1, [])
    const second = dfs(root2, [])

    return first.join(' ') === second.join(' ')
};


console.log(leafSimilar(a, j))
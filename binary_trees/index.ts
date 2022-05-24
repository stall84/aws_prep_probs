/**
 * @description Before working on Binary Tree algorithms. Let's construct a model of what a tree node will be.
 *              Mainly we want to give a node a data property, a left-child-pointer, and a right-child-pointer
 *              or null for any of those properties that don't exist.
 */

class TreeNode {
    value: any;      
    left: TreeNode | null = null;    // Prototype TreeNode should have no children initially
    right: TreeNode | null = null;
    constructor(value: any, ) {
        this.value = value;
    }
}

const a = new TreeNode('a')
const b = new TreeNode('b')
const c = new TreeNode('c')
const d = new TreeNode('d')
const e = new TreeNode('e')
const f = new TreeNode('f')

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

// ^ This initial setup should look like:
//          a
//        /  \
//       b    c
//     /  \  /
//   d    e f

// Write a Depth First Traversal of our current Binary Tree
// Starting from the root (but could be any node)

// const binaryDFT = (rootNode: TreeNode): void => {
//     const stack: TreeNode[] = [rootNode];
//         while ( stack.length > 0 ) {
//             let current = stack.pop();
//             // console.log('stack : ', stack)
//             if (current.right !== null) {
//                 stack.push(current.right);
//             }
//             if (current.left !== null) {
//                 stack.push(current.left);
//             }
//             console.log('visited node: ', current.value)
//         }
// }

// binaryDFT(a);

// const recursiveBinaryDFT = (rootNode: TreeNode): void => {

//     console.log('current : ', rootNode);
//     if (rootNode === null) return ;
//     console.log('visited node : ', rootNode.value);
//     recursiveBinaryDFT(rootNode.left);
//     recursiveBinaryDFT(rootNode.right);
// }

// recursiveBinaryDFT(a);

const binaryBFT = (rootNode: TreeNode): void => {
    if (rootNode === null || rootNode === undefined) return;
    const queue = [rootNode];
    while (queue.length > 0) {
        let current = queue.shift();
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
        console.log('visited node: ', current.value);
    }
}

// binaryBFT(a);

const binarySearchBFT = (rootNode: TreeNode, target: string): boolean => {
    if (rootNode === null || rootNode === undefined) return;
    const queue = [rootNode];
    while (queue.length > 0) {
        let current = queue.shift();
        if (current.value === target) return true;
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);

        console.log('visited node: ', current.value);
    }
    return false;
}

// console.log(binarySearchBFT(a,'e'))

const recursiveSearchDFT = (rootNode: TreeNode, target: string): boolean => {
    if (rootNode === null || rootNode === undefined) return false;
    if (rootNode.value === target) return true;
    return recursiveSearchDFT(rootNode.left, target) || recursiveSearchDFT(rootNode.right, target);
}

console.log(recursiveSearchDFT(a, 'j'))
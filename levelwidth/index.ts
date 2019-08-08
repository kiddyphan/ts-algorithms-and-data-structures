import { Node, Tree } from "../tree";

// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

export function levelWidth(root: Node): number[] {
    let arr = [root, 's'];
    let counter = [0];

    while (arr.length > 1) {
        let node = arr.shift();
        if (node === 's') {
            counter.push(0);
            arr.push('s');
        } else {
            arr.push(...(node as Node).children);
            counter[counter.length - 1]++;
        }
    }

    return counter;
}

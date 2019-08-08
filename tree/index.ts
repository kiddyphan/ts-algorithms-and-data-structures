// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

export class Node {
    data: any;
    children: any[] = [];

    constructor(data) {
        this.data = data;
    }

    add = (data: any) => {
        this.children.push(new Node(data));
    }

    remove = (data) => {
        this.children = this.children.filter((child: Node) => {
            return child.data !== data;
        });
    }
}

export class Tree {
    root: Node = null;

    constructor() {

    }

    traverseBF = (fn: Function) => {
        let arrNode = [this.root];

        while (arrNode.length) {
            let node = arrNode.shift();
            arrNode.push(...node.children);
            fn(node);
        }
    }

    traverseDF = (fn: Function) => {
        let arrNode = [this.root];

        while (arrNode.length) {
            let node = arrNode.shift();
            arrNode.unshift(...node.children);
            fn(node);
        }
    }
}

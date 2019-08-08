// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

export class Node {
    data: any;
    next: Node;

    constructor(data: any, next: Node = null) {
        this.data = data;
        this.next = next;
    }
}

export class LinkedList {
    head: Node = null;

    constructor() {

    }

    insertFirst = (data: any) => {
        this.insertAt(data, 0);
    }

    size = (node: Node = this.head, count: number = 0): number => {
        if (node) {
            return this.size(node.next, count + 1);
        } else {
            return count;
        }
    }

    getFirst = (): Node => {
        return this.getAt(0);
    }

    getLast = (node: Node = this.head): Node => {
        return this.getAt(this.size() - 1)
    }

    clear = () => {
        this.head = null;
    }

    removeFirst = () => {
        this.head = this.head ? this.head.next : null;
    }

    removeLast = () => {
        if (this.head) {
            if (!this.head.next) {
                this.head = null;
            } else {
                let node = this.head.next;
                let prevNode = this.head;

                while (node.next) {
                    prevNode = node;
                    node = node.next;
                }
                prevNode.next = null;
            }
        }
    }

    insertLast = (data: any) => {
        this.insertAt(data, this.size());
    }

    getAt = (index: number) => {
        let node = this.head;
        let count = 0;

        while (node) {
            if (count === index) {
                return node;
            }
            count++;
            node = node.next;
        }

        return node;
    }

    removeAt = (index: number) => {
        if (this.head && index < this.size()) {
            if (index === 0) {
                this.head = this.head.next;
            } else {
                const prevNode = this.getAt(index - 1);
                if (prevNode) {
                    prevNode.next = prevNode.next.next;
                }
            }
        }
    }

    insertAt = (data: any, index: number) => {
        if (this.head) {
            if (index === 0) {
                this.head = new Node(data, this.head);
            } else if (index >= this.size()) {
                let lastNode = this.getLast();
                lastNode.next = new Node(data);
            } else {
                const currentNode = this.getAt(index);
                const prevNode = this.getAt(index - 1);
                if (currentNode && prevNode) {
                    let newNode = new Node(data, currentNode);
                    prevNode.next = newNode;
                }
            }
        } else {
            this.head = new Node(data);
        }
    }

    forEach = (fn: Function) => {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter)
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

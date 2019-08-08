import { Node, LinkedList } from "../linkedlist";

// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   l.insertLast('d')
//   l.insertLast('e')
//   l.insertLast('f')
//   l.insertLast('g')
//   l.insertLast('h')
//   l.insertLast('i')
//   midpoint(l); // returns { data: 'b' }

export function midpoint(list: LinkedList) {
    let slow: Node = list.getFirst();
    let fast: Node = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

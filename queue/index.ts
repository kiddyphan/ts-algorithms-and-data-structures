// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

export class Queue {
    queue: number[] = [];

    add = (arg: number) => {
        return this.queue.unshift(arg);
    }

    remove = () => {
        return this.queue.pop();
    }
}

const q = new Queue();
q.add(1);
q.add(2);
q.remove();
console.log(q.queue);


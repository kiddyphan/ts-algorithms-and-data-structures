// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

export class Queue {
    queue: any[] = [];

    add = (arg: any) => {
        return this.queue.unshift(arg);
    }

    remove = () => {
        return this.queue.pop();
    }

    peek = () => {
        return this.queue[this.queue.length - 1];
    }
}


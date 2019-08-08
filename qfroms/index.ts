import { Stack } from "./stack";

// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

export class Queue {
    firstStack: Stack = new Stack();
    secondStack: Stack = new Stack();

    add = (arg: number) => {
        this.firstStack.push(arg);
    }

    remove = () => {
        while (this.firstStack.peek()) {
            this.secondStack.push(this.firstStack.pop());
        }

        const record = this.secondStack.pop();

        while (this.secondStack.peek()) {
            this.firstStack.push(this.secondStack.pop());
        }

        return record;
    }

    peek = () => {
        while (this.firstStack.peek()) {
            this.secondStack.push(this.firstStack.pop());
        }
        const record = this.secondStack.peek();

        while (this.secondStack.peek()) {
            this.firstStack.push(this.secondStack.pop());
        }
        return record;
    }
}


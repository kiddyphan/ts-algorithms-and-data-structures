export class Stack {
    data: any[] = [];

    push = (arg: any) => {
        this.data.push(arg);
    }

    pop = () => {
        return this.data.pop();
    }

    peek = () => {
        return this.data[this.data.length - 1];
    }
}

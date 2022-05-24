/**
 * @description Create a class representing a stack 
 * */

class Stack {
    storage: any = {};
    counter: number = 0;

    constructor() {}

    getSize(): number {
        return this.counter;
    }
    push(element: any): any {
        this.storage[this.counter] = element;
        this.counter++
    }
    pop(): any {
        if (this.counter > 0) {
            this.counter--
            let curr = this.storage[this.counter]
            delete this.storage[this.counter]
            return curr;
        }
        else return "Stack is currently empty.. cannot pop"
    }
    peek(): string {
        if (this.counter > 0) {
            let curr = this.storage[this.counter -1].toString();
            return curr;
        }
        else return "Stack is currently empty.. cannot peek"
    }

}

const myStack = new Stack();

myStack.push(8);
myStack.push(323);
myStack.push(882);
myStack.push(17);
myStack.push(1);

console.log('initial size: ', myStack.getSize());
console.log('first peek :', myStack.peek());
console.log('-----------------------------------------------');
console.log('popping stack : ', myStack.pop());
console.log('new size: ', myStack.getSize());
console.log('new peek: ', myStack.peek());
console.log('new pop: ', myStack.pop());


class ListNode {
    value: any
    next: ListNode = null;
    constructor (val: any) {
        if (val === null || val === undefined) {
            return; 
        }
        this.value = val;
    }
}

const A = new ListNode('A');
const B = new ListNode('B');
const C = new ListNode('C');
const D = new ListNode(null);


Array.from([A,B,C,D]).forEach((node:any) => console.log(node.value));
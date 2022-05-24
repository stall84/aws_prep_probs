/**
 * @description Create a class representing a stack 
 * */

class CustomSet {
    public collection: any[] = [];
    
    constructor(){}
    has (value: any) {
            return (this.collection.indexOf(value) !== -1)
    }
    values () {
        return this.collection;
    }
    add (value: any) {
        if (this.collection.indexOf(value) === -1) {
            this.collection.push(value);
        }
        else return;
    }
    remove (element: any) {
        if (this.has(element)) {
            let location = this.collection.indexOf(element);
            return (this.collection.splice(location, 1))[0];
        }
        else return "Element not found in Set"
    }
    size () {
        return this.collection.length;
    }
    union (otherSet: CustomSet) {
        const unionSet = new Set();
        const firstSet = this.values();
        const secondSet = otherSet.values();
        firstSet.forEach((ele:any) => unionSet.add(ele));
        secondSet.forEach((ele:any) => unionSet.add(ele));
        return unionSet;
    }
}

const mySet = new CustomSet();
const newSet = new CustomSet();

mySet.add(14);
mySet.add(32);
mySet.add(1223);
mySet.add(33);

newSet.add(30);
newSet.add(500);

console.log('has 32: ', mySet.has(32));
console.log('values : ', mySet.values());
console.log('remove 32: ', mySet.remove(32));
console.log('has 32 now: ', mySet.has(32));
console.log('values now: ', mySet.values());
console.log('size call : ', mySet.size());
console.log('unionSets : ', mySet.union(newSet));
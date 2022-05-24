
function sorter (arr: number[]): void {
    // Attempting an off-hand bubble-sort

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(`I: ${i} - J: ${j} J+1: ${j+1}`)
            console.log(`arr[i]: ${arr[i]} - arr[j]: ${arr[j]} arr[j+1]: ${arr[j+1]}`)
            if (arr[j] > arr[j+1]) {
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
            }
        }
    }
    console.log('arr : ', arr);
}

// fuckSort([15,21,1,8,99,5]);

// Given two strings determine if they are anagrams. return true or false

function anagram (str1: string, str2: string): boolean {
    if ((str1 === null || str2 === null) || str1.length !== str2.length) return false;  // Early return before any memory provisioning for the objects, etc.
    const freq1 = {};
    const freq2 = {};
    for (let i = 0; i < str1.length; i++) {
        if ( freq1[str1[i]] ){
            freq1[str1[i]]++ 
        }
        else {
            freq1[str1[i]] = 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if ( freq2[str2[i]] ){
            freq2[str2[i]]++ 
        }
        else {
            freq2[str2[i]] = 1;
        }
    }
    let answer;
    const keys1 = Object.keys(freq1);
    const keys2 = Object.keys(freq2);
    for (let key of keys1){
        if (freq1[key] !== freq2[key]) {
            answer = false;
        }
        else {
            answer = true;
        }
    }
    // for (let key in freq1) {
    //     if ( key in freq2 && freq1[key] === freq2[key]) {
    //         answer = true;
    //     }
    //     else {
    //         answer = false;
    //     }
    //     return answer;
    // }

    return answer;
}

console.log(anagram('nameless', 'salesmen'));

function indexer1 (nums: number[], target: number): number[] | void {
    const hashTable = new Map();
    let start = -1;
    let end = -1;
    for (let i = 0; i < nums.length; i++) {
        if (hashTable.has(nums[i])) {
            hashTable.set(nums[i], [...hashTable.get(nums[i]), i])
        }
        else {
            hashTable.set(nums[i], [i])
        }
    }
    if (hashTable.has(target)) {
        start = hashTable.get(target)[0];
        end = hashTable.get(target)[hashTable.get(target).length - 1];
    }
    return [start, end];
    // console.log('hashTable: ', hashTable);
}

console.log(indexer1([2,4,5,5,5,5,5,7,9,9], 7))
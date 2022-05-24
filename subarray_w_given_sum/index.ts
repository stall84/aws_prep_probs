

/**
 * @description Given an unsorted array @param arr of size @param n that contains only non-negative integers,
 * find a continuous sub-array which adds to a given number @param sum 
 * In case of multiple subarrays, @return the subarray which comes first on moving from left to right.
 */

class Solution {
    constructor(){}
    subarraySum(arr: number[], n: number, s: number): number[] | void {
        // Because it wants the first subarray (in case of multiple ones) from the left
        // Try an iterative solution first since that's the way iteration moves by default
        
        for (let i = 0; i < arr.length; i++) {
            let sum = 0;
            for (let d = i; d < arr.length; d++) {
                console.log('sum: ', sum)
                sum += arr[d]
                if (sum === s) {
                    console.log(`found : ${i}, ${d} `)
                }
            }
            
        }
    }
    mapSubArraySum(arr: number[], n: number, sum: number): number[] {
        let currentSum = 0;
        let startIndex = 0;
        let endIndex = -1
        const currSumIndexMap = new Map();
        for ( let i = 0; i < arr.length; i++ ) {
            currentSum += arr[i];
            if (currentSum - sum === 0) {
                startIndex = 0;
                endIndex = i;
                // We've found the first occurring substring. So break out of the loop and return the tuple
                break;
            }
            else if (currSumIndexMap.has(currentSum - sum)) {
                // If the difference between the current running sum and the desired sum is in our hashMap.. 
                // That means that the element we just traversed was the exact compliment to the desired sum
                // meaning we've found the first satisfactory sub-array.
                startIndex = currSumIndexMap.get(currentSum - sum) + 1 // Add 1 because the index keyed from the previous ocurring sum won't include the compliment
                endIndex = i;
                break;
            }
            else {
                currSumIndexMap.set(currentSum, i);
            }
        }
        return endIndex != -1 ? [startIndex, endIndex] : [endIndex];
    }
}

let mySolution = new Solution();

console.log(mySolution.subarraySum([1,2,3,4,5,6,7,8,9,10], 10, 5));

console.log(mySolution.subarraySum([11,2,3,42,15,6,71,8,91,10], 10, 3));

console.log(`\n--------------------------------------------------\n`)

console.log(mySolution.mapSubArraySum([1,2,3,4,5,6,7,8,9,10], 10, 5));

console.log(mySolution.mapSubArraySum([11,2,3,42,15,6,71,8,91,10], 10, 3));

console.log(mySolution.mapSubArraySum([11,2,3,42,15,6,71,8,91,10], 10, 15));

console.log(mySolution.mapSubArraySum([11,2,3,42,15,6,71,8,91,10], 10, 16));

console.log(mySolution.mapSubArraySum([11,2,3,42,15,6,71,8,91,10], 10, 17));
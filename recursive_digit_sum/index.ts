/**
 * @description This one gave us a bit of trouble.. Mainly because we still are heavily weighted in thinking iteratively rather than recursively or even mathematically (unfortunately)
 *              Essentially this problem is one you'd need to take the simplest possible case of and visualize by writing out.
 *              
 */

function superDigit (input: string, multiplier: number): number {
    console.log('called')
    // basic validation of input.. at least for nulls
    if (input === null || multiplier === null) return;
    // Consider an early return case where we are given a single digit as input and 1 as the multiplier
    if (input.length === 1 && multiplier === 1) return parseInt(input);
    // Set our base condition .. This is a bit tricky considering the node paradigm and input coming in as a string (even though it could easily be parsed as a number)
    // Alternately you can look at the string input as advantageous since we can iterate and find the length of the string easily in javascript

    // If we've recursed down to a single digit, we are done - return it
    if ( input.length === 1 ) return parseInt(input);

    // Hold our running sum
    let sum = 0;
    
    // This will still be a recursive solution. We're only iterating over each individual chunk to get the sum
    for (let i = 0; i < input.length; i++) {
        // Add to our sum for each individual packet
        sum += parseInt(input[i]);
    }
    console.log('sum: ', sum)
    // Remember to return the recursive function call so it's put on the call stack
    // The way I understand this recursive call is we pass a constant 1 into the multiplier since the real multiplication 
    // is handled within the first argument (sum*mulitplier).toString()
    return superDigit((sum*multiplier).toString(), 1)
}

console.log(superDigit('9875', 4));
// 1st Run: 1+2+3+1+2+3+1+2+3 = 18
// 2nd Call: superDigit(18, 1) **multiplication already applied in left argument**
// 2ndRun: 1 + 8 = 9
// 3rd Call: superDigit(9, 1)
// 3rd Run: input.length === 1 / Returned 9

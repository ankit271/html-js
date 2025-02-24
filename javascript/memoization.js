/*
Memoization is a technique used in JavaScript to optimize functions by caching the results of 
expensive function calls and returning the cached result when the same inputs occur again.
used either object or map
*/

function memoizeFactorial() {
    debugger;
    const cache = {};
    console.log(cache);    
    return function factorial(n) {
        if (n < 0) return undefined;
        if (n === 0 || n === 1) return 1;

        if (cache[n]) {
            return cache[n];
        } else {
            const result = n * factorial(n - 1);
            cache[n] = result;
            return result;
        }
    };
}

const memoizedFactorial = memoizeFactorial();

console.log(memoizedFactorial(5)); // Output: 120 (calculated)
console.log(memoizedFactorial(6)); // Output: 720 (calculated, uses cached result for 5)
console.log(memoizedFactorial(5)); // Output: 120 (cached result)

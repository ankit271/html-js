/*
pure function in JavaScript is a function that
,given the same input, will always return the same output and has no side effects
*/

function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5 (always the same output for the same input)

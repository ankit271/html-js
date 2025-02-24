/*
Closures in JavaScript are a powerful concept that allow functions to have "private" variables.
They help in creating a more controlled scope for variables, preserving state, 
and implementing certain design patterns like currying and memoization.

A closure gives you access to an outer function’s scope from an inner function. 
Closures are created every time a function is created, at function creation time.
*/
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}


const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

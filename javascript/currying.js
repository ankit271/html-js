/*
a curried function takes one argument at a time 
and returns a new function that takes the next argument until all arguments have been provided 
*/

function applyDiscount(rate) {
    return function(price) {
        return price - (price * rate);
    }
}

const tenPercentDiscount = applyDiscount(0.10);
const twentyPercentDiscount = applyDiscount(0.20);

console.log(tenPercentDiscount(100)); // Output: 90
console.log(twentyPercentDiscount(100)); // Output: 80

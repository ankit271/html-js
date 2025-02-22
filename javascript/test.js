//object

const user = {
    name:'Ankit',
    age: 28,
    calculateDoB: function(){
        let d = new Date();
        return d.getFullYear() - this.age;        
    }    
}

console.log(user.name);
console.log(user.calculateDoB());

//Array

const nums = [10,20,30,40,50]

//const cond = nums.find(num => num > 20);
const cond = nums.filter(num => num > 20);

console.log(cond);

function add(num1, num2){
    console.log(num1+num2);
    
}

add(5,6);

const add = (num1,num2 ) => num1 + num2;

console.log(add(5,6));

//Set

const nums1 = new Set([10,20,30,40,50,10,20,30,40,50]);
nums1.add(60);
console.log(nums1.has(10))
console.log(nums1);

try{
    setTimeout(sayHello,2000);
}
catch(e){
    console.log({name :e.name,message :e.message, stack : e.stack});
}

function sayHello(){
    console.log('Hello Bye');
}

// reverse number

function reverseNumber(num){
    let rem = 0;
    let rev = 0;

    while(num > 0){
      rem =  num % 10;
      rev = rev * 10 + rem;
      num = parseInt(num /10);
    }
    console.log(rev);
}

reverseNumber(1234);

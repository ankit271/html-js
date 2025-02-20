const names = [
    {
        name: 'Ankit',
        age: 28,
        gender: 'Male',
        rollNo : 101
    },
    {
        name: 'Sumit',
        age: 25,
        gender: 'Male',
        rollNo : 102
    },
    {
        name: 'Ajay',
        age: 27,
        gender: 'Male',
        rollNo : 103
    }
]

let Student = {
    name: 'Ankit',
    age: 28,
    address: {
        city: 'Delhi',
        pincode: 110001
    },
    liveIn : function(){
        return this.name + ' lives in ' + this.address.city;
    }    
}

let Student2 = {
    rollNo: 101,
}

// const updateData = Object.assign( Student, Student2)
// console.log(updateData);

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person('John');
const john1 = new Person('John1');

// john1.greet(); // Outputs: Hello, my name is John

// console.log(john);


async function log() {
    console.log('Hello');     
}


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}

const person = new Person('John', 30);
try {
    person.getAge();
} catch (error) {
    console.log({name : error.name, message : error.message}); // error
}
finally{
    person = null;
    console.log('Person object is destroyed');
}



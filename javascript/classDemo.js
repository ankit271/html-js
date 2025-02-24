
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;       
    }

    read(){
        console.log(`${this.firstName} ${this.lastName} is reading a book.`);
    }
}

class Teacher extends Student{

    constructor(firstName, lastName, subject){ 
        super(firstName, lastName);
        this.subject = subject;
    }
    
    teach(){
        console.log(`The teacher is teaching ${this.subject} to ${this.firstName} ${this.lastName}.`);
    }
}

let teacher = new Teacher('John', 'Doe','Math');
teacher.teach();
teacher.read();


class Student{

    constructor(name){
        this.name = name;
    
    }
    read(){
        console.log(`${ this.name} is reading a book.`);        
    }

    write(){
        console.log(`${ this.name} is writing a book.`);        
    }

    walking(){
        console.log(`${ this.name} is walking .`);        
    }

    think(){
        console.log(`${ this.name} is thinking .`);        
    }
}

let kajal = new Student('Ankit');
kajal.write();
kajal.read();
kajal.think();
kajal.walking();


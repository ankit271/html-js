
class Car {
    
    constructor(name) {        
        this.carName = name;
    } 
    
    stop(){
        console.log(`${this.carName} stopped`);
    }
    
}

class Audi extends Car {
    
    constructor(name) {
        super(name);
    }
    
    start() {
        console.log(`${this.carName} started with remote`);
    }

    static longDrive(){
        console.log('Goa Trip');
    }
}

let car = new Audi('Audi');

try {
    car.start()    
} catch (error) {
    console.log({name: error.name, message: error.message});        
}
Audi.longDrive();
try {
    car.stop()    
} catch (error) {
    console.log({name: error.name, message: error.message});        
}

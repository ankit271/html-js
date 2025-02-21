
class Car {

    constructor(name){
        this.carName = name; // property
    }

    // method
    start(){
        console.log(`${this.carName} started`);
    }
}

let car = new Car('Jaugar');
console.log(car.carName);

car.start();
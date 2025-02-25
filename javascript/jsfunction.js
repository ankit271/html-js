/*

The call() method takes arguments separately.
The apply() method takes arguments as an array.

*/

// const person = {
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }

const person = {    
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
     return this.firstName + " " + this.lastName ;
  }
}

let person1 = {    
   
}

//const fulllNamePerson1 = person.fullName.call(person1);

//const fulllNamePerson1 = person.fullName.apply(person1,['Bhadohi','India']);
// const fulllNamePerson1 = person.fullName.call(person1,'Bhadohi','India');
//let fulllNamePerson1 = person.fullName.bind(person1)
person1 = person
//console.log(fulllNamePerson1());
console.log(person1);

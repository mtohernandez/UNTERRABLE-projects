'use strict';

// const Person = function(name, birthYear){
//   this.name = name;
//   this.birthYear = birthYear;

//   // This is not a good practice because it will create a new function for each object
//   // this.calcAge = function(){
//   //   console.log(2037 - this.birthYear);
//   // }
// }

// const jonas = new Person('Jonas', 23);

// console.log(jonas);

// // This can not be seen in the Person object but can still be accessed because 
// // of prototypal inheritance
// Person.prototype.calcAge = function(){
//   console.log(2037 - this.birthYear);
// }

// console.log(jonas);

// const Car = function(make, speed){
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function(){
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// Car.prototype.brake = function(){
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car2.accelerate();
// car2.accelerate();

// // ES6 Classes (They are just syntactic sugar for constructor functions)
// class Person {
//   constructor(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // This function is served to the prototype of the object not the object itself
//   calcAge(){
//     console.log(2037 - this.birthYear);
//   }
// }

// const jessica = new Person('Jessica', 1996); // The new keyword creates a new empty object
// jessica.calcAge();

const Person = function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
}


const Student = function(firstName, birthYear, course){
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2000, 'Computer Science');
mike.introduce();

// Inheritance between classes with ES6
// Honestly this is the most undestandable way of doing it

class PersonCl {
  constructor(fullName, birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course){
    super(fullName, birthYear); // This calls the constructor of the parent class (always needs to happen first)
    this.course = course;
  }

  introduce(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const PersonProto = {
  calcAge(){
    console.log(2037 - this.birthYear);
  }
}
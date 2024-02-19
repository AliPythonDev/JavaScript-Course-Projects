// Classes in JS => Class is a program-code template for creating objects. These objects will have some state (variables) & some behavior (functions) inside it.
// class MyClass{
//   constructor(){...}
//   MyMethod(){...}
// }
// let myObj = new MyClass();

// Constructor() method is:
// automatically invoked by new
// initializes object

// const student = {
//   fullName: "Ali Nawaz",
//   marks: 97.9,
//   printMarks: function () {
//     console.log("Marks = ", this.marks);
//   },
// };
// const employee = {
//   calcTax() {
//     console.log("Tax Rate is 10%");
//   },
//   calcTax2: function () {
//     console.log("Tax Rate is 10%");
//   },
// };
// const karanArjun = {
//   salary: 5000,
// };
// karanArjun.__proto__ = employee;
// Prototypes in JS => A JavaScript object is an entity having state and behavior (properties and method.)
// JS objects have a special property called prototype.
// We can set prototype using __proto__
// => If object & prototype have same PaymentMethodChangeEvent, object's method will be used

/*
class ToyotaCar {
  start() {
    console.log("Started");
  }
  stop() {
    console.log("Stopped");
  }
  setBrand(brand) {
    this.brand = brand;
  }
}
let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus");  */

/*
class ToyotaCar {
  constructor(brand, mileage) {
    console.log("Creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("Started");
  }
  stop() {
    console.log("Stopped");
  }
  setBrand(brand) {
    this.brand = brand;
  }
}
let fortuner = new ToyotaCar("fortuner", 10); // Constructor
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 12); // Constructor
lexus.setBrand("lexus");  */

// Inheritance in JS => Inheritance is passing down properties & methods from parent class to child class
// class Parent {}
// class Child extends Parent {}
// If Child & Parent have same method, child's method will be used. [Method Overriding]
/*
class Parent {
  hey() {
    console.log("Hey");
  }
}
class Child extends Parent {}
let obj = new Child();  */
/*
class Person {
  eat() {
    console.log("Eat");
  }
  sleep() {
    console.log("Sleep");
  }
  work() {
    console.log("Do Nothing");
  }
}
class Engineer extends Person {
  work() {
    console.log("Solve Problems, build something");
  }
}
class Doctor extends Person {
  work() {
    console.log("Treat Patients");
  }
}
let AliObj = new Engineer();  */

// super Keyword => The super keyword is used to call the constructor of its parent class to access the parent's properties and methods
// super(args) // calls Parent's constructor
// super.parentMethod(args)
/*
class Person {
  constructor(name) {
    //  console.log("Enter Parent Constructor")
    this.species = "Homo Sapiens";
    this.name = name;
  }
  eat() {
    console.log("Eat");
  }
}
class Engineer extends Person {
  constructor(name) {
    //  console.log("Enter Child Constructor");
    super(name); // To invoke parent class contructor
    //  his.branch = branch;
    //  console.log("Exit Child Constructor");
  }
  work() {
    super.eat();
    console.log("Solve Problems, build something");
  }
}
let engObj = new Engineer("Chemical Engineer"); */

// P1: You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.
/*
let DATA = "Secret Information";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("Data = ", DATA);
  }
}
let student1 = new User("Student-I", "abc@gmail.com");
let student2 = new User("Student-II", "efg@gmail.com");
let teacher1 = new User("Teacher-I", "ijk@gmail.com");  */

// P2: Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.
let DATA = "Secret Information";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("Data = ", DATA);
  }
}
class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "Some New Value";
  }
}
let student1 = new User("Student-I", "abc@gmail.com");
let student2 = new User("Student-II", "efg@gmail.com");
let teacher1 = new User("Teacher-I", "ijk@gmail.com");
let admin1 = new User("Admin", "lmn@gmail.com");

// Error Handling => try-catch
/*
try{
  ...normal code
} catch (err){ // err is error object
  ...handling error
} */
let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a + b = ", a + b);
try {
  console.log("a + b = ", a + c); // ReferenceError: c is not defined
} catch (err) {
  console.log(err);
}
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);

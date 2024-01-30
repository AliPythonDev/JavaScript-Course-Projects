// Arithmetic Operators
// let a = 5;
// let b = 2;
/*
console.log("a = ", a, "& b = ", b)
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a * b = ", a * b)
console.log("a / b = ", a / b)
console.log("a % b = ", a % b) //Modulus
console.log("a ** b = ", a ** b) // Exponenciation (5^2) */ /*
console.log("Increments are:")
console.log("a =",a, "& b =",b)
console.log("a++ =", a++, "& b++ =", b++) // Post-Increment
console.log("a =", a, "& b =", b)
console.log("++a =", ++a, "& ++b =", ++b) // Pre-Increment
console.log("Deccrements are:")
console.log("a =",a, "& b =",b)
console.log("a-- =", a--, "& b-- =", b--) // Post-Increment
console.log("a =", a, "& b =", b)
console.log("--a =", --a, "& --b =", --b) // Pre-Increment
a += 4; // a = a + 4
console.log("a =", a)
a -= 4; // a = a - 4
console.log("a =", a)
a *= 4; // a = a * 4
console.log("a =", a)
a /= 4; // a = a / 4
console.log("a =", a)
a %= 4; // a = a % 4
console.log("a =", a)
a **= 4; // a = a ** 4
console.log("a =", a) */
// Comparison Operator
// console.log("5 == 2", a == b)
// console.log("5 != 2", a != b)
/*
let a = 5;
let b = "5";
console.log("5 == 5", a == b)
// Equal to & Type === , Not Equal to & Type !==
console.log("5 === 5", a ===b)
console.log("5 !== 5", a !==b)
// Comparison Operator
console.log("5 >= 5", a >= b)
console.log("5 <= 5", a <= b) */
// Logical Operators
/*
let a = 6;
let b = 5;
let cond1 = a > b; //True
let cond2 = a === 6; //True
console.log("Condition 1 && Condition 2 = ", cond1 && cond2)
// console.log("Condition 1 && Condition 2 = ", a > b && a === 6)
console.log("Condition 1 || Condition 2 = ", cond1 || cond2)
console.log("Condition 1 ! Condition 2 = ",  !(a < b))  */
// // Conditional Statements
// let age = 25;
// if (age > 18){
//     console.log("Eligible for Vote");
// }
/*
let mode = "dar";
let color;
if (mode === "dark"){
    color = "black";
}
else if (mode === "white") {
    color = "white"
}
else {
    color = "Blue"
}
console.log(color)
let num = 10;
if (num % 2 === 0){
    console.log(num, " is even number")
}
else {
    console.log(num, " is odd number")
} */
// Ternary Operators
// condition ? True Output : False Output -> a ? b : c
/*
let age = 6;
let result = age > 18 ? "Adult" : "Not Adult";
console.log(result);
*/
// P1: Get user to input a number using prompt("Enter a Number: "). Check if the number is a multiple of 5 or not.
/*
let userInput = prompt("Enter a Number: ")
if (userInput % 5 === 0){
    console.log(userInput, "is multple of 5")
}
else {
    console.log(userInput, "is not multple of 5")
} */
// P2: Write a code which can give grades to students according to their scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
/*
let score = prompt("Enter a Percentage of a Student:")
if (score >= 90 && score <= 100){
    console.log("The student got A Grade.")
}
else if (score >= 70 && score <= 89){
    console.log("The student got B Grade.")
}
else if (score >= 60 && score <= 69){
    console.log("The student got C Grade.")
}
else if (score >= 50 && score <= 59){
    console.log("The student got D Grade.")
}
else {
    console.log("The student got F Grade.")
} */
let score = prompt("Enter a Percentage of a Student:");
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "F";
}
console.log("According to your scores, your Grade is:", grade);

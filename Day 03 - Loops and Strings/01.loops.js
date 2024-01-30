// 03. Loops and Strings
/*
for (let i = 1; i <= 5; i++){
    console.log("ALi Nawaz", i);
} */
// Calculate sum 1 to n using for loop
/*
let sum = 0;
for(let i = 1; i <= 5; i++){
    sum += i;
}
console.log("The total sum is ",sum) */
// While loop
/*
let i = 1;
while (i <= 5){
    console.log("i =", i)
    i++;
}
*/
// do While loop
/*
let i = 20;
do {
    console.log("i = ", i);
    i++;
} while (i < 10); */
// for-of loop
// for (let var of strVal){
//     do some work
// }
/*
let str = "Ali Nawaz";
let length = 0;
for(let i of str){
    console.log("i =", i)
    length ++;
}
console.log(length) */
// for-in loop
// for (let key of objVar){
//     do some work
// }
/*
let student ={
    name: "Ali Nawaz",
    age: 20,
    cgpa: 7.5,
    isPass: true
};
for (let key in student){
    console.log('key =', key, "Value =", student[key])
} */
// P1: Print all even numbers from 0 to 100.
/*
for (let num = 0; num <= 100; num++){
    if (num % 2 === 0) {
        console.log("Num =", num)
    }
} */
// For odd num just write if (i % 2 !== 0)
// P2: Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gameNum = 25;
let userNum = prompt("Guess a number:");
while (userNum != gameNum) {
  userNum = prompt("You entered wrong number, Guess again");
}
console.log("Congrats mate! you guessed it right.");

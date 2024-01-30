// Functions in JS -> Block of code that performs a specific task, can be invoked whenever needed.
/*
function myFunction(){
    console.log("Ali Nawaz")
    console.log("JS Dev")
}
myFunction();   */
/*
function myFunction1(msg){ // Parameter
    console.log(msg)
}
console.log("I Love JS") // Argument
//NaN -> Not a Number
function sum1(a, b){
    console.log(a + b)
}
sum1(5, 10) // Function Parameters are like Local Variables they can't accessed outside the function. They have block scope
function sum(x, y){
    s = x + y
    return s;
}
let value = sum(15, 10)
console.log(value)
*/
// Arrow Function => Compact way of writing a function | These are a part of Modern JavaScript
// Sum Function
/*
function sum(a, b){
    return a + b;
}
// Multiplication Function
function mul(a, b){
    return a * b;
}
const functionName = (parameter1, parameter2) => {
    // do some work
}
const sum = (a, b) => {
    return a + b;
}
 */
/*
const mul = (a, b) => {
    // mul is a function variable | ismy function store hai :D | we simply use this when we have little tasks (Chooty kaam)
    // console.log(a * b);
    return a * b;
}   */
//const printHey = () => console.log("Hey");
// P1: Create a function using the "function" keyword that takes the string as an argument & returns the number of vowels in the string.
/*
function countVowels(str){
    let count = 0;
    // ApnaCollege => count = 5
    for(const char of str){
        if (char === "a" || char === "e" || char === "i" || char ===  "o" || char === "u") {
            count++;
        }
    }
    console.log(`Total Vowels in the given string are ${count}`)
}   */
// P2: Create an arrow function to perform the same task.
/*
const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if(char === "a" || char === "e" || char === "i" || char ===  "o" || char === "u") {
            count++;
        }
    }
     return count;
}   */
/*
forEach Loop in Arrays --> Higher order functions/methods
arr.forEach(callBackFunction) => Here it is a function to execute for each element in the array.
    A callback is a function passed as an argument to another function.
arr.forEach((val) =>{
    console.log(val);
})  */
/*
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val){
    console.log(val)
})
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach((val) => {
    console.log(val)
})
let arrCities = ["Grw", "Isl", "Lhr"];
arrCities.forEach((val, index, array) => {
    console.log(val.toUpperCase(), index, array)
})  */
// P3: For a given array of numbers, print the square of each value using the forEach loop.
/*
let nums = [1, 2, 3, 4, 5];
nums.forEach((num) => {
    console.log(num**2)
})  */
// Another method of using forEach loop
/*
let nums = [1, 2, 3, 4, 5];
let calcSquare = (num) => {
    console.log(num * num);
};
nums.forEach(calcSquare);   */
// Some more Array Methods ==> Map
// Creates a new array with the results of some operation. The value its callback returns are used to form new array. arr.map(callbackFunction(Value, Index, Array))
// let newArr = arr.map((val) => {
// return val * 2;
// })
//let nums = [1, 2, 3, 4, 5];
// nums.map((val) => {
//     console.log(val);
// });
/*
let newArr = nums.map((val) => {
    return val ** 2;
})
console.log(newArr) */
// For each is used when we have to do normal calculation, Map is used when we need to create a new array using values.
// Filter => Creates a new array of elements that give true for a condition/filter. Eg: All even elements.
// let newArr = arr.filter( (val) => {
// return val % 2 == 0;
// })
/*
let nums = [1, 2, 3, 4, 5, 6, 7];
let evenArr = nums.filter((val) =>{
    return val % 2 === 0;
})
console.log(evenArr)    */ // This is a copy, Original value will not changed
// Reduce => Performs some operations & reduces the array to a single value. It returns that single value.
// Like there are multiple values in input but one should be in output, e.g sum, average
/*
let nums = [1, 2, 3, 4];
const output = nums.reduce((res, curr) =>{
    return res + curr;
})
console.log(output)
// To find the greater number
const greaterOutput = nums.reduce((res, curr) =>{
    return res > curr? res : curr;
})
console.log(greaterOutput)   */
// P4: We are given array of marks of students. Filter out marks of students that scored 90+.
/*
let marks = [97, 64, 32, 49, 99, 96, 86];
let topper = marks.filter((val) => {
    return val > 90;
})
console.log(topper) */
// P5: Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.
//let endArr = prompt("Enter a Number:");
let endArr = 5;
let arr = [];
for (let i = 1; i <= endArr; i++) {
  arr[i - 1] = i;
  // arr[0] = 1, arr[1] = 2, arr[2] = 3. arr[3] = 4, arr[4] = 5
}
console.log(arr);
let sum = arr.reduce((res, curr) => {
  // 1,2,3,4 --> 1+2 => 3+3 => 6+4 => 10
  return res + curr;
});
console.log(`The total sum of ${endArr} is ${sum}`);
let factorial = arr.reduce((res, curr) => {
  return res * curr;
});
console.log(`The total Product of ${endArr} is ${factorial}`);

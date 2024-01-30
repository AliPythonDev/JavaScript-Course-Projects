/* fullName = "Tony Stark"
age = 24;
price = 99.99;
a = null;
y = undefined;
isFollow = true
console.log(y)
console.log(isFollow)
fullName = 25
console.log(fullName)   */
/*
Variable Rules
• Variable names are case sensitive; "a" & "A" is different.
• Only letters, digits, underscore(_) and $ is allowed. (not even space) 
• Only a letter, underscore(_) or $ should be ist character.
• Reserved words cannot be variable names.
fullName → Camel Case
full_name → snakecase
full-name → kelabcase
FullName → Pascal Cose

let, const & var
var: Variable can be re-declared & updated. A global scope variable.
let : Variable cannot be re-declared but can be updated. A block scope variable.
const: Variable cannot be re-declared or updated. A block scope variable. */
/*
let age = 24;
age = 59;
age = 86;
console.log(age)

let x = BigInt("123");
console.log(typeof x)
*/
/*
Data Types in JS
Number, String, Boolean, Undefined, Null, BigInt, Symbol
key : value
Students
→ name | string
→ age | number
→ marks | numbes
→ ispass | boolean */
/*
const student = {
    fullName: "Ali Nawaz",
    age: 20,
    cgpa: 3.5,
    isPass: true
};
console.log(student)
console.log(student.age)
console.log(student["age"])
student["age"] = student["age"] + 1;
console.log(student["age"]);

student.fullName = "Ali JS Dev"
console.log(student.fullName)   */

// P: Create a const object called "githubProfile" to store information.
const githubProfile = {
    username: "@AliPythonDev",
    isFollow: false,
    followers: 10,
    following: 68
};
console.log(typeof githubProfile["username"]);
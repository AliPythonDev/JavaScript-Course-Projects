// Create String
//let str = "ALi Nawaz";
// String Length
//str.length()
// String Indices
//str[0], str[1], str[2]
// Template literals -> A way to have embedded expressions in strings | kinda special type of string
// let specialString = `This is a template literal`;
// console.log(specialString)
// console.log(typeof specialString)
// let obj = {
//     item: "pen",
//     cost: 10,
// };
// console.log("The cost of", obj.item, "is", obj.cost, "rupees")
// let output = `The cost of ${obj.item} is ${obj.cost} ruppees`
// console.log(output)
// 10 becomes string in Template Literals. As you can see it's not highlighted when we used with literals.
// String Interpolation -> To create strings by doing substitution of placeholders
// `string text ${expression} string text `
//Escape Characters
// console.log("Ali \n Nawaz")
// console.log("Ali \t Nawaz")
// String Methods -> These are build-in functions to manipulate a string
// str.toUpperCase()
// str.toLowerCase()
// str.trim() // Remove white spaces
// let str = "Ali Nawaz"
// let capStr = str.toLocaleUpperCase()
// let lowStr = str.toLocaleLowerCase()
// console.log(`The Upper String is ${capStr} and Lower String is ${lowStr}`)
// Strings are Immutable in JS -> It can't be changed rather new string will be created
// let strTrim = "    Ali    Nawaz        "
// console.log(strTrim.trim());
// Starting and Ending spaces are Trimmed but between weren't
// console.log("    Ali    Nawaz        ")
// str.slice(start, end?)  // It returns part of string
// str1.concat(str2) // It joins str2 with str1
// str.replace(searchVal, newVal)
// str.charAt(idx)
// in slicing we pass starting and ending value of a string but Ending value is non-exclusive.
// let str = "012345"
// console.log(str.slice(2, 4)) // Keep in mind ending index is optional | If you don't mention it then it will keep printing till the end.
// Concatenation
// let str1 = "Ali"
// let str2 = "Nawaz"
// console.log(str1.concat(str2))
// console.log(str1 + str2 + 123) // Concatenation can be done by using + between them. Also numbers can be add at the end
// console.log(str1.replace("Ali", "AliPythonDev"))
// let str = "heyoyoyo"
// console.log(str.replace("yo", "ha")) // Changing will be done with first coming like Queue.
// console.log(str.replaceAll("yo", "ha")) // All containing yo will be changed with ha
// To find out the character at particular string we will use str.charAt(idx)
//console.log(str.charAt(0))
// To replace words in string using Index
//let str = "I-Love-JS"
//str[0] = "ME";
//console.log(str)
// It will remain the same and doesn't change, why? because we didn't used replace method so in order to replace
//str = str.replace("I", "Me")
//console.log(str)
//console.log(str.replace("I", "Me"))
// P1: Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the full name length.
// eg: username = "shradhakhapra" , username should be "@shradhakhapra13"
let fullName = prompt("Enter your Full Name:");
let userName = "@" + fullName + userName.length;
console.log(userName);

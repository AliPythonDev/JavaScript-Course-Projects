// Arrays -> Collection of items
//let heroes = ["IronMan", "Hulk", "Thor", "Batman"];
//let marks = [96, 75, 48, 83, 66];
//let info = ["AliNawaz", 7987, "PK"]
//console.log(info)
// KEY is 0 and Value is AliNawaz similarly key is 1 and value is 7987
//console.log(info.length)
// Property provides value while method do some work. So above mentioned length is just a value. Array khud Object hota hai.
//console.log(typeof info)
// Indices -> To print given index value we will use info[index number]
// console.log(info[2])
// To change the value at given index we will use
// info[2] = "Pakistan"
// console.log(info[2])
// It is not possible with strings because those are immutable in JavaScript whereas Arrays are mutable
// Looping over an Array
//let marks = [96, 75, 48, 83, 66];
// for(let i = 0; i < marks.length; i++){
//     console.log(marks[i]);
// }
/*
i = 0;
while (i <= marks.length - 1){
    console.log(marks[i]);
    i++
}
let heroes = ["IronMan", "Hulk", "Thor", "Batman"];
for(let hero of heroes){
    console.log(hero);
    console.log(hero.toLowerCase());
    console.log(hero.toUpperCase());
}   */
// P1: For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class.
/*
let marks = [85, 97, 44, 37, 76, 60];
sum = 0;
// for(let i = 0; i < marks.length; i++){
//     sum += marks[i];
// }
for(let value of marks){
    //console.log(value)
    sum += value;
}
let avg = sum/marks.length;
console.log(`The Average Marks of the class = ${avg}`)  */
// P2: For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
/*
let items = [250, 645, 300, 900, 50];
for(let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
    console.log("Prices after discount are", items[i])
}   */
/*
let i = 0;
for(let val of items){
//    console.log(`Value at index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`Value after offer = ${items[i]}`)
    i++;
}   */
// Push() -> Add to end
// Pop() -> Delete from end & return
// toString() -> Converts Array to String
/*
let foodItems = ["Potato", "Apple", "Litchi", "Tomato"];
console.log(foodItems)
foodItems.push("Chips", "Burger", "Paneer")
console.log(foodItems)
// To print which item was deleted
let deletedItem = foodItems.pop();
console.log(foodItems)
console.log(`Deleted Item is ${deletedItem}`)   */
// To Converts Array into String we will use toString() method
/*
let foodItems = ["Potato", "Apple", "Litchi", "Tomato"];
console.log(foodItems)
console.log(foodItems.toString()) // It doesn't change in original array
console.log(foodItems)  */
// concat() -> joins multiple arrays & returns result
// unshift() -> add to start --> Works like push()
// shift() -> delete from start & return --> Works like pop()
/*
let marvelHeroes = ["Spiderman", "Thor", "Iron Man"]
marvelHeroes.unshift("Antman")
let dcHeroes = ["Batman", "Superman"]
let hollywoodHeroes = ["Arnold Schawargnezer", "Jason Statham"]
let val = hollywoodHeroes.shift()
console.log(`Deleted Value is ${val}`)
let heroes = marvelHeroes.concat(dcHeroes, hollywoodHeroes)
console.log(heroes) */
// We can pass multiple in concat
// Slice(): returns the piece of the array --> slice(startIndex, endIndex) {It doesn't change in original array}
//Splice(): change original array (add, remove, replace) --> splice(startIndex, delCount, newElement1...)
/*
let marvelHeroes = ["Spiderman", "Thor", "Iron Man", "AntMan", "Dr.Strange"];
console.log(marvelHeroes.slice(1, 4))
console.log(`Original Array is ${marvelHeroes}`)
// Sometimes we use slice method to create copy of an array
console.log(marvelHeroes.splice(1, 4))
console.log(`Original Array is ${marvelHeroes}`)
console.log(marvelHeroes.splice(1, 0, "BlackSpiderman"))
console.log(`Original Array is ${marvelHeroes}`)    */
/*
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 2, 101, 102)
arr.splice(3, 0, 101.5)
//now delete 5 from it
arr.splice(5, 1)
console.log(arr)
//Replace 6 into 103
arr.splice(5, 1, 103)
console.log(arr)
arr.splice(4) // It will return values starting from given (4) index till end. Originally all are deleted which this function returned xD
arr.splice()    */
// Nothing will happen because we didn't passed any value in between
// P3: Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber and Add Ola in its place
// c. Add Amazon at the end
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// a. Remove the first company from the array
// For removing we have two methods pop and shift -> pop removes from the end whereas, shift removes from the beginning
companies.shift();
console.log(`Removing first company from the array now it's ${companies}`);
companies.splice(1, 1, "Ola");
console.log(
  `After Removing Uber and add Ola from the array now it's ${companies}`
);
// For adding we have two methods push and unshift -> push adds from the end whereas, unshift adds from the beginning
companies.push("Amazon");
console.log(`Adding Amazon at the end ${companies}`);

/*
DOM Manipulation
Attributes
getAttribute(attr) // to get the attribute value
setAttribute(attr, value) // to set the attribute val th
StylePropertyMap
node.style  */
/*
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);  */

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

//let div = document.querySelector("div");
//CSS vs JS
//1. color => color
//2. background-color => backgroundColor
//3. font-size => fontsize
//div.style.backgroundColor = "green";
//div.style.backgroundColor = "purple";

//div.style.fontSize = "20px";

//div.innerText = "Heyyy"; //To change inner text inside div

//div.style.visibility = "hidden";
/*
Insert Elements     let el = document.createElement("div")
node.append(el) //adds at the end of node (inside)
node.prepend(el) //adds at the start of node (inside)
node.before(el) //adds before the node (outside)
node.after(el) //adds after the node (outside)

Delete Element
node.remove() //removes the node
*/

//It's a two step i) Create ii) Add
// let newButton = document.createElement("button");
// newButton.innerText = "Click me";
// console.log(newButton);

// let div = document.querySelector("div");
// div.prepend(newButton); //To get button at the top inside div

// let div = document.querySelector("div");
// div.append(newButton); //To get button at the bottom inside div

// let div = document.querySelector("div");
// div.before(newButton); //To get button at the top outside div

// let div = document.querySelector("div");
// div.after(newButton); //To get button at the bottom outside div

// To add after paragraph simply write
/*
let p = document.querySelector("p");
p.after(newButton); //To get button at the bottom after paragraph

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hey, I am JS Dev</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove(); //To delete Paragraph

newHeading.remove(); //To delete Heading
*/

// Homework -> Find out the exact usage of aooendChild() & removeChild()

// P1: Create a new button element. Give it a text "click me", background color of red & text color of white.
// Insert the button as the first element inside the body tag
let newBtn = document.createElement("button");
newBtn.innerText = "click me";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

// P2: Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and and try to append this class to the <p> element
// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using classList

let para = document.querySelector("p");

para.classList;
para.classList.add("newClass"); //To add new class
//para.classList.remove("newClass"); //To remove new class

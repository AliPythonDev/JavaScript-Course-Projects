/*
//console.dir(document);
// console.dir(document.body);
// console.dir(document.head);
// console.dir(document.body.childNodes[1]);
// console.dir((document.body.style.backgroundColor = "green"));
//console.log(document.body);
//document.body.childNodes[3].innerText = "ES6";
// Selecting with id => document.getElementById("myid");
let heading = document.getElementById("heading");
console.dir(heading);
let myID = document.getElementById("myID");
console.dir(myID);
// Selecting with class => document.getElementsByClassName("myClass");
let heading2 = document.getElementsByClassName("heading2");
console.dir(heading2);
console.log(heading2);
// Selecting with tag => document.getElementByTagName("p");
let paras = document.getElementsByTagName("p");
console.dir(paras);
// Query Selector
//document.querySelector("myId/myClass/tag")
//returns first element
//document.querySelectorAll("myId/myClass/tag")
//returns a NodeList
//let firstEl = document.querySelector("p"); //When we need 1st element we will use this.
//console.dir(firstEl);
let allEl = document.querySelectorAll("p"); //When we need all the elements we will use this.
console.dir(allEl);
// For Example => To access button i will use below command
let firstEl = document.querySelector("#myID"); //When we need 1st element we will use this.
//console.dir(firstEl);
// DOM Manipulation properties => get, set, update/change
// tagName: returns tag for element nodes.
//firstEl.tagName;
// innerText: returns the text content of the element and all its children.
// innerHTML: returns the plain text or HTML contents in the element.
// textContent: returns textual content even for hidden elements.
//div.innerText on Console (Pure Text comes up)
//div.innerHTML on Console (HTML content also comes up {final comes text within HTML tags })
// div.innerText = "abcd" It changed all the text which is inside div
let headingh1 = document.querySelector("h1");
headingh1.innerText = "NewHeading";
headingh1.innerHTML = "<i>NewHeading</i>";
// Benefits of inner html are we can write tags between them
// heading.textContent // It also shows hidden elements
*/
// P1: Create a h2 heading element with text - "Hello Javascript" Append "from Apna College students" to this text using JS.
/* let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Ali Nawaz" */
// P2: Create 3 divs with common class name - "box". Access them and add some unique on them.
let divs = document.querySelectorAll(".box");
console.log(divs);
// To print separately you can write console.log(divs[0])
// To change values inside divs we will use
// Easy Way
/*
divs[0].innerText = "New Unique Value 1"
divs[1].innerText = "New Unique Value 2"
divs[2].innerText = "New Unique Value 3"  */
let idx = 1;
for (let div of divs) {
  //console.log(div.innerText)
  div.innerText = `New Unique Value is ${idx}`;
  idx++;
}

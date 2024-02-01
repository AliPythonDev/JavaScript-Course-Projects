/* Events in JS
The change in the state of an object is known as an Event
Events are fired to notify code of "Interesting changes" that may affect code execution.

- Mouse events (click, double click, etc)
- Keyboard events (keypress, keyup, keydown)
- Form events (submit etc)
- Print events & many more  */
// Syntax -> node.event = () => { //handle here }
let bt1 = document.querySelector("#btn1");
bt1.onclick = () => {
  console.log("btn1 was clicked");
  let a = 25;
  a++;
  console.log(a);
};

// let div = document.querySelector("div");
// div.onmouseover = () => {
//   console.log("You are inside div");
// };
// JS Event Handling priority is high as compared with HTML inline event handling.
// If we write same event handling code twice inside js then it will overwrite and second one will be accessed.
bt1.onclick = () => {
  console.log("btn1 was clicked by me");
};
// Event Object -> It is a special object that has details about the event.
// All event handlers have access to the event object's properties and methods.
// Syntax -> node.event(e) => { //handle here } e.target, e.type, e.clientX, e.clientY
bt1.onclick = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};
// Similarly we can do the same with div
let div = document.querySelector("div");
div.onmouseover = (evnt) => {
  console.log(evnt);
  console.log(evnt.type);
  console.log(evnt.target);
  console.log(evnt.clientX, evnt.clientY);
};
// Event Listeners
// node.addEventListener(event, callback)
// node.removeEventListener(event, callback)
// Note: The callback reference should be same to remove
btn1.addEventListener("click", () => {
  console.log("button 1 was clicked - handler1");
});

btn1.addEventListener("click", () => {
  console.log("button 1 was clicked - handler2");
});

const handler3 = () => {
  console.log("button 1 was clicked - handler3");
};
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
  console.log("button 1 was clicked - handler4");
});

// btn1.addEventListener("click", (evt) => {
//   console.log("button 1 was clicked - handler2");
//   console.log(evt);
//   console.log(evt.type);
// });

// If i need to remove handler 3 i must pass it through the variable
btn1.removeEventListener("click", handler3);

// P1: Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let modeBtn = document.querySelector("#mode");
let currMode = "Light mode";
modeBtn.addEventListener("click", () => {
  if (currMode === "Light") {
    currMode = "Dark";
    document.querySelector("body").style.backgroundColor = "Black";
  } else {
    currMode = "Light";
    document.querySelector("body").style.backgroundColor = "White";
  }
  console.log(currMode);
});
// Toggle button
// We can also do the same thing using CSS

let modeBtn2 = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode2 = "Light mode";
modeBtn.addEventListener("click", () => {
  if (currMode2 === "Light") {
    currMode2 = "Dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode2 = "Light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode2);
});

// Practice Question: Perform an action related to mouse hover.

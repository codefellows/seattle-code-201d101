'use strict';

/*

EVENT HANDLING

- event is FIRED (or RAISED)
- code is TRIGGERED

Event typs:
- click
- submit (this what we will use today)
- onChange
- on page load
- on mouseover
- on key release

Event listener
- the code that is TRIGGERED when an event is FIRED

Bind
— bind or tether an event listener to the event

Event handlers
— the code that runs in response to the event


we will use
DOM Level 2 Event Handlers — don't use anything else!
— always put code related to events in your JavaScript!!!!!!!!!!!!

OLD WAYS DON'T DO THIS!!!!!!!!!!!!!!!!!

Old ways to do event handling (DO NOT DO THIS!)

- In the HTML: `<article onClick="handleClick">`

- In the JavaScript: `element.onEvent = functionName;`
Ex.: `button(document.getElementById('button')).onSubmit=handleEvent;`

*/



// —— 3 STEPS to Handle Events ——

// STEP 1 — window into the DOM
let myContainer = document.querySelector('#container');
console.log(myContainer);



// STEP 3 — declare the callback function

function handleClick(event) {
  console.log(event.target.id);

  let clickedElement = event.target.id;

  // window into the DOM (where our messages will go):
  let parentElement = document.getElementById('results');

  // create a message to render to the DOM:
  let para = document.createElement('p');
  para.textContent = `${clickedElement} was clicked`;
  parentElement.appendChild(para);

}



// STEP 2 — add the event listener
// do this at the bottom of your JavaScript file

// addEventListener takes 2 arguements
// -- the event type as a string (AKA in quotes) — event type must match the event list in JS
// -- a callback function — AKA the name of a function

myContainer.addEventListener('click', handleClick);

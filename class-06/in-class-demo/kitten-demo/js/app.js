'use strict';

// console.log('hi');


// I want to create elements in my JS that will go on my page
// DOM = Document Object Model
// DOM manipulation - writing code to change how the DOM displays

// window into the DOM - this is my foot in the door
// grab an element from the DOM
const profileContainer = document.getElementById('kittenProfiles');
console.log(profileContainer);


// declare jumper the cat object
let jumper = {
  name: 'Jumper',
  likes: ['cuddling', 'lazer pointer', 'catnip'],
  renderList: function(ul) {
    for (let i = 0; i < this.likes.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = this.likes[i];
      // console.log(listItem);
      ul.appendChild(listItem);
    }
  }
}



// to create and add element to the DOM
// 3 steps:

// 1. create an element
// declare a variable and then call the createElement method and pass it the name of the HTML tag we want to create (as a string, AKA in quotes)
let art = document.createElement('article');
//console.log(art);

// 2. maybe give it content

// 3. append it to the DOM
// find the parent and ad the element we created as a child.
// format:
// parent.appendChild(elementToAdd);
profileContainer.appendChild(art);


// 1. create an element
let headline = document.createElement('h3');
// 2. maybe give it content
headline.textContent = 'Jumper';
// 3. append it to the DOM
art.appendChild(headline);

// Add paragraph
let para = document.createElement('p');
para.textContent = 'Jumper the cat is available for adoption.';
art.appendChild(para);

// Add list
let ul = document.createElement('ul');
art.appendChild(ul);


// Add list items
// let listItem = document.createElement('li');
// listItem.textContent = `12pm: ${seattle.someArray[i]} cookies`;
jumper.renderList(ul);

// Add image
let image = document.createElement('img');
image.src = 'images/jumper.jpeg';
image.alt = 'Jumper is cute';
art.appendChild(image);

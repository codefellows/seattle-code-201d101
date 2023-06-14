'use strict';

// console.log('hi');

// GLOBAL VARIABLES

// I want to create elements in my JS that will go on my page
// DOM = Document Object Model
// DOM manipulation - writing code to change how the DOM displays

// window into the DOM - this is my foot in the door
// grab an element from the DOM
const profileContainer = document.getElementById('kittenProfiles');
// console.log(profileContainer);

// querySelector takes in as a string ANY CSS selector
const kittenTbody = document.querySelector('tbody');
// console.log(kittenTbody);
// const kittenThead = document.querySelector('thead');
// const kittenTfoot = document.querySelector('tfoot');


// GLOBAL CONSTRUCTOR FUNCTIONS

function Kitten(name, likes, about, src, alt) {
  this.name = name;
  this.likes = likes;
  this.about = about;
  this.src = src;
  this.alt = alt;
}

Kitten.prototype.renderList = function(ul) {
  for (let i = 0; i < this.likes.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = this.likes[i];
    // console.log(listItem);
    ul.appendChild(listItem);
  }
}

Kitten.prototype.render = function() {
    // Add article
    let art = document.createElement('article');
    profileContainer.appendChild(art);

    // Add h3
    let headline = document.createElement('h3');
    headline.textContent = this.name;
    art.appendChild(headline);

    // Add paragraph
    let para = document.createElement('p');
    para.textContent = this.about;
    art.appendChild(para);

    // Add list
    let ul = document.createElement('ul');
    art.appendChild(ul);

    // Add list items
    this.renderList(ul);

    // Add image
    let image = document.createElement('img');
    image.src = this.src;
    image.alt = this.alt;
    art.appendChild(image);

    // Add the table row
    this.renderTable();
}

Kitten.prototype.renderTable = function() {
  let row = document.createElement('tr');
  kittenTbody.appendChild(row);
  let nameCell = document.createElement('th');
  nameCell.textContent = this.name;
  row.appendChild(nameCell);
  for (let i = 0; i < this.likes.length; i++) {
    let data = document.createElement('td');
    data.textContent = this.likes[i];
    row.appendChild(data);
  }
}

// GLOBAL FUNCTION

function buildTableHead() {
  // code goes here
}

function renderAll() {
  for (let i = 0; i < kittenArray.length; i++) {
    kittenArray[i].render();
  }
}

// EXEUTABLE CODE

// Kitten(name, likes, about, src, alt)
let jumper = new Kitten(
  'Jumper',
  ['cuddling', 'lazer pointer', 'catnip'],
  'Jumper the cat is available for adoption.',
  'images/jumper.jpeg',
  'Jumper is cute'
);
let serena = new Kitten(
  'Serena',
  ['string', 'feathers', 'soft beds'],
  'Serena is a sweet kitty',
  'images/serena.jpeg',
  'adopt Serena'
);
let frankie = new Kitten(
  'Frankie',
  ['string', 'treats', 'naps'],
  'Frankie is adorable and available for adaption',
  'images/frankie.jpeg',
  'adopt Frankie'
)

// console.log(jumper);

let kittenArray = [ frankie, jumper, serena];

// frankie.render();
// jumper.render();
// serena.render();


renderAll();

/*

// declare jumper the cat object
let jumper = {
  name: 'Jumper',
  likes: ['cuddling', 'lazer pointer', 'catnip'],
  about: 'Jumper the cat is available for adoption.',
  src: 'images/jumper.jpeg',
  alt: 'Jumper is cute',
  renderList: function (ul) {
    for (let i = 0; i < this.likes.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = this.likes[i];
      // console.log(listItem);
      ul.appendChild(listItem);
    }
  },
  render: function () {
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
    headline.textContent = this.name;
    // 3. append it to the DOM
    art.appendChild(headline);

    // Add paragraph
    let para = document.createElement('p');
    para.textContent = this.about;
    art.appendChild(para);

    // Add list
    let ul = document.createElement('ul');
    art.appendChild(ul);


    // Add list items
    // let listItem = document.createElement('li');
    // listItem.textContent = `12pm: ${seattle.someArray[i]} cookies`;
    this.renderList(ul);

    // Add image
    let image = document.createElement('img');
    image.src = this.src;
    image.alt = this.alt;
    art.appendChild(image);
  }
}

jumper.render();

*/

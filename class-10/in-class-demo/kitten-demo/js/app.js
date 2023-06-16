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


// EVENTS

// STEP 1 — window into the DOM
let form = document.getElementById('form');

// STEP 3 — declare the callback function
function handleSubmit(event) {
  event.preventDefault()
  console.log(event.target.kittenName.value);
  console.log(parseInt(event.target.ageInMonths.value));

  let kittenName = event.target.kittenName.value;
  let kittenAge = parseInt(event.target.ageInMonths.value);
  let about = event.target.about.value;
  let image = event.target.imageURL.value;
  let imageAlt = event.target.imageAlt.value;
  let favorites = [
    event.target.fav1.value,
    event.target.fav2.value,
    event.target.fav3.value
  ];
  // Kitten(name, likes, about, src, alt)
  let newKitty = new Kitten(
    kittenName,
    favorites,
    about,
    image,
    imageAlt
  );
  console.log(newKitty);
  newKitty.render();
}

// STEP 2 — add the event listener
form.addEventListener('submit', handleSubmit);

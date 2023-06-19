'use strict';

/*

- there is a collection of goat photos
- the user will be presented them in 2s
    — two goat photos at a time
    - 2 different photos display
- the user votes on their fav goat by clicking on the photo
- 15 match ups per round (so 15 total votes)
- display the results of the vote
    - how many times a goat was voted for
    - how many times the user saw that goat in the match up


- global var of max number of rounds
— global var of number of rounds completed

- event listener - click event
— event handler
  — add to the the votes for the clicked goat
  - if number of rounds doesn't equal max number of rounds: envoke the function to render new goats
    - if max has been met: allow user to click on View Results
      - function: display the results

- goat constructor
  - image src
  - name
  - # of votes
  - # of views


- get goats to display randomly
  - put all the goats in an array
  - function: to randomly generate a number - use this number to pick a random goat off the array
    - confirm we don't generate the same goat twice
  — function to render the goats on the page (add to the # of views of those goats)





*/


// GLOBAL VARIABLES

let maxNumberOfRounds = 15;
let currentRoundNumber = 0;

let goatArr = [];

// DOM elements
let section = document.querySelector('section');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let button = document.querySelector('section + div');
let results = document.querySelector('ul');
// console.log(image1);




// GLOBAL CONSTRUCTORS

function Goat(name, fileExtension = 'jpg') {
  this.name = name; // this will also be the alt text of our image
  this.src = `images/${name}.${fileExtension}`;
  this.votes = 0;
  this.views = 0;
}

// GLOBAL FUNCTIONS

function selectRandomGoat() {
  // generate a random number betweeen 0 and goatArr.length
  return Math.floor(Math.random() * goatArr.length);
}

function renderGoats() {
  let goat1 = selectRandomGoat();
  let goat2 = selectRandomGoat();
  // console.log(goat1, goat2);
  // maybe consider using an array. is there a method that can tell if a value is already on an array. Google it
  while (goat1 === goat2) {
    goat2 = selectRandomGoat();
    // console.log(goat1, goat2);
  }
   console.log(goat1, goat2);

  image1.src = goatArr[goat1].src;
  image2.src = goatArr[goat2].src;
  image1.alt = goatArr[goat1].name;
  image2.alt = goatArr[goat2].name;
  goatArr[goat1].views++;
  goatArr[goat2].views++;
  // console.log(goatArr);
}

function handleGoatClick(event) {
  // console.log(event);
  currentRoundNumber++;
  let clickedGoat = event.target.alt;
  for (let i = 0; i < goatArr.length; i++) {
    if (clickedGoat === goatArr[i].name) {
      goatArr[i].votes++;
      break;
    }
  }
  // console.log(goatArr);
  // console.log(maxNumberOfRounds, currentRoundNumber);
  if (maxNumberOfRounds === currentRoundNumber) {
    // end game
    section.removeEventListener('click', handleGoatClick);
    button.addEventListener('click', renderResults);
    button.className = 'clicks-allowed';
  } else {
    renderGoats();
  }

}

function renderResults(){
  // use UL to render the name, views and votes for each goat
}

// EXECUTABLE CODE

let cruisin = new Goat('cruisin-goat', 'png');
let sweater = new Goat('sweater-goat');
let float = new Goat('float-your-goat');
let hand = new Goat('goat-out-of-hand');
let kissing = new Goat('kissing-goat');
let sassy = new Goat('sassy-goat');
let smile = new Goat('smiling-goat');

goatArr.push(sweater, cruisin, float, hand, kissing, sassy, smile);
// console.log(goatArr);

// console.log(goatArr[0].src);

renderGoats();

// EVENT LISTENERS

section.addEventListener('click', handleGoatClick);

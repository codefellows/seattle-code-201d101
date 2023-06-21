'use strict';

// DOM elements
let lightButton = document.getElementById('lightButton');
let darkButton = document.getElementById('darkButton');
let commentBox = document.getElementById('commentBox')
let body = document.body;

// settings to use with localstorage
// we will save this in localstorage whenever we change any of this data
let settings = {
  darkMode: false,
  comment: ''
}

function enterLightMode() {
  body.classList.remove('dark');
  body.classList.add('light');
  lightButton.setAttribute('checked', 'checked');
  settings.darkMode = false;

  // function that will update localStorage:
  saveSetting();
}

function enterDarkMode() {
  body.classList.remove('light');
  body.classList.add('dark');
  darkButton.setAttribute('checked', 'checked');
  settings.darkMode = true;

  // function that will update localStorage:
  saveSetting();
}

function saveSetting() {
  console.log(settings);

  // Pack it: turn out settings object into a string
  // so we can put it in localStorage
  let stringifiedData = JSON.stringify(settings);
  console.log(stringifiedData);

  // Put it in localStorage
  // declare a key (AKA a label), I'm calling my key "settings"
  localStorage.setItem('settings', stringifiedData);
}

// get any setting out of localStorage and apply them
function loadPageSettings() {
  // get our settings out of localStorage using the key
  // remember "settings" is our key
  let savedSettings = localStorage.getItem('settings');
  console.log(savedSettings);

  // did we even get data back?
  if (savedSettings) {
    console.log('true');

    // Unpack the data: turn it back into JavaScript object
    let parsedData = JSON.parse(savedSettings);
    console.log(parsedData);

    // update the global settings object with the data I extracted from LocalStorage
    settings = parsedData;
    console.log('settings after localStorage ', settings);

    // if there are saved settings we need to apply them
    if (settings.darkMode) {
      enterDarkMode();
    } else {
      enterLightMode
    }
    commentBox.value = settings.comment;
  }


}

// executable code

// when the page loads, check localStorage for any saved settings:
loadPageSettings();

// event listeners
lightButton.addEventListener('click', enterLightMode);
darkButton.addEventListener('click', enterDarkMode);




// instead of passing in our function by name, I'm declaring it inline
// we call this an anonymous function, because it doesn't have a name
commentBox.addEventListener('input', function() {
  // take the value inputed into the textarea and save it to our global settings
  settings.comment = commentBox.value;
  // update settings in localStorage:
  saveSetting()
});


/*
  // same as:

  let handleComment = function() {
    // take the value inputed into the textarea and save it to our global settings
    settings.comment = commentBox.value;
    // update settings in localStorage:
    saveSetting()
  }

  commentBox.addEventListener('input', handleComment)

*/

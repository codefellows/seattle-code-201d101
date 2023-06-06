'use strict';

// proof life
console.log('hi');

let doILikeStarWars = prompt('Do I like Star War? Yes or no?').toLowerCase();

// 
// =
// asigns a value
// ex.:
// let cat = 'Luke'
// cat now equals the value 'Luke'

// ===
// compares a value
// do these two things have the same value?
// cat === 'Luke'
// does cat have the value 'Luke'
// === will also compare data type
// let age = 2
// let candles = '2'
// Ex.:
// age == candles // will be true
// age === candles // will be false
// ONLY USE === in this class


// if user types in either 'yes' or 'y' this statement
// should evaluated to true
if (doILikeStarWars === 'yes' || doILikeStarWars === 'y') {
  console.log('Yes, I do like Star Wars');
} else if (doILikeStarWars === 'no' || doILikeStarWars === 'n') {
  console.log('That\'s incorrect');
} else {
  console.log('You need to answer with a yes or a no');
}

// Operators
/*

&& - the "logical and"
  If I have two conditions separated by an &&, both have to to be true in order for the entire statement to be evaluated as true

|| - the "logical or" (double pipe)
  if at least one condition is true, the entrie statement will be evaluated as true

! — the "logical not" ( often called "bang")
  reverse the value of any statement
  ex.:
  cat !== 'Luke' // does cat not equal luke?

  ex.:
  !booleanVarribale // is booleanVarriable false?

*/

'use strict';

function Drink(drinkType, milk, size) {
  this.drinkType = drinkType;
  this.milk = milk;
  this.size = size;
  this.report = function() {
    console.log(`This is a ${this.drinkType} with ${this.milk} milk`);
  }
}

function storeDrinks(drinkToStore) {
  let stringDrink = JSON.stringify(drinkToStore);
  localStorage.setItem('drink', stringDrink);
}

function getDrink() {
  let potentialDrinkFromLocalStorage = localStorage.getItem('drink');
  if (potentialDrinkFromLocalStorage) {
    let parsedDrink = JSON.parse(potentialDrinkFromLocalStorage);

    // turn this parsedDrink back into an instance of our Drink constructor
    // we call this reinstantiation

    console.log(parsedDrink.drinkType)

    // Drink(drinkType, milk, size)
    let reinstantiatedDrink = new Drink(
      parsedDrink.drinkType,
      parsedDrink.milk,
      parsedDrink.size
    )

    return reinstantiatedDrink;
  }
}

let myDrink = new Drink('tea', 'half and half', 'grande');
console.log(myDrink);
myDrink.report();

storeDrinks(myDrink);
let returnedDrinkFromLocalStorage = getDrink();
console.log(returnedDrinkFromLocalStorage);
returnedDrinkFromLocalStorage.report();

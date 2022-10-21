/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

const SMALL_PIZZA_DIAMETER = 13;
const LARGE_PIZZA_DIAMETER = 17;

const SMALL_PIZZA_COST = 16.99;
const LARGE_PIZZA_COST = 19.99;

const smallPizzaArea = Math.PI * ((SMALL_PIZZA_DIAMETER / 2)**2);
const largePizzaArea = Math.PI * ((SMALL_PIZZA_DIAMETER / 2)**2);


// 2. What is the cost per square inch of each pizza?

const smallCostPerSquareInch = SMALL_PIZZA_COST / smallPizzaArea;
const largeCostPerSquareInch = LARGE_PIZZA_COST / largePizzaArea;


// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const card = Math.ceil(Math.random() * 13);


// 4. Draw 3 cards and use Math to determine the highest
// card

let cards = [];

for (let i = 0; i < 3; i++) {
    let singleCard = Math.ceil(Math.random() * 13);
    cards.push(singleCard);
}

const highestCard = Math.max(...cards);


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = 'John';
const lastName = 'Doe';
const streetAddress = '123 Main Street';
const city = 'Seattle';
const state = 'WA';
const zipCode = '98195';


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const fullAddress = 
    `
    ${firstName} ${lastName}
    ${streetAddress}
    ${city}, ${state} ${zipCode}
    `;

const fullAddressArr = fullAddress.split(/[,\n\s]/);
const firstNameIndex = fullAddressArr.indexOf(`${firstName}`);
const firstNameExtract = fullAddressArr[firstNameIndex];


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 3, 1);

const middleDate = new Date((startDate.getTime() + endDate.getTime()) / 2);

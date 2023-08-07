'use strict';

/* 
let hasDriversLincense = false;
const passTest = true;

if (passTest) {
    hasDriversLincense = true;
}

if (hasDriversLincense) {
    console.log('I can drive :D');
}

//const interface = 'Audio';

function logger() {
    console.log('My name is Charlie');
}

logger();
logger(33);

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
console.log(calcAge1(1989));

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1989);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1989);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1989, 'Carlos'));
console.log(yearsUntilRetirement(1991, 'Bob'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

const result = fruitProcessor(2, 3);
console.log(result);
*/

// *DATA STRUCTURES*

// literal sintax
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]); // undefined
console.log(`friends.length = ${friends.length}`); // number of elements in the array
console.log(`Last element is: ${friends[friends.length - 1]}`);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Carlos';
const carlos = [firstName, 'Silva', 2037 - 1989, 'developer', friends];
console.log(carlos);
console.log(`carlos.length = ${carlos.length}`);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = new Array(1991, 1984, 2008, 2020, 2010, 2018);
console.log(calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1]));

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
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

// *ARRAYS*

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

// *BASIC ARRAY OPERATIONS*

// Adding elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLeangth = friends.push('Jay'); // add new element at the final of the array and returns the "new" length of the array
console.log(friends);
console.log(newLeangth);

friends.unshift('John'); // add new element at the beggining of the array and returns the new length
console.log(friends);

// Removing elements
const popped = friends.pop(); // removes the last element of the array and returns the removed element
console.log(`popped element: ${popped}`);
console.log(friends);

friends.shift(); // removes the first element of the array and returns the removed element
console.log(friends);

console.log(`friends.indexOf('Steven') = ${friends.indexOf('Steven')}`);
console.log(`friends.indexOf('Bob') = ${friends.indexOf('Bob')}`); // non existing element

friends.push(23);
console.log(friends.includes('Steven')); // verify if the element exist
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}

// *OBJECTS*

const carlosArray = [
    'Carlos',
    'Silva',
    2037 - 1989,
    'developer',
    ['Michael', 'Steven', 'Peter']
];

const carlos = {
    firstName: 'Carlos',
    lastName: 'Silva',
    age: 2037 - 1989,
    job: 'developer',
    friends: ['Aglae', 'Regina', 'Javier', 'Santi']
};
console.log(carlos);

console.log(carlos.lastName);
console.log(carlos['lastName']);

const nameKey = 'Name';
console.log(carlos['first' + nameKey]);
console.log(carlos['last' + nameKey]);

carlos.location = 'Mexico';
carlos['instagram'] = 'carsilva.s';
console.log(carlos);

//const interestedIn = prompt('What do you want to know about Carlos? Choose between firstName, lastName, age, job and friends');
const interestedIn = 'location';
console.log(interestedIn);

if (carlos[interestedIn]) {
    console.log(carlos[interestedIn]);
} else {
    console.log(`${interestedIn} property is not part of Carlos information`);
}

// Challenge
console.log(`${carlos.firstName} has ${carlos.friends.length} friends, and his best friend is called ${carlos.friends[0]}`);
console.log(`${carlos.firstName} has ${carlos.friends.length} friends, and his best friend is called ${carlos.friends[carlos.friends.indexOf('Aglae')]}`);

// *OBJECT METHODS*

const carlos = {
    firstName: 'Carlos',
    lastName: 'Silva',
    birthYear: 1989,
    job: 'developer',
    friends: ['Aglae', 'Regina', 'Javier', 'Santi'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     //console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge(this.birthYear)}-year old ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license`;
    }
};

//console.log(carlos.calcAge());
//console.log(carlos['calcAge'](1989));
//console.log(carlos.age);
console.log(carlos.getSummary());


for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

const carlosArray = [
    'Carlos',
    'Silva',
    2037 - 1989,
    'developer',
    ['Michael', 'Steven', 'Peter'],
    true
];

const types = [];

for (let i = 0; i < carlosArray.length; i++) {
    console.log(carlosArray[i], typeof carlosArray[i]);
    //types[i] = typeof carlosArray[i];
    types.push(typeof carlosArray[i]);
}

console.log(types);

const years = [1988, 1989, 2013, 1985];
const ages = [];
for (let index = 0; index < years.length; index++) {
    ages.push(2037 - years[index]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < carlosArray.length; i++) {
    if (typeof carlosArray[i] !== 'string') {
        continue;
    }
    console.log(carlosArray[i], typeof carlosArray[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < carlosArray.length; i++) {
    if (typeof carlosArray[i] === 'number') {
        break;
    }
    console.log(carlosArray[i], typeof carlosArray[i]);
}
*/

/* // This is not part of the course at this point
// just wanted to get the current year somehow
const currentYear = new Date().getFullYear();

const carlos = [
    'Carlos',
    'Silva',
    currentYear - 1989,
    'developer',
    ['Michael', 'Steven', 'Peter'],
    true
];

for (let i = carlos.length - 1; i >= 0; i--) {
    console.log(i, carlos[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);

    }
} */

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

/* let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Loop is about to end...');
    }
}
 */

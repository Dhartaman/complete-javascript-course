/*
alert("Hello World!");

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Carlos");
console.log(34);

let firstName = "Eduardo";
let first = 'charles';
//let 3years = 3; //Invalid variable name. It cannot start with numbers
console.log(firstName);
console.log(first);

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;
let PI = 3.1416;

let myFirstJob = 'Programmer';
let myCurrentJob = 'unknown';

console.log(myCurrentJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
// console.log(typeof 34);
// console.log(typeof 'Charles');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 1989;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 34;
age = 35;

const birthYear = 1989;
// birthYear = 2000; // invalid

const now = 2037;
const ageCarlos = now - 1991;
const ageAglae = now - 2018;
console.log(ageCarlos, ageAglae);

console.log(ageCarlos * 2, ageCarlos / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Carlos';
const lastName = 'Silva';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 10;
console.log(x);
x++;
console.log(x);
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageCarlos > ageAglae);
console.log(ageAglae >= 18);

const isFullAge = ageAglae >= 18;

console.log(now - 1991 > now - 2018);
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table

/*
const now = 2037;
const ageCarlos = now - 1991;
const ageAglae = now - 2018;

console.log(now - 1991 > now - 2018);


const firstName = 'Carlos';
const job = 'sw developer';
const birthYear = 1989;
const year = 2037;

const charles = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(charles);

const charlesNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(charlesNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license `);
} else {
    const yearLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(`century: ${century}`);


// type convertion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('John'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - '3');
console.log('23' + '10' + '3');
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}

let height = 0;
if (height) {
    console.log(`YAY! height is defined!`);
} else {
    console.log(`height is UNDEFINED`);
}

// === 'strict equality operator (compares value and type)
// as a good practice, use strict mode
const age = '18';
if (age === 18) {
    console.log(`You just became an adult :D (strict)`);
}

if (age == 18) {
    console.log(`You just became an adult :D (loose)`);
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 25) {
    console.log(`Cool! 25 is an amazing number!`);
}

if (favourite !== 23) {
    console.log(`Why not 25?`);
}

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive");
}


const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;

    case 'tuesday':
        console.log('Prepare theory videos');
        break;

    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;

    case 'friday':
        console.log('Record videos');
        break;

    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;

    default:
        console.log('Not a valid day!');
        break;
}
*/

const age = 23;
age >= 18 ? console.log('I like to drink wine ') : console.log('I like to drink water');
console.log(`I like to drink ${age >= 18 ? 'wine' : 'soda'}`);
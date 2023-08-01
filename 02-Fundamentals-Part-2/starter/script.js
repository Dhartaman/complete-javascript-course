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
*/

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
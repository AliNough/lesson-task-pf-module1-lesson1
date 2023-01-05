console.log('Hello World');

let randNum = () => {

   const num = Math.floor (Math.random() * 100);
    
    console.log(num);
    if (num < 50){
        console.log('is less');
    } else {
        console.log('is bigger');
    }
    
}

randNum();

let pet = {
    name: 'bro',
    age: 23,
};

console.log(pet);

const fName = 'john';
const lName = 'doe';
const fullName = fName + ' ' + lName;

console.log(fullName);


    
    let wholeNum = 10;
let gravity = 9.8;

const weekdays = 'Monday - Tuesday - Wendsday - Thursday - Friday';

let numMulti = 2 * 2;
let numDiv = 48 / 2;
let numAdd = 30 + 30;
let numSub = 90 - 23;

let alligations = false;

console.log('hello world'.length);

var number1 = "53";
parseInt(number1);
var number2 = "44.6";
parseFloat(number2);

if (typeof window !== 'undefined') {
    document.querySelector('h1').innerHTML = fullName + ' ' + 'heeeeell no';
    document.querySelector('h1').style = 'background-color: green;';
}


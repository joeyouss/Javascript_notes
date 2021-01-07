'use strict';
// js script mode is used for introducing bugs in our code
// which would else be not shown and we would make error
//  strict mode forbids us from doing certain things
// bring into our notice the errors which would js allow silently


// see in console of CDT how strict mode works
// let has = false;
// const pass = true;
// if (pass) hash = true;
// if (has) console.log("hello")

// declaring function
// functions for reusing code- keep yourself DRY
function logger() {
    // function buddy
    console.log("joe");
}

// invoking/calling the function
logger();
logger();
logger();

// returning from a function
function bam(apples, oranges) {
    console.log(apples, oranges);
    // dollar sign not working !!!!!!
    const juice = "juice with ${apples} and ${oranges} oranges";
    console.log(juice);
}

bam(4, 5);

// difference between function declaration and function expression
const okok = function(apples) {
    console.log("I have %d", apples);
}
okok(5);

// major diff- function declaration can be done before/after function call but function expression needs to be defined first and then called- this happens due to hoisting

// let why = false;
// console.assert(why, "the sign doesn't work");
// console.log('Console Log')
// console.info('Console Info')
// console.debug('Console Debug')
// console.warn('Console Warn')
// console.error('Console Error')

//  third type of function - arrow function
const check = function(birthyear) {
    return 2037 - birthyear;
}
console.log(check(1991));
// the above is a function expression
//  arrow function (good for one liner functions): parameter=>return value
const checkok = birthyear => 2037 - birthyear;
console.log(checkok(1991));

// using multiple lines in arrow function
const retirementage = birthyear => {
    const age = 2037 - birthyear;
    const ret = 65 - age;
    return ret;
}
console.log(retirementage(1991));

// array
const friends = ['j', 'k', 'l'];
// ADD ELEMENTS
// push adds the element to the end of the array 
// push returns the length of array as return type
friends.push('p');
console.log(friends);

// to add methods to beginning
friends.unshift('first');
console.log(friends);

// REMOVE ELEMENTS
friends.pop();
// pop returns the removed element
console.log(friends);

// to remove from front
friends.shift();
// for index
friends.indexOf('first');
// check if element present
// this uses strict equality to check so does not typecast
// returns bool
friends.includes('j');
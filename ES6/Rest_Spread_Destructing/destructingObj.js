/*
 * The concept of destructing in javascript is just like tuples unpacking in python,
 * where you can remove the values of an object and assign them to variables in one like of code
 * this doesn't include the *, ** syntax in python as those are rest and spread oprators in python 
*/

// there are so many ways to destructe object ordinary way 
let object = {
    a : 100,
    b : true
}
let {a, b} = object // node now makes it compulsory for you to use the same variable name as the key

console.log(a, b)

// way 2 destructuing without declearing
let c, d;
({c, d} = {c : 'just', d : null})
console.log(c, d) // just null is returned which is very correct

// lastly which is destructing and declaring in one line 
let {e, f} = {f : 500, e : 400}
console.log(e, f)

// This is a more stricter syntax but it allows you to change the of the variables from the key
let g = {naming : 'alpha', age : 30}
let {naming:names, age:year} = g

console.log(names, year) //alpha 30 is returned

// The concept of concept of Default values can be add to object destructing

let holdings = {btc : '20k', eth : '50k'}
let {btc, eth} = holdings
let {btc : com1 = '3k', eth : com2 = '5k'} = holdings

console.log(com1, com2) // 20k 50k as expected
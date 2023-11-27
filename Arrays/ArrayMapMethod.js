/**
 * No like the function that create an obj this actually just 
 * returns a new list mapped to the function passed to it 
 * the filter removes element that does not match the function
 * while the map changes the element to fit the function passed
 * this is an array method
 */

const NormalArray = [1, 2, 3, 4, 5]

const returnArr = NormalArray.map(a => a % 2 == 0)

console.log(returnArr);
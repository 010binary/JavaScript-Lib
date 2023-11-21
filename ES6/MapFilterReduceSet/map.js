/**
 * Map is a data Structure the holds Key vaules pair and remembers all the insertion of the keys any value can be used as a key objs, arrays and other primitive values included and as values
 * Maps solve the problem of maping the object as key to a value
 * Please not that WeakMap and Map are the same thing
 * this create a hash map
 */

const firstobj = {}
const secondobj = {}

const myMap = new Map([[firstobj, 'A'], [secondobj, 'B']])


// now lets see the Useful methods it has
myMap.set(1, 'one'); // this is mainly used to add stuffs to the Map just pass the key and the value 
myMap.set(2, 'one'); // this is mainly used to add stuffs to the Map just pass the key and the value 
console.log(myMap);

myMap.delete(1); // this Used to delete the value passed to it 
console.log(myMap);

console.log(myMap.has(2)); // this is used to check if a value is in the Map

console.log(myMap.size); // this is used to determine the size of a map or the number of stuff in there

myMap.clear() // Used to empty the map
console.log(myMap);
/**
 * a Set is an unorder pool of values so you can use index on it Please not that Weakset and Sets are the same thing
 * Reasons for using Sets
 * 1. they are used to remove duplicate values
 * 2. we Can easily convert the set back to an Array by using the spread oprator
 * 3. just like array we can add objects and array in them
 * 4. Just like array we can loop through it using the foreach loop
 */
const myArray = [1, 2, 3, 4, 5, 6, 5, 6, 7, 8, 9];

const mySet = new Set(myArray);

const uniArray = [...mySet]
console.log("the set has been converted into an array", uniArray);

// Looping through be like 
mySet.forEach((parameter) => {
    console.log('this is a value from the set ', parameter)
})

/**
 * methods of sets  
 */

mySet.add({ change: 'Franca' }) // adds the agurment into the Set str int arr and even obj this adds it to the end of the Set
console.log(mySet);

mySet.delete(8) // we pass the value we want to delete not the index as index does not work here
console.log(mySet); // if the method is used the log statment it returns a bool if the value was deleted or not

console.log(mySet.has(8)); // This checks if the Set has the value passed to it is in the set and returns a bool

console.log(mySet.size); // this tells the size of the Set Aka the number of values it holds

mySet.clear() // this clear everything in the set 
console.log(mySet);
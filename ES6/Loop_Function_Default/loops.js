// The new Es6 introduced a new type of loops based on the itration you need for Arrays of for Objects

// first the For ..in loop with is used for Object.
const Object = {
    a : "Austin",
    b : "Alpha",
    c : "Augustine"
}

for (let x in Object){
    console.log(x)  // this returns a b c which is the key in the above objects
}

// next we For ..of loop which is used for arrays, strings e.t.c
let arr = [ 1, "alpha", true];

for (let y of arr) {
    console.log(y) // this returns the value from the array above
}

// just to show that it works for strings
let strings = "Augustine";

for (let z of strings) {
    console.log(z) // this returns the value from the string above
}

// next we look at a kind of loop know as foreach which uses a function and apply certain rules to the an Array
let ford = [6, 7, 8, 9]

ford.forEach(elements =>{
    console.log(elements * 2); // this return the indiviual values of the array *2 = 12, 14, 16, 18.
})
// you can also declear this in a variable

const multiplier = (ford) => {
    ford.forEach(x => {
        console.log(x * 5); // works the same way 
    }
)
}
multiplier(ford) // calling the function 
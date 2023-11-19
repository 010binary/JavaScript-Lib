/*
 * The concept of destructing in javascript is just like tuples unpacking in python,
 * where you can remove the values of an array and assign them to variables in one like of code
 * this doesn't include the *, ** syntax in python as those are rest and spread oprators in python 
*/

const cons = x => { // I just created my own console.log cause i don tire abeg
    console.log(x)
}

// let arr = new Array ('HTML', 'CSS', 'PYTHON')

let arr2 = ['HTML', 'CSS', 'PYTHON'] // the 2 of them are the same thing


let [structure, design, backend] = arr2 

cons(structure) // html
cons(design) // css
cons(backend) // python

// this new way also allows for easy swapping

let a, b, c = 6, d = 8;

let arr = [1, 5];

[a, b] = arr;
[c, d] = [a, b]

cons([a, b, c, d]) // [ 1, 5, 1, 5 ] this is the output

//and lastly you can easily skip element that you don't need

const functions = () =>{
    return [ 2, 3, 4]
}

[g, , h] = functions()
cons([g, h]) // [ 2, 4 ]as see it skipped the 3 in the function above as there ways no variable to take it 

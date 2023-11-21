/**Understanding the strict mode in Javascript
 * Normally jaascript is very forgiving when we make mistakes in our code 
 * Thats why the code at line 9 and 10 works but if you use the strict mode it won't
 * 
 * to Activate the strict we simply include "use strict"
*/
"use strict";

/**
 * In Javascript just like anyother lang.. there are different type
 * let look at some of the errors
*/

// ReferenceError
let variable = "Austin"; //common error

// SyntaxError
let object = [1, 2, 3, 4, 5]; //most times it has this structure Unexpected token
// object..indexOf(3)

// TypeError
const name = "austine";
// name = 12;

// this is are the major types of error


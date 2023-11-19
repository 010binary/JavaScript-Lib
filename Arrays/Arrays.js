//Templates

let array1 = new array("Alpha", 26, true); // basic array

let array2 = new array(3); // another ways for creating the array
array2[0] = "010Binary";
array2[1] = 40;
array2[2] = true;


let array3 = new array(); // another ways for creating the array but this one os dynamic as its not limited by number
array3[0] = "010Binary";
array3[1] = 50;
array3[2] = false;

let mainArray = ["010Binary", 'Alpha', 30, true, false] // the new standard way of creating an array

//joining an array function
let joined = mainArray.concat(array1)

console.log(joined)


// ES6 introduced a new style of declaring function in js 

let x = 5, y = 7, z = 10;
// declearing a function varies pending on the number of lines in the code and the number of parameters e.g
// more than 1 parameter and more then 1 line of code we use

const add = (x, y, z) => {
    let total = x + y + z;
    console.log(total);
}
add (x, y, z) // calling the function = 22

// 1 parameter and 1 line of code we most times will skip the return bracket and parentsis in the kind of function because it's 1 line

const Square = x => x ** 2 ;
console.log(Square(z)); //calling the function directly inside the output we get 100

// no parameter 

const double = () => {
    return y * 2    // y is a global variable so it was access directly 
}
console.log(double()) // calling the function out put 14

/*
 * the rest and spread are like higher *arg and **kwargs in python
 * but this is not python
 * so Rest takes individual element and makes an Array for then this is mostly done in function
 * for Spread it takes an Array of number and turns them into individual element
 * they both use the ... syntax and the both of them are mostly regarded as spread
*/

const rest = (...nums) => {
    return (nums)
}

let Rest = rest(2, 5, 7, 8, 9);
console.log(Rest) // this will return the numbers as an array [ 2, 5, 7, 8, 9 ]

const spread = (a, b, c, d, e) => {
    console.log(a, b, c, d, e)
}
spread(...Rest) // this will convert that array to individual numbers again 2 5 7 8 9

// the spread operator can also be used to join array in array this is helpful as it is more flexible and can easliy be customised

let array1 = [2, 3, 4];
let array2 = [5, 6, 7];

let array3 = [1, ...array1, ...array2, 8, 9, 10] // this gives and an array of [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
console.log(array3)

// the spread operator is alos used for object too 

const object1 = { one: 1, second: 2, three: 3 }
const object2 = { four: 4, five: 5, six: 6 }

const merged = { ...object1, ...object2, namr: true, age: null }
console.log(merged)
/* this creates a new array with a shadow copy and the out put is {
    one: 1,
    second: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    namr: true,
    age: null
} */


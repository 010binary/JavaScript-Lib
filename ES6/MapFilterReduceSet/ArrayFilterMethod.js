/**
 * THIS IS USED TO FILTER VALUES THAT MATCH THE PATTERN (FUNCTION) PROVIDE IN THE FILTER METHOD
 * this is an Array method
 */

const NormalArray = [1, 2, 3, 4, 5, 6, 7]

const returnArr = NormalArray.filter(a => a % 2 == 0)

console.log(returnArr);


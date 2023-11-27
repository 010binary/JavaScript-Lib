// Math library methods demonstration

// 1. Math.abs() - returns the absolute value of a number
let absoluteValue = Math.abs(-5.7); // Output: 5.7

// 2. Math.ceil() - rounds a number up to the nearest integer
let ceilValue = Math.ceil(4.2); // Output: 5

// 3. Math.floor() - rounds a number down to the nearest integer
let floorValue = Math.floor(6.8); // Output: 6

// 4. Math.round() - rounds a number to the nearest integer
let roundValue = Math.round(3.6); // Output: 4

// 5. Math.max() - returns the largest of zero or more numbers
let maxValue = Math.max(10, 20, 5, 30); // Output: 30

// 6. Math.min() - returns the smallest of zero or more numbers
let minValue = Math.min(15, 25, 8, 12); // Output: 8

// 7. Math.pow() - returns the base to the exponent power
let powerValue = Math.pow(2, 3); // Output: 8 (2 raised to the power of 3)

// 8. Math.sqrt() - returns the square root of a number
let squareRootValue = Math.sqrt(25); // Output: 5

// 9. Math.random() - returns a random floating-point number between 0 and 1 (not including 1)
let randomValue = Math.random(); // Output: a random number between 0 and 1

// 10. Math.PI - represents the ratio of the circumference of a circle to its diameter (approximately 3.14159)
let piValue = Math.PI; // Output: 3.141592653589793

// Printing the results
console.log('Absolute Value:', absoluteValue);
console.log('Ceil Value:', ceilValue);
console.log('Floor Value:', floorValue);
console.log('Round Value:', roundValue);
console.log('Max Value:', maxValue);
console.log('Min Value:', minValue);
console.log('Power Value:', powerValue);
console.log('Square Root Value:', squareRootValue);
console.log('Random Value:', randomValue);
console.log('Value of PI:', piValue);

// Generate a whole number between 1 and 20 using Math.random()
let randomNumberBetween1And20 = Math.floor(Math.random() * 20) + 1;

console.log('Random number between 1 and 20:', randomNumberBetween1And20);

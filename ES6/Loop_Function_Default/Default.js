/*this simply is adding a default fault in a 
 *function of so that in the event you call the function with a parameter the default will serve.
 * note this concept has been around before Es6 this is just showing how to use it in ES6
*/

const investment = (a, btc = '20k', luna = '10k') => {
    return `Hello baby i'm x and i have doge coin worth ${a}, BTC worth ${btc} and eth worth ${luna} `
}
let first = investment('20k'); // the default parameters served here
let second = investment('5k', '2k', '3k'); // the default didn't serve as i specified my parameters

console.log(first)
console.log(second)

const vibe = (a, b, c) => {
    return a + b + c;
}


console.log(vibe(1, 3, 5)) // Gets the Answer

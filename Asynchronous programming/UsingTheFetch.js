/**
 * Here we are going to use the Fetch API instead
 * Note this will handle the promises api too
*/

// To start we call the function using this method chaining promises will be too much and so we use the Asyn and Await function
// fetch('json/HTTPRequest.Json').then((response) => {
//     console.log('Resolve', response);
//     if (response.status !== 200) {
//         throw new Error("Document not found")
//     }
//     return response.json()
// }).then(data => {
//     console.log("Resolved 1 :", data);

// }).catch((err) => {
//         console.log('Error :', err.message);
// })


// Asyn and Await
const AsynFunction = async (url, num) => {
    // First sourcing
    const response = await fetch(url);
    if (response.status !== 200) {
        throw new Error("there was an error")
    }
    const data = await response.json();
    console.log(`Response${num}`, data);

}

// calling the asyn function
setTimeout(() => {
    console.log("All done");
}, 1000);

console.log(1)
console.log(2)
AsynFunction('json/HTTPRequest.Json', 1).then(
    AsynFunction('json/HTTPRequest1.Json', 2)).then(
        AsynFunction('json/HTTPRequest2.Json', 3)).catch(err => {
            console.log(err, err.message);
        })
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)

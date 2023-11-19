// Just Doing my thing here

const functions = (PATHS) => {

    return new Promise((resolve, reject) => {

        // In other to create a Http request we need to make a request object
        const request = new XMLHttpRequest();

        //we need to track the change in state of our request using the readystatechange eventlistener
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText); // We define it here because we only use it here
                resolve(data) //RESOLVE
            } else if (request.readyState === 4) {
                reject("Error unable to fetch the Data") // REJECT
            }
            /* Previous way of doing it
             * if (request.readyState === 4 && request.status === 200) {
             *  const data = JSON.parse(request.responseText); We define it here because we only use it here
             *  callback(undefined, data)
             * } else if (request.readyState === 4) {
             *   callback("Error unable to fetch the Data", undefined)
             * }    
             */
        })


        // then we can set up the request using the request object
        request.open('GET', PATHS);
        // to make th request we do 
        request.send();

    })

}


/** Previous method
 * Bring this back to the concept of Asyn programming
 * functions('https://jsonplaceholder.typicode.com/todos/1', (Error, data) => { // It is by convention that we pass the error first
 *     console.log(data)
 *     functions('https://jsonplaceholder.typicode.com/todos/2', (Error, data) => { // It is by convention that we pass the error first
 *         console.log(data)
 *         functions('https://jsonplaceholder.typicode.com/todos/3', (Error, data) => { // It is by convention that we pass the error first
 *             console.log(data)
 *               })
 *        })
 * })
 *  
*/


// Using Promise instead 

functions("json/HTTPRequest.json").then(data => {  // Chaining Promises together
    console.log("resolve 1 :", data)
    return functions("json/HTTPRequest1.json")
}).then(data => {
    console.log("resolve 2 :", data)
    return functions("json/HTTPRequest2.json")
}).then(data => {
    console.log("resolve 3 :", data)
}).catch(data => { // we only put one Catch error and it will serve for all
    console.log("error 1 :", data)
})

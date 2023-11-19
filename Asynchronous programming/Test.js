const someAction = (para) => {
    return new Promise((resolve, reject) => {
        // resolve(para)

        reject("Error was Found")
    })
}
someAction("number 1").then((str) => {
    console.log("promise 1", str);
    return someAction("number 2")
}).then((str) => {
    console.log("promise 2", str)
    return someAction("number 3")
}).then((str) => {
    console.log("promise 3", str)
}).catch((error) => {
    console.log( error)
})


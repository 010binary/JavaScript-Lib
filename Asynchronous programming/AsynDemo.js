// A basics Asyn code is this 

console.log(1);
console.log(2);

setTimeout(() => { // this code runs but does not block the flow
    console.log("call back")
}, 2000); // 2secs

console.log(3);
console.log(4);
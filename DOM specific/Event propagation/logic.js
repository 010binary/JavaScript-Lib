window.addEventListener('click', () => {
    console.log("Window");
}, true)
document.addEventListener('click', () => {
    console.log("document")
}, true)
document.querySelector('body').addEventListener('click', () => {
    console.log("body");
}, true)
document.querySelector('.DIV2').addEventListener('click', () => {
    console.log("DIV 2");
}, true)
document.querySelector('.DIV1').addEventListener('click', () => {
    console.log("DIV 1");
}, { once: true })// This ensure this element fires only once 
document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault() // this make kills the default behaviour
    console.log(e.target.innerText = "clicked");
}, true)
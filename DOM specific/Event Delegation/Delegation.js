/**
 * EVENT DELEGATION -  
 * It allows user to append a SINGLE 
 * event listener to a parent element and 
 * that adds it to all of its present 
 * AND future descendants that match a selector
*/

// Normal method
// const list = document.querySelector('#football')
// list.addEventListener('click', ()=>{
//     list.style.backgroundColor = 'rgb(79, 91, 198)';
//     console.log(`${list.innerText} is clicked`)
// })

//USING THE EVENT DELEGATION 
document.addEventListener('click', (e) => {
    console.log(`${e.target.getAttribute('id')} is clicked`)
    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'rgb(79, 91, 198)'
    }
})

//adding another li to show the other part of the definition
const ul = document.querySelector('ul');
const li1 = document.createElement('li');
li1.innerText = "Fomular 1"
li1.setAttribute('id', 'Fomular 1')

ul.appendChild(li1)
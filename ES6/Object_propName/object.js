// the new ES6 came with a new way to declear object and some new featues for obj lets look at them 

// When the declear obj methods with same name we can just write the variable name in the obj 

let Firstname = 'Augustine'; 
let Surname = 'Asogwa';

const obj = {
    Surname,
    Firstname
}
console.log(obj)

// we can now declear an object with duplicate key names and not the last one overrides others

const obj1 = {
    names : 1,
    names : true,
    names : undefined,
    names : null,
    names : 'Austine'
}
console.log (obj1) // the out is only { name : 'austine'} cause last line overrides others

// Lastly a new shorthand for creating functions in an object was introduced and no it's not the arrow function 😂😂

const obj2 = {
    names : 'Austine',
    reaction : '😂',
    FullName (){
        console.log(`alpha ${this.names}`)
    }
}
console.log(obj2) // this prints the total value in the object
obj2.FullName() // this is used to call the function in this case no need to print as the function already prints
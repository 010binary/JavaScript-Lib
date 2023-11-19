// This is the Use of variable values as the name of other variable in any object

let names = 'Fullname'
let id = "idOfNumber"
let year = 'age'

const object = {
    [names] : "Justice",
    [id] : 20,
    [year] : 2001
}

console.log(object) // this is the output { Fullname: 'Justice', idOfNumber: 20, age: 2001 }.
console.log(object.Fullname) //note you cant use the braket [ ] syntax on the property it must be dot notation
console.log(object.idOfNumber) //note you cant use the braket [ ] syntax on the property it must be dot notation
console.log(object.age) //note you cant use the braket [ ] syntax on the property it must be dot notation

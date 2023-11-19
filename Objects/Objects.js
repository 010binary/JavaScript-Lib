// Template

let object1 = {name : "Alpha", age : 19}; // Basic object

let obj = {}; // this is an object litral its still vaild

object1["name"] = "010Binary"; // Accessing The name property

object1.age = 20; // Accessing the age property

/*
Another way of creating the object is to create a function like object ..see explanation on the readme file
*/

function objects (names, ages) {
    this.names = names;
    this.ages = ages;
    this.colors = color; // Adding a method(another function call) to the object 
}
function color(){
    if (this.names == "Alpha"){
        return "Blue";
    }else{
        return "Red";
    }
}

let person = new objects("Alpha", 20);
let person2 = new objects ("010Binary", 19);

console.log(person.colors()) // for some reason this works 
console.log(person["colors()"]) // for some reason this doesnt work 
/*
 *Javascript is any oop languague so we can create class object 
 * here we will look at oop in javascript 
 * i explain getter methods setter methods static methods constructor
 * inheritance, polymophism abstraction e.t.c 
 *
*/

class Human {
    constructor(_name, _age, _countyOfOrigin) { // this is equivalent to __init__ in python 
        this.name = _name,
            this.age = _age,    // the This keyword it equievent to the self keyword in python and its an attribut of the class
            this.country = _countyOfOrigin,
            this.graduated = null
    }
    // normal methods
    intro() {
        return (`Hello my name is ${this.name} and I'm from ${this.country}`) // this is a normal method in the class
    }

    //getter methods
    get howOld() {
        return (`I am ${this.age} years old`); // the getter method is used to get certain information from a class and when calling it theres not need for the ()
    }

    //setter methods
    set isgraduated(value) {
        this.graduated = value; // the setter method is used to set a new value to/into the class this allow you to just do object.setter = value
    }

    static skinColor(person) { // this is a static method that checks for the color of skin for the class instance

        let black = ["Nigeria", 'South Africa', 'Ghana', 'Togo', 'Congo']
        black = new Set(black)
        let white = ['America', 'UK', 'Europe', 'Canada', 'Austraila']
        white = new Set(white)
        let asian = ['China', 'Japan', 'India', 'Arabs']
        asian = new Set(asian)

        if (black.has(person.country)) {
            return (`Is a black man`)
        } else if (white.has(person.country)) {
            return (`is a white man`)
        } else if (asian.has(person.country)) {
            return (`is a asian man`)
        } else {
            return ("can't identify")
        }

    }
}

class Programmer extends Human {
    constructor(_name, _age, _countyOfOrigin, _canCode = false, _ProgrammingLanguage) {
        super(_name, _age, _countyOfOrigin), // Extending the properties of the parent class
            this.codes = _canCode,
            this.ProgrammingLanguage = _ProgrammingLanguage
        if (this.ProgrammingLanguage) {
            this.codes = true
        }
    }

    code() {
        return ` ${this.name} is coding in ${this.ProgrammingLanguage}`
    }

    intro() { // Polymorphism is the act of redefining a behavior from a parent class to child class
        console.log(super.intro() + ",") // we are calling the intro function from the parent class
        return `I'm a programmer, my preferred language is ${this.ProgrammingLanguage}`
    }
}
let arrtribute = ["Alpha", 20, "Nigeria", , "Javascript"]

const austin = new Programmer(...arrtribute);
const mike = new Human("Mike", 20, 'Canada');
const jon = new Human("Jon", 21, 'Arabs');


const people = [austin, mike, jon]

let print = people => {
    for (const person of people) {
        console.log(person.intro())
    }
}

print(people)



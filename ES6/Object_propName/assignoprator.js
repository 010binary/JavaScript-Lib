/* there are many object methods in js but this is a very interesting one
 * the object.assign methods allows us to collect data from many source and put in one target which is 
 * our object so it allows us take data from other source (array or object) and put in one object
 * it takes many parameter when call but the first parameter is the target using an empty braces forms a new obj {}
 * second and the remaining will be the sources
 * note this is also make shallow copy of the exist object.
*/

const obj1 = {
    one : 1,
    two : 2,
    three : 3
}

const obj2 = {
    four : 4,
    five : 5,
    six : 6
}

const obj3 = Object.assign(obj1, obj2, {
    seven : 7,
    eight : 8,
    nine : 9
});

console.log(obj3) // {one : 1, two : 2, three : 3, four : 4, five : 5, six : 6, seven : 7, eight : 8, nine : 9}
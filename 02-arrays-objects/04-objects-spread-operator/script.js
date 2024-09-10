const person = new Object()

person.name = "Aman"
person.age = 30
person.city = 'Patna'

console.log(person)

const obj1 = {a:1, b:2}
const obj2 = {c:3, d:4}

const objNested = {obj1, ...obj2}

console.log(objNested)

let x = Object.keys(person)  //get keys in object

x = Object.values(person)  //get all the values in object

x = Object.entries(person)  //get all the entries in the object

x = person.hasOwnProperty('address')  //to check if object contains the property
console.log(x)
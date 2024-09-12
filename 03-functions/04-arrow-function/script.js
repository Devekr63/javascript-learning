const add = (a, b) => {
    return a+b
}

const square = a => a*a

const createPerson = (firstName, lastName,  age) => ({
    firstName,
    lastName,
    age
})

console.log(createPerson("Devendra", "Kumar", 29))
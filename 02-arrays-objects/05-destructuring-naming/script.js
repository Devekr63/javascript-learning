const firstName = "Dev"
const lastName = "Kumar"
const age = 29

const person = {
    firstName,
    lastName,
    age
}

console.log(person)

//*** Destructuring

const todo = {
    id: 1,
    task: "Learn Javascript",
    details: {
        day: new Date().toLocaleString('en-IN', {weekday:'long'}),
        time: new Date().toLocaleDateString('en-IN', {hour: 'numeric', minute:'2-digit'}),
    }
}


const {id:todoId, task, details: {day, time}} = todo //todoId is renaming of id key from todo object

console.log(task+", "+day+ " "+todoId) 

//*** Destructuring arrays

const nums = [88, 66, 99, 33]

const [first, second, ...others] = nums  //rest '...' operator is used for destructuring of arrays 

console.log(first, second, others)
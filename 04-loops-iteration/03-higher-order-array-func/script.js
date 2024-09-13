//*** forEach method ***
const socials = ['linkedin', 'facebook', 'twitter', 'instagram']

socials.forEach((value, key, arr)  => {
    console.log(key, value)
})

function getSocials(social){
    console.log(social)
}

socials.forEach(getSocials)

//*** filter method ***
const students = [
    {name: "Dev", age: 29},
    {name: "Ajay", age: 25},
    {name: "Ramu", age: 27},
    {name: "Indu", age: 31},
    {name: "Ganesh", age: 32},
    {name: "Shiv", age: 24},
]


const studetnWithEvenAge = students.filter(student => (student.age & 1) === 0)
console.log(studetnWithEvenAge)

//*** map method ***
const computerStudents = students.map(student => ({...student, course: "Computer"}))
console.log(computerStudents)

const a = [
    [2,4,3,7,11],
    [32,15,21,16],
    [28,27,29,10]
]


//*** flatmap method ***
const flatA = a.flatMap(num => num)
                .filter(num => (num&1) !== 0)
                
console.log(flatA)


//*** reduce method ***
const sum = a.flatMap(num => num)
              .reduce((acc, curr) => acc + curr, 100)
console.log(sum)
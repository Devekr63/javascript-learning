const student = {
    name: "Devendra Kumar",
    age: 30,
    city: "Gorakhpur"
}

//String Template
console.log(`Student name is ${student.name}, his age is : ${student.age}`)
let s
s = student.name.slice(-5, -2)
console.log(s)

s = student.name.substring(2,5)
console.log(s)

s = student.name.includes("Kum")
console.log(s)

s = student.name.replace("Kumar", "Rao")
console.log(s)
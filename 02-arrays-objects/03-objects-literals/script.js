const student = {
    name: "Devendra",
    age : 29,
    email : "devekr12@gmail.com",
    course : "Computer Science",
    address : {
        city: "Gorakhpur",
        house_no : "G 211",
        state : "Uttar Pradesh",
        street : "Ramjanki"
    },

    printAddress() {
        console.log(this.address)
    }
}

console.log(student)

let x = student.name

x = student['age'] //accessing properties from object

delete student.age //object variables

x = student.age

console.log(x)

student.year = 3

console.log(student)

student.info = function() {
    console.log(`name: ${this.name}, year: ${this.year}`)
}

student.info()
student.printAddress()
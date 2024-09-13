// const user = "Devendra"
// console.log(user)

//above lines of code will not work since user is also defined in another script file

// (function(){
//     const user = "Devendra"
//     console.log(user)
// })()

// (function (name){
//     console.log(name);
// })('Aman');

const x = 100
const y = 200

function add(x, y){
    const sum = x+y
    return sum
}

const sum1 = add(x, y)
const sum2 = add(10, 25)

console.log(sum1, sum2)

if(function(){}){
    console.log("Hello")
}
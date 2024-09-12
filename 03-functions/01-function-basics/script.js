function play(sports = "Cricket"){
    console.log(sports)
}

play("Football")

play()

function sum(...numbers){
    total = 0;
    for(const n of numbers){
        total += n
    }
    return total
}

console.log(sum(1,2,3,4))

function login(user){
    return `The user with id ${user.id} is logged in.`
}

console.log(login({id:100, name:"Devendra"}))
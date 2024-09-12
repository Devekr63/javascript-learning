const post = {
    id: 1,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    post:{
        author: "Devendra",
        topic: "How AI will change software development...",
        post:"AI is going to change the world."
    }
}

console.log(post)

//converting object to json

const objectToJson = JSON.stringify(post)
console.log(objectToJson)

//converting json to object

const jsonToObject = JSON.parse(objectToJson)
console.log(jsonToObject)
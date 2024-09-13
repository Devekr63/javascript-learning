// loops arrays
const items = ['books', 'pens', 'bottles', 'mouse']

for(const item of items){
    console.log(item)
}


//loop string
for(const s of "Devendra"){
    console.log(s)
}


//loop maps

const map = new Map()

map.set("name", "Dev")
map.set("age", 29)

for(const [key, value] of map){
    console.log(`${key} ${value}`)
}
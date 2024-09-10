const nums = [21, 82, 17, 11, 45]

nums.push(100)  //add at end

nums.pop()  //remove from end

nums.unshift(100)  //add at start

nums.shift()  //remove from start

nums.reverse()

nums.sort()

console.log(nums)


let x = nums.includes(100)

x = nums.slice(0,4)  //not in place, return new array

console.log("x -> ")
console.log(x)
console.log("nums -> ")
console.log(nums)

x = nums.splice(0, 2)  //in place, return removed elements
x = nums.splice(1, 1)

console.log(nums)
console.log(x)


//* */ concatination

const girls = ["Neha", "Seema", "Ritika"]
const boys = ["Dev", "Aman", "Mangu"]

x = girls.concat(boys)

//flaten arrays

x = [...girls, ...boys] //spread operator

x = [girls, boys].flat()

console.log(girls, boys)
console.log(x)

//Static methods in Array object

x = Array.isArray(girls)

x = Array.of(1,2,3)

x = Array.from("12345")

console.log(x)
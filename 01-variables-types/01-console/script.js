// alert('Hello World');

console.log(100)

console.log("Hello World")

console.error("Alert")

console.warn("Warning")


console.group("Developer Data");
console.table({name:"Devendra", age:29})
console.groupEnd();

const style = 'padding: 10px; background-color: white; color:green; font-size:20px'
console.log('%cHello World', style);

const name = "Devendra";

const arr = [1,2,3,4,5]
arr.push(6)

console.log(arr)

const a=1, b=2;

const isPresent = true;

const id = Symbol("id")

console.log(id)


console.log(1+"1"+"a")
console.log(1+"1"+"a"+NaN)
console.log(1+NaN)
console.log("1"+NaN)

console.log(8>>1)
console.log(8<<1)
console.log(889^1)

console.log(8**2) // square

//Type coersion
let x = 5 + '5'

x = 5 * '5'

x = 5 + null

x = Number(true)

x = Number(false)

x = 5 + true

x = 5 + undefined

x = true == 1

x = false == 0

x = true == 6

console.log(x+" "+ typeof x)






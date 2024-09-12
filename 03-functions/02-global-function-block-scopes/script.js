console.log(window)
console.log(window.innerHeight)
console.log(window.innerHeight)

// scopes of var, const and let
// variables declared using var are added in the window object

if(true){
    const a = 100; //block scope
    var b = 101;   //function scope
    let c = 102;   //block scope
}

console.log(b)

function fun(){
    if(true){
        const a = 100; //block scope
        var b = 101;   //function scope
        let c = 102;   //block scope
    }
    // console.log(a) //does not work
    console.log(b)
}

fun()
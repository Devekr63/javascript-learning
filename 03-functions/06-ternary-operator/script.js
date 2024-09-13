const auth = true;

const redirect = auth
    ? (alert("welcome to dashboard"), "/authorized")
    : (alert("access denied"), "/login")

console.log(redirect)

auth ? console.log('Welcome to the dashboard') : null

auth && console.log('Welcome to the dashboard')
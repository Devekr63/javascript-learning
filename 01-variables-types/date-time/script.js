let d = new Date()

console.log(d.toLocaleDateString())

d = new Date("2020-03-10T13:30:10")

d = new Date("03/09/1995")

d = Date.now()

d = new Date("03/09/1995").getTime()

d = new Date(1000000000000000)

d = Math.floor(Date.now()/(1000*60*60*24*365))

d = new Date().getFullYear() - new Date(0).getFullYear()

d = new Date().getMonth()

console.log(d)

x = Intl.DateTimeFormat('en-IN', {month: 'long'}).format(new Date())

x = new Date().toLocaleString('en-IN', {month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit'})

console.log(x)
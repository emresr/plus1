const readline = require("readline")
const colors = require('colors');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

function random(c) { 
 var c = Math.floor(Math.random() * (999 - 100 + 1) + 100)
 const x = c.toString()
const y = x.split("")
if ((y[0] === y[1]) || (y[2] === y[1]) || (y[2] === y[0])){
 var c = Math.floor(Math.random() * (999 - 100 + 1) + 100)   
  }
	return c

}
const m=random()
 const x = m.toString()
const y = x.split("")
console.log(m)



function app (){ 
rl.question("Tahmin et ~~>   ", (a) => {
	const j = a.split("")
	if (a === x) {
		console.log("+3")
		console.log("U won!".red.bold)
		rl.close()
	}  else if ((j[0] === y[0]) && (j[1] === y[1])) {
		console.log("+2".magenta)
		app()
	}
	else if ((j[0] === y[0]) && (j[2] === y[2])) {
		console.log("+2".magenta)
		app()
	}
	else if ((j[2] === y[2]) && (j[1] === y[1])) {
		console.log("+2".magenta)
		app()
	}
	 else if ((j[0] === y[0]) || (j[1] === y[1]) || (j[2] === y[2])) {
		console.log("+1".cyan)
		app()
	} else {
		console.log("0")
		app()
	}
})
}
app()
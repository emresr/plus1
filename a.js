const minu = 2
const p = 0
const y = minu
if (p === minu) {
	minu += 1
}

const x = 10
x += 5
console.log(x)

const readline = require("readline")
const colors = require("colors")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

function random(c) {
	var c = Math.floor(Math.random() * (999 - 100 + 1) + 100)
	const x = c.toString()
	const y = x.split("")
	if (y[0] === y[1] || y[2] === y[1] || y[2] === y[0]) {
		var c = Math.floor(Math.random() * (999 - 100 + 1) + 100)
	}
	return c
}
const m = random()
const x = m.toString()
const y = x.split("")
console.log(m)

function app() {
	rl.question("Tahmin et ~~>   ", (a) => {
		const j = a.split("")
		var minu = 0
		var puli = 0
		function plus() {
			if (j[0] === y[0] && j[1] === y[1]) {
				var puli = 2
				app()
			} else if (j[0] === y[0] && j[2] === y[2]) {
				var puli = 2
				app()
			} else if (j[2] === y[2] && j[1] === y[1]) {
				var puli = 2
				app()
			} else if (j[0] === y[0] || j[1] === y[1] || j[2] === y[2]) {
				puli++
				app()
			} else {
				var puli = 0
				app()
			}
		}
		function minus() {
			if (
				j[0] === y[1] ||
				j[0] === y[2] ||
				j[1] === y[0] ||
				j[1] === y[2] ||
				j[2] === y[0] ||
				j[2] === y[1]
			) {
				if (j[0] === y[1]) {
					minu--
				}
				if (j[0] === y[2]) {
					minu--
				}
				if (j[1] === y[0]) {
					minu--
				}
				if (j[1] === y[2]) {
					minu--
				}
				if (j[2] === y[1]) {
					minu--
				}
				if (j[2] === y[0]) {
					minu--
				}

				app()
			} else {
				console.log("0")
				app()
			}
		}
		if (a === x) {
			console.log("+3")
			console.log("U won!".red.bold)
			rl.close()
		} else {
			plus()
			minus()
			console.log(puli + minu)
		}
	})
}
app()

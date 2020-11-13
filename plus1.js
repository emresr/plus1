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
		console.log("2 rakam beraber geldi :( CTRL+C yap pls")
	}
	return c
}
const m = random()
const x = m.toString()
const y = x.split("")

function game() {
	rl.question("Tahmin et ~~>   ", (a) => {
		if (a === "pes") {
			console.log(m)
		}
		const j = a.split("")
		var plu = 0
		var minu = 0
		function plus() {
			if (j[0] === y[0] && j[1] === y[1]) {
				plu++
				plu++
				game()
			} else if (j[0] === y[0] && j[2] === y[2]) {
				plu++
				plu++
				game()
			} else if (j[2] === y[2] && j[1] === y[1]) {
				plu++
				plu++
				game()
			} else if (j[0] === y[0] || j[1] === y[1] || j[2] === y[2]) {
				plu++

				game()
			} else {
				game()
			}
			console.log()
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
				//minus plus
				if (j[0] === y[0]) {
					minu++
				}
				if (j[1] === y[1]) {
					minu++
				}
				if (j[2] === y[2]) {
					minu++
				}

				game()
			} else {
				game()
			}
		}
		if (a === x) {
			console.log("+3")
			console.log("U won!".red.bold)
			rl.close()
		} else {
			plus()
			minus()
			if (plu === 0 && minu === 0) {
				console.log(a + "  " + plu)
			} else if (plu === 0) {
				console.log(a + "  " + minu)
			} else if (minu === 0) {
				console.log(a + "  " + plu)
			} else {
				const yyy = a + "  " + plu.toString() + " " + minu.toString()

				console.log(yyy)
			}
		}
	})
}
game()

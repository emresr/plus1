import React, { useState } from "react"

const Game = () => {

   const [one,setOne] = useState("33")
      const [two,setTwo] = useState("")
         const [three,setThree] = useState("")
console.log({one})

	function random(c) {
		var c = Math.floor(Math.random() * (999 - 100 + 1) + 100)
		const x = c.toString()
		const y = x.split("")
		if (y[0] === y[1] || y[2] === y[1] || y[2] === y[0]) {
			console.log("2 same number...")
		}
		return c
	}
	const m = random()
	const x = m.toString()
	const y = x.split("")
	console.log(m)
	function game() {
		const a = "123"

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
			console.log("U won!")
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
	}

	return (
		<>
			<div className="leftcolumn">
				<p> Enter user name </p>
				<form>
					<input value ={one} className="number-input" />
					<input value={two} className="number-input" />
					<input  value= {three} className="number-input" />

                    <button> MF </button>
					<table></table>
				</form>
			</div>
		</>
	)
}

export default Game

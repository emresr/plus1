import React, { useState } from "react"

const Game = () => {
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

	function game() {
		const a = "lmao"

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
	game()

	return (
		<>
			<div className="leftcolumn">
				<p> Enter user name </p>

				<input className="number-input"> </input>
				<input className="number-input"> </input>
				<input className="number-input"> </input>

				<table></table>
			</div>
		</>
	)
}

export default Game

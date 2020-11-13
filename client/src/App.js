import React, { Fragment } from "react"
import "./App.css"

import Header from "./components/Header"
import Game from "./components/Game"
import History from "./components/History"

function App() {
	return (
		<Fragment>
			<div className="container">
				<Header />
				<Game />
				<History />
			</div>
		</Fragment>
	)
}

export default App

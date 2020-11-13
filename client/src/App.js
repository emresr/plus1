import React, { Fragment } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<Fragment>
			<div className="container">
				<Header />
				<Footer />
			</div>
		</Fragment>
	);
}

export default App;

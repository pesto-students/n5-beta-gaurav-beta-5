import React from "react";
import "./App.css";

import { connect } from "react-redux";
import MainContainer from "./components/mainContainer";

function App() {
	return (
		<div className="App">
			<MainContainer />
		</div>
	);
}

export default connect()(App);

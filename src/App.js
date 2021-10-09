import React from "react";
import "./App.css";

import { connect } from "react-redux";
import MainContainer from "./components/mainContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
	return (
		<div className="App">
			<MainContainer />
			<ToastContainer autoClose={2500} position="top-right" />
		</div>
	);
}

export default connect()(App);

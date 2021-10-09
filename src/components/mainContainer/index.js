import React from "react";
import { Container } from "reactstrap";
import MainMenu from "../../shared/components/mainMenu";
import Header from "../../shared/components/header";
import SearchBar from "../../shared/components/searchBar";
import Routes from "../routes";
import Footer from "../../shared/components/footer";

function MainContainer() {
	return (
		<>
			<Header />
			<MainMenu />
			<SearchBar />
			<Container>
				<Routes />
			</Container>
			<Footer />
		</>
	);
}

export default MainContainer;

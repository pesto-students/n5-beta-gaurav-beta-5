import React from "react";
import { Link } from "react-router-dom";
import { Container, Paper, Box } from "@material-ui/core";
import { Static } from "../../styles/static.styles";
const NotFound = () => (
	<Static>
		<Container>
			<Paper className="paper not-found" id="not-found">
				<h1>404 - Not Found!</h1>
				<Link to="/">Go Home</Link>
			</Paper>
		</Container>
	</Static>
);

export default NotFound;

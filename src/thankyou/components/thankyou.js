import React from "react";
import {
	Grid,
	Button,
	Container,
	Paper,
	ButtonBase,
	Typography,
	Checkbox,
	Box,
	MenuItem,
	Select,
	FormControl,
	Link,
} from "@material-ui/core";
import { ThankYouContainer } from "../../styles/thankyou.styles";
import ThankYouImage from "../../assets/images/thankyou.jpg";

import { useHistory } from "react-router-dom";
function Thankyou() {
	const [state, setState] = React.useState({
		checkedB: true,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	const preventDefault = (event) => event.preventDefault();
	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
	};

	return (
		<ThankYouContainer>
			<Container spacing={8} className="container">
				<Grid
					container
					spacing={3}
					justifyContent="center"
					alignItems="center"
				>
					<Grid item xs={6} md={6} className="main">
						<Box m={3}>
							<img src={ThankYouImage} />
						</Box>
						<Box m={3}>
							<span>THANK YOU</span>
						</Box>
						<Box m={3}>Order Placed Successfully!</Box>
					</Grid>
					<Grid
						container
						spacing={3}
						justifyContent="center"
						alignItems="center"
					>
						<Grid item xs={12} md={6}>
							<Box pb={2} pt={2}>
								<Button
									variant="contained"
									className="submit-change ctn-shopping-btn"
									onClick={() => handleClick("/categories")}
								>
									CONTINUE SHOPPING
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</ThankYouContainer>
	);
}

export default Thankyou;

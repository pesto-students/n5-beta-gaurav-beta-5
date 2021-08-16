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
import { CartContainer } from "../../styles/cart.styles";
import clockImage from "../../assets/images/clock.jpg";
import craftImage from "../../assets/images/craft.jpg";
import { useHistory } from "react-router-dom";
import Cart from "../../cart/components/cart";

function MakePayment() {
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
		<CartContainer>
			<Cart type="payment" spacing="1" />
			<Container spacing={8}>
				<Grid container spacing={3} className="addressSection">
					<Grid item xs={12} md={12}>
						<Paper elevation={0}>
							<Box mx={4} py={2}>
								<h3 pb={0} className="title cart-title">
									DELIVERY ADDRESS
								</h3>
								<hr />
								<Typography className="default-font address">
									Omkar Kamale 506 Abc CHS, Plot 123, Sector
									19, Nerul Navi, Mumbai Maharashtra 400706
									India
								</Typography>
								<Box pb={4}>
									<Button
										variant="contained"
										className="address-change"
										onClick={() =>
											handleClick("/address-management")
										}
									>
										ADD/EDIT ADDRESS
									</Button>
								</Box>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</CartContainer>
	);
}

export default MakePayment;

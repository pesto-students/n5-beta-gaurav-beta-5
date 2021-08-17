import React, { useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";
import { mapAction } from "../../state";
import { isEmpty } from "lodash";
import Cart from "../../cart/components/cart";

function MakePayment() {
	const [state, setState] = React.useState({
		checkedB: true,
	});
	const { userSelectedLocation } = useSelector(
		(state) => state.searchedLocation
	);
	const dispatch = useDispatch();
	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	const { currentAddress } = useSelector((state) => state.addressState);
	const userSession = JSON.parse(localStorage.getItem("session"));
	useEffect(() => {
		console.log("currentAddress", currentAddress);
	}, [currentAddress]);

	const { showMap } = bindActionCreators(mapAction, dispatch);
	const preventDefault = (event) => event.preventDefault();
	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
		if (isEmpty(userSelectedLocation)) showMap(true);
	};

	return (
		<CartContainer>
			<Cart
				currentAddress={isEmpty(currentAddress) ? null : currentAddress}
				type="payment"
				spacing="1"
			/>
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
									{isEmpty(currentAddress) == false && (
										<>
											<b>
												{currentAddress.firstName}{" "}
												{currentAddress.lastName}
											</b>
											<br />
											{currentAddress.streetAddress},{" "}
											{currentAddress.city}
											<br />
											{currentAddress.state}
											<br />
											{currentAddress.country}
											<br />
											Phone:{" "}
											{userSession !== null
												? userSession.phone
												: ""}
											<br />
											Pin: {currentAddress.pincode}
											<br />
										</>
									)}
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

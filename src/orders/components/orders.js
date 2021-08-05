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
import { OrderContainer } from "../../styles/orders.styles";
import clockImage from "../../assets/images/clock.jpg";
import craftImage from "../../assets/images/craft.jpg";
import { useHistory } from "react-router-dom";
function Orders() {
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
		<OrderContainer>
			<Container spacing={8} className="container">
				<Grid container spacing={3}>
					<Grid item xs={12} md={8}>
						<Paper elevation={0}>
							<h3 className="cart-title">ORDERS</h3>

							<Box mx={2} pt={1}>
								<Box textAlign="right">Price</Box>
								<Grid
									container
									direction="row"
									className="cart-border"
								>
									<Grid item>
										<ButtonBase className="resp-img img-margin ">
											<img
												className="cart-product-img"
												alt="complex"
												src={clockImage}
											/>
										</ButtonBase>
									</Grid>

									<Grid item xs={10} sm>
										<Box mx={4}>
											<Typography
												gutterBottom
												component="div"
												className="productName"
											>
												Solima 12-Inch Wall
												Clock-Classic Roulette (Silver
												Movement, Black Frame)
											</Typography>

											<Typography
												variant="body2"
												color="text.secondary"
												className="productQTY"
											>
												<span>Qty: &nbsp;</span>1
											</Typography>
											<Typography
												className="productQTY"
												gutterBottom
											>
												Status : Pending
											</Typography>
										</Box>
									</Grid>
									<Grid item xs={2}>
										<Typography
											variant="subtitle1"
											component="div"
											className="cart-price"
										>
											<Box textAlign="right">
												&#8377;149.00
											</Box>
										</Typography>
									</Grid>
								</Grid>
							</Box>
							<Box mx={2} pt={1}>
								<Box textAlign="right">Price</Box>
								<Grid
									container
									direction="row"
									className="cart-border"
								>
									<Grid item>
										<ButtonBase className="resp-img img-margin ">
											<img
												className="cart-product-img"
												alt="complex"
												src={craftImage}
											/>
										</ButtonBase>
									</Grid>

									<Grid item xs={10} sm>
										<Box mx={4}>
											<Typography
												gutterBottom
												component="div"
												className="productName"
											>
												Ezzu Crafts Metal Plant Stand,
												White Standard 2 Pieces
											</Typography>

											<Typography
												variant="body2"
												color="text.secondary"
												className="productQTY"
											>
												<span>Qty: &nbsp;</span>2
											</Typography>

											<Typography
												className="productQTY"
												gutterBottom
											>
												Status : Pending
											</Typography>
										</Box>
									</Grid>
									<Grid item xs={2}>
										<Typography
											variant="subtitle1"
											component="div"
											className="cart-price"
										>
											<Box textAlign="right">
												&#8377; 1,649.00
											</Box>
										</Typography>
									</Grid>
								</Grid>
							</Box>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper elevation={0} className="bg-white flex-height">
							<Box mx={3} pb={4} pt={3}>
								<Button
									variant="contained"
									className="submit-change ctn-shopping-btn"
									onClick={() => handleClick("/thankyou")}
								>
									CONTINUE SHOPPING
								</Button>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</OrderContainer>
	);
}

export default Orders;

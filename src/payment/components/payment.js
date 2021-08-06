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
			<Container spacing={8} className="container">
				<Grid container spacing={3}>
					<Grid item xs={12} md={8}>
						<Paper elevation={0}>
							<h3 className="cart-title">SHOPPING CART</h3>
							<h4 className="item-seleted">Deselect all items</h4>
							<Box mx={2} pt={1}>
								<Box textAlign="right">Price</Box>
								<Grid
									container
									direction="row"
									className="cart-border"
								>
									<Grid item>
										<Checkbox
											checked={state.checkedB}
											onChange={handleChange}
											name="checkedB"
											color="primary"
											ml={2}
										/>

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
												className="productStock"
												gutterBottom
											>
												In Stock
											</Typography>
											<Typography
												variant="body2"
												color="text.secondary"
												className="productQTY"
											>
												<span>Qty: &nbsp;</span>
												<FormControl variant="outlined">
													<Select
														labelId="qty"
														id="qty"
														value="1"
														className="qtyDropdow"
													>
														<MenuItem value={1}>
															1
														</MenuItem>
														<MenuItem value={2}>
															2
														</MenuItem>
														<MenuItem value={3}>
															3
														</MenuItem>
													</Select>
												</FormControl>
												<Link
													href="#"
													onClick={preventDefault}
													className="productStock deletelink"
												>
													Delete
												</Link>
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
										<Checkbox
											checked={state.checkedB}
											onChange={handleChange}
											name="checkedB"
											color="primary"
											ml={2}
										/>

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
												className="productStock"
												gutterBottom
											>
												In Stock
											</Typography>
											<Typography
												variant="body2"
												color="text.secondary"
												className="productQTY"
											>
												<span>Qty: &nbsp;</span>
												<FormControl variant="outlined">
													<Select
														labelId="qty"
														id="qty"
														value="1"
														className="qtyDropdow"
													>
														<MenuItem value={1}>
															1
														</MenuItem>
														<MenuItem value={2}>
															2
														</MenuItem>
														<MenuItem value={3}>
															3
														</MenuItem>
													</Select>
												</FormControl>
												<Link
													href="#"
													onClick={preventDefault}
													className="productStock deletelink"
												>
													Delete
												</Link>
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
					<Grid item xs={12} md={4} className="pd">
						<Paper elevation={0} className="bg-white flex-height">
							<Typography className="semiBold">
								<Box mx={3} my={1} pt={4}>
									Subtotal (2 items):&nbsp;&nbsp;&nbsp;
									<span className="total-price">
										&#8377; 1,798.00
									</span>
								</Box>
							</Typography>

							<Box mx={3} pb={4}>
								<Button
									variant="contained"
									className="submit-change"
									onClick={() => handleClick("/orders")}
								>
									MAKE PAYMENT
								</Button>
							</Box>
						</Paper>
					</Grid>
				</Grid>
				<Grid container spacing={3} className="addressSection">
					<Grid item xs={12} md={12}>
						<Paper elevation={0}>
							<Box mx={4} py={2}>
								<h3 pb={0} className="title cart-title">
									DELIVERY ADDRESS
								</h3>
								<hr />
								<Typography className="semiBold address">
									Omkar Kamble 506 Abc CHS, Plot 123, Sector
									19, Nerul Navi, Mumbai Maharashtra 400706
									India
								</Typography>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</CartContainer>
	);
}

export default MakePayment;

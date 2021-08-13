import React, { useState, useEffect } from "react";
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
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { addToCartActions, authActions } from "../../state";
import { useLocation } from "react-router-dom";
function Cart() {
	const [state, setState] = React.useState({
		checkedB: true,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	const preventDefault = (event) => event.preventDefault();
	const history = useHistory();
	const dispatch = useDispatch();
	const { clearSession } = bindActionCreators(authActions, dispatch);
	const [userSession, setUserSession] = useState();
	const { session } = useSelector((state) => state.auth);
	const { cart } = useSelector((state) => state.myCart);
	const handleClick = (route) => {
		history.push(route);
	};

	useEffect(() => {
		console.log("incart", cart);
	}, []);

	return (
		<CartContainer>
			<Container spacing={8} className="container">
				<Grid container spacing={3}>
					<Grid item xs={12} md={8}>
						<Paper elevation={0}>
							<h3 className="cart-title">SHOPPING CART</h3>
							<h4 className="item-seleted">Deselect all items</h4>
							{cart &&
								cart.map((item) => (
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
														src={item.image1.url}
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
														{item.name}
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
																<MenuItem
																	value={1}
																>
																	1
																</MenuItem>
																<MenuItem
																	value={2}
																>
																	2
																</MenuItem>
																<MenuItem
																	value={3}
																>
																	3
																</MenuItem>
															</Select>
														</FormControl>
														<Link
															href="#"
															onClick={
																preventDefault
															}
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
														&#8377;{item.price}
													</Box>
												</Typography>
											</Grid>
										</Grid>
									</Box>
								))}
						</Paper>
					</Grid>
					<Grid item xs={12} md={4} className="pd">
						<Paper elevation={0}>
							<Typography className="semiBold">
								<Box mx={3} my={1} pt={4}>
									Subtotal ({cart.length}{" "}
									items):&nbsp;&nbsp;&nbsp;
									<span className="total-price">
										&#8377;{" "}
										{cart.reduce(
											(acc, item) => acc + item.price,
											0
										)}
									</span>
								</Box>
							</Typography>
							<Box mx={3} pb={4}>
								<Button
									variant="contained"
									className="submit-change"
									onClick={() => handleClick("/makepayment")}
								>
									PROCEED TO BUY
								</Button>
								<Button
									variant="contained"
									className="submit-change ctn-shopping-btn"
									onClick={() => handleClick("/categories")}
								>
									CONTINUE SHOPPING
								</Button>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</CartContainer>
	);
}

export default Cart;

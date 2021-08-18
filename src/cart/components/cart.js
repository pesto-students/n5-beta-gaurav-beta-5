import React, { useState, useEffect } from "react";
import {
	Grid,
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

import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { addToCartActions, authActions } from "../../state";

import ConfirmDialog from "../../shared/components/confirmDialog";
import CartSubtotal from "./cartSubtotal";

function Cart(props) {
	const [state, setState] = React.useState({
		checkedB: true,
	});
	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	const [confirmOpen, setConfirmOpen] = React.useState(false);
	const [confirmProps, setConfirmProps] = useState({});

	const history = useHistory();
	const dispatch = useDispatch();
	const { deleteToCart } = bindActionCreators(addToCartActions, dispatch);

	const { cart } = useSelector((state) => state.myCart);

	useEffect(() => {
		console.log("incart", cart);
	}, [cart]);

	const handleDeleteItem = (id, type = "REMOVE_ITEM") => {
		deleteToCart({ id: id, type: type });
	};

	const deleteItems = (itemId, type = "REMOVE_ITEM") => {
		if (type == "REMOVE_ALL") {
			const cProps = {
				confirmMsg:
					"Are you sure you want to remove all the products from Cart?",
				confirmType: "REMOVE_ALL",
				title: "Remove All Products From Cart",
				id: 0,
			};
			setConfirmProps(cProps);
		} else {
			const cProps = {
				confirmMsg:
					"Are you sure you want to remove this product from Cart?",
				confirmType: "REMOVE_ITEM",
				title: "Remove Product From Cart",
				id: itemId,
			};
			setConfirmProps(cProps);
		}

		setConfirmOpen(true);
	};

	return (
		<CartContainer>
			<Container
				spacing={props.spacing ? props.spacing : 8}
				className={props.spacing ? "nocontainer" : "container"}
			>
				<Grid container spacing={3}>
					<Grid item xs={12} md={8}>
						<Paper elevation={0}>
							<h3 className="cart-title">SHOPPING CART</h3>
							{cart.length > 0 ? (
								<h4 className="item-seleted">
									<Link
										href="javascript:void(0)"
										onClick={() => {
											deleteItems(true, "REMOVE_ALL");
										}}
										className="productStock deletelink"
									>
										Deselect all items
									</Link>
								</h4>
							) : (
								<br />
							)}
							{cart.length === 0 ? (
								<Box mx={2} py={4} textAlign="center">
									<h4>Your E-Life Cart is empty.</h4>
								</Box>
							) : (
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
																value={item.qty}
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
															href="javascript:void(0)"
															onClick={() =>
																deleteItems(
																	item.objectId
																)
															}
															className="productStock deletelink"
														>
															Delete
														</Link>

														<ConfirmDialog
															title={
																confirmProps.title
															}
															open={confirmOpen}
															setOpen={
																setConfirmOpen
															}
															onConfirm={() => {
																handleDeleteItem(
																	confirmProps.id,
																	confirmProps.confirmType
																);
															}}
														>
															{
																confirmProps.confirmMsg
															}
														</ConfirmDialog>
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
								))
							)}
						</Paper>
					</Grid>
					<Grid item xs={12} md={4} className="pd ">
						<CartSubtotal {...props} />
					</Grid>
				</Grid>
			</Container>
		</CartContainer>
	);
}

export default Cart;

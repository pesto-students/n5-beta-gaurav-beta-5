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
	const [cartState, setCartState] = useState([]);
	const [confirmOpen, setConfirmOpen] = useState(false);
	const [confirmProps, setConfirmProps] = useState({});
	const [shippingCost, setShippingCost] = useState(0);
	const history = useHistory();
	const dispatch = useDispatch();
	const { deleteToCart } = bindActionCreators(addToCartActions, dispatch);

	const { cart, totalShippingCharge } = useSelector((state) => state.myCart);
	const { storedRoute } = useSelector((state) => state.auth);

	const [qty, setQty] = useState(1);
	const { addToCart, addShippingCharge } = bindActionCreators(
		addToCartActions,
		dispatch
	);
	const handleClick = (route) => {
		history.push(route);
	};

	useEffect(() => {
		console.log("incart", cart);
		setCartState([...cart]);
		calculateShippingCost();
	}, [cart]);

	useEffect(() => {
		console.log("totalShippingCharge", totalShippingCharge);
	}, [totalShippingCharge]);

	useEffect(() => {
		window.scrollTo(0, 0);
		if (cart.length > 0) {
			setCartState([...cart]);
			console.log("cartstate", cart, cartState);
		}
	}, []);

	const calculateShippingCost = (cartParam) => {
		let localCart = cartParam ? [...cartParam] : [...cart];
		if (localCart.length > 0) {
			let cartCopy = [...localCart];
			cartCopy.forEach((item) => {
				if (item.distance == undefined || item.distance > 30) {
					item.shippingCost = 40 * item.qty;
				} else {
					item.shippingCost = 0;
				}
			});
			console.log("cartCopy", cartCopy);
			let shipping = cartCopy.reduce(
				(acc, currVal) => acc + currVal.shippingCost,
				0
			);
			console.log("shippingost", shipping);
			setShippingCost(shipping);
			addShippingCharge(shipping);
			setCartState(cartCopy);
		}
	};

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

	const increaseCattQty = (event, product) => {
		let cartCopy = [...cartState];
		const cProduct = Object.assign({}, product);
		setQty(event.target.value);
		cProduct.qty = event.target.value;
		cProduct.type = "UPDATE_ONLY_QTY";
		const addProductItem = { ...cProduct };
		//console.log("cart", cart);
		addToCart(addProductItem);
		cartCopy.forEach((item) => {
			if (product.objectId == item.objectId) {
				item.qty = event.target.value;
			}
		});
		setCartState(cartCopy);
		calculateShippingCost(cartCopy);
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
										Delete all items
									</Link>
								</h4>
							) : (
								<br />
							)}
							{cartState.length === 0 ? (
								<Box mx={2} py={4} textAlign="center">
									<h4>Your E-Life Cart is empty.</h4>
								</Box>
							) : (
								cartState.map((item, index) => (
									<Box key={index} mx={2} pt={1}>
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
													<Box
														variant="body2"
														color="text.secondary"
														className="productQTY"
													>
														<span>Qty: &nbsp;</span>
														<FormControl variant="outlined">
															<Select
																labelId="qty"
																id="qty"
																data-value={
																	index
																}
																value={item.qty}
																className="qtyDropdow"
																onChange={(
																	event
																) =>
																	increaseCattQty(
																		event,
																		item
																	)
																}
															>
																{Array.from(
																	Array(10),
																	(e, i) => {
																		return (
																			<MenuItem
																				key={
																					i
																				}
																				value={
																					i +
																					1
																				}
																			>
																				{i +
																					1}
																			</MenuItem>
																		);
																	}
																)}
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
													</Box>
												</Box>
											</Grid>
											<Grid item xs={2}>
												<Box
													variant="subtitle1"
													component="div"
													className="cart-price"
												>
													<Box textAlign="right">
														&#8377;{item.price}
													</Box>
													{item.shippingCost > 0 && (
														<Box textAlign="right">
															Shipping: &#8377;
															{item.shippingCost *
																item.qty}
														</Box>
													)}
												</Box>
											</Grid>
										</Grid>
									</Box>
								))
							)}
						</Paper>
					</Grid>
					<Grid item xs={12} md={4} className="pd ">
						<CartSubtotal {...props} shippingCost={shippingCost} />
					</Grid>
				</Grid>
			</Container>
		</CartContainer>
	);
}

export default Cart;

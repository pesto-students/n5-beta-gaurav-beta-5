import React, { useState, useEffect } from "react";
import {
	Grid,
	Button,
	Container,
	Paper,
	ButtonBase,
	Typography,
	Box,
} from "@material-ui/core";
import { OrderContainer } from "../../styles/orders.styles";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ordersAction } from "../../state";

import { getOrdersApi } from "../../api/order/ordersApi";
import OrdersSkeleton from "./ordersSkeleton";
import moment from "moment";
function Orders() {
	const dispatch = useDispatch();
	const { orderListSuccess } = bindActionCreators(ordersAction, dispatch);
	const { orderListArry } = useSelector((state) => state.orderState);
	const [orderListState, setOrderListState] = useState([]);
	const userSession = JSON.parse(localStorage.getItem("session"));
	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
	};

	useEffect(() => {
		// orderList({ userId: userSession.objectId });
		if (userSession === null) return;
		setIsLoading(true);
		getOrdersApi({ userId: userSession.objectId }).then((data) => {
			console.log("order");
			orderListSuccess(data.result);
			setIsLoading(false);
		});
	}, []);

	useEffect(() => {
		console.log("orderListArr", orderListArry);

		let sortedOrders = sortByDate(orderListArry);
		console.log("sorted Orders", sortedOrders);
		setOrderListState(sortedOrders);
	}, [orderListArry]);

	const sortByDate = (orders) => {
		let sortedOrders = orders.sort(function (a, b) {
			var key1 = new Date(a.createdAt);
			var key2 = new Date(b.createdAt);
			return key2 - key1;
			// if (key1 < key2) {
			// 	return -1;
			// } else if (key1 == key2) {
			// 	return 0;
			// } else {
			// 	return 1;
			// }
		});

		return sortedOrders;
	};

	return (
		<OrderContainer>
			<Container spacing={8} className="container">
				<Grid container spacing={3}>
					<Grid item xs={12} md={8}>
						<Paper elevation={0} className="paper-main">
							<h3 className="cart-title">ORDERS</h3>
							{isLoading && <OrdersSkeleton />}
							{orderListState.length == 0 && (
								<Paper variant="outlined">
									<Grid
										container
										alignContent="center"
										alignItems="center"
										item
										className="no-orders"
									>
										<Grid item xs={12}>
											{isLoading
												? "Loading..."
												: "No orders to show"}
										</Grid>
									</Grid>
								</Paper>
							)}
							{orderListState.length > 0 &&
								orderListState.map((order) => (
									<Paper
										key={order.objectId}
										variant="outlined"
										className="paper-order"
									>
										<Box mx="5" pl="5" pt="5">
											<Grid
												container
												item
												className="order-heading"
											>
												<Grid item xs={6}>
													Order ID: {order.orderId}
													<br />
													Date:{" "}
													{moment(
														order.createdAt
													).format("DD-MMM-YYYY")}
												</Grid>
												<Grid item xs={6}>
													<Box textAlign="right">
														Delivery:{" "}
														{order.deliveryStatus}
														<br />
														Item(s) Subtotal: ₹
														{order.totalAmount /
															100 -
															order.shippingCharges}
														<br /> Shipping: ₹
														{order.shippingCharges}
														<br />
														Total: ₹
														{order.totalAmount /
															100}
													</Box>
												</Grid>
											</Grid>
										</Box>
										{order.Products &&
											order.Products.map(
												(product, index) => (
													<Box
														key={index}
														mx={2}
														pt={1}
													>
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
																		src={
																			product.image
																		}
																	/>
																</ButtonBase>
															</Grid>

															<Grid
																item
																xs={10}
																sm
															>
																<Box mx={4}>
																	<Typography
																		gutterBottom
																		component="div"
																		className="productName"
																	>
																		{
																			product.name
																		}
																	</Typography>

																	<Typography
																		variant="body2"
																		color="textSecondary"
																		className="productQTY"
																	>
																		<span>
																			Qty:
																			&nbsp;
																		</span>
																		{
																			product.quantity
																		}
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
																		&#8377;
																		{
																			product.price
																		}
																	</Box>
																</Typography>
															</Grid>
														</Grid>
													</Box>
												)
											)}
									</Paper>
								))}
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper
							elevation={0}
							className="bg-white flex-height continue-shopping-paper"
						>
							<Box
								mx={3}
								pb={4}
								pt={3}
								className="continue-shopping"
							>
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
		</OrderContainer>
	);
}

export default Orders;

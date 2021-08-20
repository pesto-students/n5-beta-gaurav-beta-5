import React, { useEffect } from "react";
import {
	Grid,
	Button,
	Container,
	Paper,
	Typography,
	Box,
} from "@material-ui/core";
import { CartContainer } from "../../styles/cart.styles";

import applogo from "../../assets/images/E-Life_logo.png";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";
import { ordersAction, addToCartActions } from "../../state";
import { isEmpty } from "lodash";
import Cart from "../../cart/components/cart";
import { toast } from "react-toastify";
import useScript from "../../shared/hook/useScript";

function MakePayment() {
	const dispatch = useDispatch();

	const { currentAddress } = useSelector((state) => state.addressState);
	const { session } = useSelector((state) => state.auth);
	const userSession = JSON.parse(localStorage.getItem("session"));
	useEffect(() => {
		console.log("currentAddress", currentAddress);
	}, [currentAddress]);

	const { cart, totalShippingCharge } = useSelector((state) => state.myCart);

	const { makeOrder } = bindActionCreators(ordersAction, dispatch);
	const { deleteToCart } = bindActionCreators(addToCartActions, dispatch);

	const preventDefault = (event) => event.preventDefault();
	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
	};

	const calculate = () => {
		const shippingCharges = totalShippingCharge;
		return (
			cart.reduce((acc, item) => acc + item.subTotal, shippingCharges) *
			100
		);
	};

	const getProducts = () => {
		const products = [];
		cart.forEach((item) => {
			let prodObj = {
				id: item.objectId,
				quantity: item.qty,
				name: item.name,
				description: item.description,
				image: item.image1.url,
				price: item.price,
			};

			products.push(prodObj);
		});

		return products;
	};

	const getShippingAddress = () => {
		const shippingAdd = {
			userId: userSession.objectId || "",
			firstName: currentAddress.firstName || "",
			lastName: currentAddress.lastName || "",
			mobileNo: currentAddress.mobileNo || "",
			pincode: currentAddress.pincode || "",
			addressTitle: currentAddress.addressTitle || "",
			city: currentAddress.city || "",
			state: currentAddress.state || "",
			country: currentAddress.country || "",
			streetAddress: currentAddress.streetAddress || "",
		};

		return shippingAdd;
	};

	const orderBody = (transStatus = "success", response) => {
		const orderId = Date.now().toString();
		const shippingCharges = totalShippingCharge;
		const body = {
			transactionId: response.razorpay_payment_id,
			orderId: orderId,
			userId: userSession.objectId,
			transactionStatus: transStatus,
			deliveryStatus: "pending",
			shippingAddress: getShippingAddress(),
			shippingCharges: shippingCharges,
			totalAmount: calculate(),
			Products: getProducts(),
			reason: response?.error?.reason || "",
		};

		return body;
	};

	useScript("https://checkout.razorpay.com/v1/checkout.js");

	const options = {
		key: "rzp_test_2rgkjmQlqzIKzO", // Enter the Key ID generated from the Dashboard
		amount: calculate(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to
		currency: "INR",
		name: "E-Life",
		description: "Order Transaction",
		image: applogo,
		//	order_id: Date.now().toString(), //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
		handler: function (response) {
			//intgrate order api
			const body = orderBody("success", response);

			makeOrder(body);
			//alert(response.razorpay_payment_id);
			handleClick("thankYou");
			deleteToCart({ id: 0, type: "REMOVE_ALL" });

			//alert(response.razorpay_order_id);
			//alert(response.razorpay_signature);
		},
		prefill: {
			name: userSession?.name,
			email: userSession?.email,
			contact: userSession?.phone,
		},
		modal: {
			ondismiss: function () {
				const ele = document.querySelectorAll(".razorpay-container");
				ele.forEach(function (a, i) {
					console.log(a, i, ele.length);
					if (i + 1 !== ele.length) {
						a.remove();
					} else {
						a.style.display = "none";
					}
				});
				//console.log("Checkout form closed");
			},
		},
		notes: {
			address: "Razorpay Corporate Office",
		},
		theme: {
			color: "#3399cc",
		},
	};

	const handlePayment = (e) => {
		if (isEmpty(currentAddress)) {
			toast.error("Please Provide Delivery Address.");
			return;
		}
		var rzp1 = new window.Razorpay(options);
		rzp1.on("payment.failed", function (response) {
			//order api
			const body = orderBody("failed", response);
			makeOrder(body);
			rzp1.close();
			handleClick("thankYou");
			deleteToCart({ id: 0, type: "REMOVE_ALL" });

			// alert(response.error.code);
			// alert(response.error.description);
			// alert(response.error.source);
			// alert(response.error.step);
			// alert(response.error.reason);
			// alert(response.error.metadata.order_id);
			// alert(response.error.metadata.payment_id);
		});
		rzp1.open();
		e.preventDefault();
	};

	return (
		<CartContainer>
			<Cart
				currentAddress={isEmpty(currentAddress) ? null : currentAddress}
				type="payment"
				spacing="1"
				handlePayment={handlePayment}
			/>
			{(session !== undefined || session !== null) && (
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
												{
													currentAddress.streetAddress
												}, {currentAddress.city}
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
									{(session !== undefined ||
										session !== null) && (
										<Box pb={4}>
											<Button
												variant="contained"
												disabled={session === null}
												className="address-change"
												onClick={() =>
													handleClick(
														"/address-management"
													)
												}
											>
												ADD/EDIT ADDRESS
											</Button>
										</Box>
									)}
								</Box>
							</Paper>
						</Grid>
					</Grid>
				</Container>
			)}
		</CartContainer>
	);
}

export default MakePayment;

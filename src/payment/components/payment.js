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
import applogo from "../../assets/images/E-Life_logo.png";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";
import { mapAction, ordersAction } from "../../state";
import { isEmpty } from "lodash";
import Cart from "../../cart/components/cart";

import useScript from "../../shared/hook/useScript";

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

	const { cart } = useSelector((state) => state.myCart);

	const { showMap } = bindActionCreators(mapAction, dispatch);

	const { makeOrder } = bindActionCreators(ordersAction, dispatch);
	const preventDefault = (event) => event.preventDefault();
	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
		if (isEmpty(userSelectedLocation)) showMap(true);
	};

	const calculate = () => {
		return cart.reduce((acc, item) => acc + item.price, 0) * 100;
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
		const shipingaddress = {
			userId: currentAddress.userId || "",
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

		return shipingaddress;
	};

	const orderBody = (transStatus = "success", response) => {
		const orderId = Date.now().toString();
		const body = {
			transactionId: response.razorpay_payment_id,
			orderId: orderId,
			userId: userSession.objectId,
			transactionStatus: transStatus,
			deliveryStatus: "pending",
			shippingAddress: getShippingAddress(),
			shippingCharges: 10,
			totalAmount: calculate(),
			Products: getProducts(),
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
			//alert(response.razorpay_order_id);
			//alert(response.razorpay_signature);
		},
		prefill: {
			name: userSession?.name,
			email: userSession?.email,
			contact: userSession?.phone,
		},
		notes: {
			address: "Razorpay Corporate Office",
		},
		theme: {
			color: "#3399cc",
		},
	};

	const handlePayment = (e) => {
		var rzp1 = new window.Razorpay(options);
		rzp1.on("payment.failed", function (response) {
			//order api
			const body = orderBody("failed", response);
			makeOrder(body);

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

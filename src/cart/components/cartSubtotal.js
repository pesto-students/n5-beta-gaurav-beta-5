import React from "react";
import { Button, Paper, Typography, Box } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCartActions, authActions } from "../../state";
import { isEmpty } from "lodash";
function CartSubtotal(props) {
	const history = useHistory();
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.myCart);
	const { session } = useSelector((state) => state.auth);
	const { storeRoute } = bindActionCreators(authActions, dispatch);
	const userSession = JSON.parse(localStorage.getItem("session"));
	const handleClick = (route) => {
		history.push(route);
	};
	const handleProceed = (route) => {
		if (userSession == null) {
			storeRoute("/makepayment");
			history.push("/signin");
			return;
		}
		history.push(route);
	};
	const { currentAddress } = useSelector((state) => state.addressState);
	return (
		<Paper
			elevation={0}
			className={props.type ? "flex-height bg-white" : "no-flex"}
		>
			<Box className="semiBold border-bottom">
				<Box mx={3} my={1} pt={4}>
					Total ({cart.reduce((acc, item) => acc + item.qty, 0)}{" "}
					items):&nbsp;&nbsp;&nbsp;
					<span className="total-price">
						&#8377;{" "}
						{cart.reduce((acc, item) => acc + item.subTotal, 0) +
							props.shippingCost}
					</span>
					<br />
					{props.shippingCost > 0 &&
						`(Including ₹${props.shippingCost} Shipping Charges )`}
					{props.shippingCost == 0 && `Free Delivery`}
				</Box>
			</Box>

			{!props.type ? (
				<Box mx={3} pb={4}>
					{cart.length > 0 && (
						<Button
							variant="contained"
							className="submit-change"
							onClick={() => handleProceed("/makepayment")}
						>
							PROCEED TO BUY
						</Button>
					)}
					<Button
						variant="contained"
						className="submit-change ctn-shopping-btn"
						onClick={() => handleClick("/categories")}
					>
						CONTINUE SHOPPING
					</Button>
				</Box>
			) : (
				<Box mx={3} pb={4}>
					{cart.length > 0 && (
						<div>
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
							<Button
								variant="contained"
								className="submit-change"
								onClick={props?.handlePayment}
							>
								MAKE PAYMENT
							</Button>
						</div>
					)}

					{cart.length === 0 && (
						<Button
							variant="contained"
							className="submit-change ctn-shopping-btn"
							onClick={() => handleClick("/categories")}
						>
							CONTINUE SHOPPING
						</Button>
					)}
					<Button
						variant="contained"
						disabled={session === null}
						className="address-change below-payment"
						onClick={() => handleClick("/address-management")}
					>
						ADD/EDIT ADDRESS
					</Button>
				</Box>
			)}
		</Paper>
	);
}

export default CartSubtotal;

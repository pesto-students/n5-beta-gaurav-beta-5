import React, { useState, useEffect } from "react";
import { Button, Paper, Typography, Box } from "@material-ui/core";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
function CartSubtotal(props) {
	const history = useHistory();
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.myCart);
	const userSession = JSON.parse(localStorage.getItem("session"));
	const handleClick = (route) => {
		history.push(route);
	};
	const { currentAddress } = useSelector((state) => state.addressState);
	return (
		<Paper
			elevation={0}
			className={props.type ? "flex-height bg-white" : "no-flex"}
		>
			<Typography className="semiBold border-bottom">
				<Box mx={3} my={1} pt={4}>
					Subtotal ({cart.length} items):&nbsp;&nbsp;&nbsp;
					<span className="total-price">
						&#8377;{" "}
						{cart.reduce((acc, item) => acc + item.price, 0)}
					</span>
				</Box>
			</Typography>

			{!props.type ? (
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
			) : (
				<Box mx={3} pb={4}>
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
								{userSession !== null ? userSession.phone : ""}
								<br />
								Pin: {currentAddress.pincode}
								<br />
							</>
						)}
					</Typography>
					<Button
						variant="contained"
						className="submit-change"
						onClick={() => handleClick("/orders")}
					>
						MAKE PAYMENT
					</Button>
				</Box>
			)}
		</Paper>
	);
}

export default CartSubtotal;

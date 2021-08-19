import React, { useEffect } from "react";
import { Grid, Button, Container, Box } from "@material-ui/core";

import { ThankYouContainer } from "../../styles/thankyou.styles";
import ThankYouImage from "../../assets/images/thankyou.jpg";
import SorryImage from "../../assets/images/sorryimg.png";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
function Thankyou() {
	const { orderSuccess } = useSelector((state) => state.orderState);

	console.log("orderSuccess", orderSuccess);

	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<ThankYouContainer>
			<Container spacing={8} className="container">
				<Grid
					container
					spacing={3}
					justifyContent="center"
					alignItems="center"
				>
					<Grid item xs={12} md={6} className="main">
						{orderSuccess !== null &&
						orderSuccess?.transactionStatus === "success" ? (
							<div class="customBold">
								<Box m={3}>
									<img src={ThankYouImage} />
								</Box>
								<Box variant="div" m={3}>
									<span>THANK YOU</span>
								</Box>
								<Box m={3}>
									Order Placed Successfully! <br /> Your Order
									ID :{orderSuccess?.orderId}
								</Box>
							</div>
						) : (
							<div class="customBold error">
								<Box m={3}>
									<img src={SorryImage} />
								</Box>
								<Box m={3}>
									<span>SORRY</span>
								</Box>
								<Box m={3}>You Order Failed.</Box>
							</div>
						)}
					</Grid>
					<Grid
						container
						spacing={3}
						justifyContent="center"
						alignItems="center"
					>
						<Grid item xs={12} md={6}>
							<Box pb={2} pt={2}>
								<Button
									variant="contained"
									className="submit-change ctn-shopping-btn"
									onClick={() => handleClick("/categories")}
								>
									CONTINUE SHOPPING
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</ThankYouContainer>
	);
}

export default Thankyou;

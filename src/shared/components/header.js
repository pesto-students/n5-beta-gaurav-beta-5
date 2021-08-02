import React from "react";
import {
	HeaderDiv,
	FreeShippingDiv,
	FreeShippingIcon,
	FreeShippingText,
	SameDayDiv,
	HeaderLinksDiv,
	HeaderLink,
} from "../../styles/header.styles";
import Container from "@material-ui/core/Container";

function Header() {
	return (
		<HeaderDiv>
			<Container maxWidth="lg">
				<FreeShippingDiv>
					<FreeShippingIcon />
					<FreeShippingText>Free Shipping over ₹100</FreeShippingText>
				</FreeShippingDiv>
				<SameDayDiv>SAME DAY DELIVERY FROM STORES NEAR YOU</SameDayDiv>
				<HeaderLinksDiv>
					<HeaderLink>FAQ</HeaderLink>
					<HeaderLink>Contact</HeaderLink>
				</HeaderLinksDiv>
			</Container>
		</HeaderDiv>
	);
}

export default Header;

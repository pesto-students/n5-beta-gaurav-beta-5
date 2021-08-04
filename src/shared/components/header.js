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
import { Container, Hidden } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Header() {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<HeaderDiv>
			<Container maxWidth="lg">
				<FreeShippingDiv isSmall={isSmall}>
					<FreeShippingIcon />
					<FreeShippingText>Free Shipping over ₹100</FreeShippingText>
				</FreeShippingDiv>
				<Hidden smDown>
					<SameDayDiv>
						SAME DAY DELIVERY FROM STORES NEAR YOU
					</SameDayDiv>
				</Hidden>

				<HeaderLinksDiv isSmall={isSmall}>
					<HeaderLink>FAQ</HeaderLink>
					<HeaderLink>Contact</HeaderLink>
				</HeaderLinksDiv>
			</Container>
		</HeaderDiv>
	);
}

export default Header;

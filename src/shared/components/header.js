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
import { useHistory } from "react-router-dom";
function Header() {
	const history = useHistory();
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
	const handleClick = (route, id) => {
		history.push(route);
	};

	return (
		<HeaderDiv>
			<Container maxWidth="lg">
				<FreeShippingDiv isSmall={isSmall}>
					<FreeShippingIcon />
					<FreeShippingText>
						Free Shipping from Local Stores
					</FreeShippingText>
				</FreeShippingDiv>
				<Hidden smDown>
					<SameDayDiv>
						SAME DAY DELIVERY FROM STORES NEAR YOU
					</SameDayDiv>
				</Hidden>

				<HeaderLinksDiv isSmall={isSmall}>
					<HeaderLink onClick={() => handleClick("/content#faq")}>
						FAQ
					</HeaderLink>
					<HeaderLink onClick={() => handleClick("/content#contact")}>
						Contact
					</HeaderLink>
				</HeaderLinksDiv>
			</Container>
		</HeaderDiv>
	);
}

export default Header;

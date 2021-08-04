import React from "react";
import {
	FooterContainer,
	FooterTitle,
	FooterSubscribeContainer,
	FooterSubscribeInput,
	FooterSubscribeBtn,
	FooterLogo,
	FooterSMIcons,
	FooterSMLink,
	FooterLinksTitle,
	FooterLinksUl,
	FooterLink,
} from "../../styles/footer.styles";
import { Container, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
function Footer() {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<FooterContainer>
			<Container>
				<FooterTitle>Want updates from stores near you?</FooterTitle>
				<FooterSubscribeContainer>
					<FooterSubscribeInput isSmall={isSmall} />
					<FooterSubscribeBtn isSmall={isSmall}>
						Subscribe
					</FooterSubscribeBtn>
				</FooterSubscribeContainer>
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="center"
					spacing={isSmall ? 0 : 7}
					className="footer-links"
				>
					<Grid item lg xs="12">
						<FooterLogo>E-Life.</FooterLogo>
						<FooterSMIcons>
							<FooterSMLink>
								<Facebook className="footer-sm-icon" />
							</FooterSMLink>
							<FooterSMLink>
								<Instagram className="footer-sm-icon" />
							</FooterSMLink>
							<FooterSMLink>
								<Twitter className="footer-sm-icon" />
							</FooterSMLink>
						</FooterSMIcons>
					</Grid>
					<Grid item lg xs="6">
						<FooterLinksTitle>SUPPORT</FooterLinksTitle>
						<FooterLinksUl>
							<FooterLink>Contact Us</FooterLink>
							<FooterLink>FAQ</FooterLink>
						</FooterLinksUl>
					</Grid>
					<Grid item lg xs="6">
						<FooterLinksTitle>Shop</FooterLinksTitle>
						<FooterLinksUl>
							<FooterLink>Furniture Shopping</FooterLink>
							<FooterLink>Appliances Shopping</FooterLink>
							<FooterLink>Mobiles Shopping</FooterLink>
						</FooterLinksUl>
					</Grid>
					<Grid item lg xs="6">
						<FooterLinksTitle>COMPANY</FooterLinksTitle>
						<FooterLinksUl>
							<FooterLink>About Us</FooterLink>
							<FooterLink>Terms & Conditions</FooterLink>
						</FooterLinksUl>
					</Grid>
					<Grid item lg xs="6">
						<FooterLinksTitle>CONTACT</FooterLinksTitle>
						<FooterLinksUl>
							<FooterLink>1-999-555-6664</FooterLink>
							<FooterLink>1-999-555-6665</FooterLink>
							<FooterLink>contact@elife.com</FooterLink>
						</FooterLinksUl>
					</Grid>
				</Grid>
			</Container>
		</FooterContainer>
	);
}

export default Footer;

import React, { useState } from "react";
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
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { productsAction } from "../../state";

function Footer() {
	const history = useHistory();
	const theme = useTheme();
	const dispatch = useDispatch();
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
	const [subEmail, setSubEmail] = useState(null);

	const furnitureId = "y4b5xqVFzM";
	const applianceId = "djrtQawPPX";
	const { getProducts } = bindActionCreators(productsAction, dispatch);
	const subscribe = () => {
		if (subEmail == null || subEmail == "") {
			toast.error("Please provide email.");
			return;
		}
		if (validateEmail(subEmail)) {
			toast.success("You are now Subscribed to our Newsletters.");
			return;
		}

		toast.error("Please Enter Valid email.");
	};

	const handleClick = (route, id) => {
		window.scrollTo(0, 0);
		history.push(route);
		//id ?  : null;
		if (id) {
			getProducts({ body: { categoryId: id }, type: "category" });
		}
	};

	const validateEmail = (email) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	return (
		<FooterContainer>
			<Container>
				<FooterTitle>Want updates from stores near you?</FooterTitle>
				<FooterSubscribeContainer>
					<FooterSubscribeInput
						onChange={(e) => setSubEmail(e.target.value)}
						isSmall={isSmall}
					/>
					<FooterSubscribeBtn onClick={subscribe} isSmall={isSmall}>
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
					<Grid item lg xs={12}>
						<FooterLogo onClick={() => handleClick("/")}>
							E-Life.
						</FooterLogo>
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
					<Grid item lg xs={6}>
						<FooterLinksTitle>SUPPORT</FooterLinksTitle>
						<FooterLinksUl>
							<FooterLink
								onClick={() => handleClick("/content#contact")}
							>
								Contact Us
							</FooterLink>
							<FooterLink
								onClick={() => handleClick("/content#faq")}
							>
								FAQ
							</FooterLink>
						</FooterLinksUl>
					</Grid>
					<Grid item lg xs={6}>
						<FooterLinksTitle>Shop</FooterLinksTitle>
						<FooterLinksUl>
							<FooterLink
								onClick={() =>
									handleClick(
										`/categories?id=${furnitureId}`,
										furnitureId
									)
								}
							>
								Furniture Shopping
							</FooterLink>
							<FooterLink
								onClick={() =>
									handleClick(
										`/categories?id=${applianceId}`,
										applianceId
									)
								}
							>
								Appliances Shopping
							</FooterLink>
							<FooterLink
								onClick={() =>
									handleClick(
										"/categories/products?subCat=ngZL0AkYAz"
									)
								}
							>
								Mobiles Shopping
							</FooterLink>
						</FooterLinksUl>
					</Grid>
					<Grid item lg xs={6}>
						<FooterLinksTitle>COMPANY</FooterLinksTitle>
						<FooterLinksUl>
							<FooterLink
								onClick={() => handleClick("/content#about")}
							>
								About Us
							</FooterLink>
							<FooterLink
								onClick={() =>
									handleClick("/terms-and-conditions")
								}
							>
								Terms & Conditions
							</FooterLink>
						</FooterLinksUl>
					</Grid>
					<Grid item lg xs={6}>
						<FooterLinksTitle
							onClick={() => handleClick("/content#contact")}
						>
							CONTACT
						</FooterLinksTitle>
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

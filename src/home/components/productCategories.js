import React from "react";

import { Container, Grid } from "@material-ui/core";
import LocalGlobalSwitch from "../../shared/components/localGlobalSwitch";
import {
	PopularProductCard,
	PopularProductOverlay,
	PopularProductOverlayText,
	WhatsNewCategories,
	WhatsNewSection,
	WhatsNewSmallText,
	WhatsNewTitle,
} from "../../styles/productCategoriesStyles";
import imgMobile from "../../assets/images/mobile.jpg";
import imgLaptop from "../../assets/images/laptop.jpg";
import imgsubHomeAppliance from "../../assets/images/applianceHome.jpg";
import imgSwingChair from "../../assets/images/swingChair.jpg";
import imgCurtain from "../../assets/images/curtain.jpg";
import imgFan from "../../assets/images/Fan.jpg";
import imgsubHomeDecor from "../../assets/images/decorHome.jpg";
import { ShopButton } from "../../styles/shopButton.styles";
import { ArrowForwardOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
function ProductCategories() {
	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
	};
	return (
		<>
			<Container>
				<LocalGlobalSwitch />
				<WhatsNewSection>
					<WhatsNewSmallText>WHAT’S NEW</WhatsNewSmallText>
					<WhatsNewTitle>New Products</WhatsNewTitle>
					<WhatsNewCategories>
						Electronics, Clothing, Home Decore, Appliances
					</WhatsNewCategories>
				</WhatsNewSection>
				<Grid container spacing={4}>
					<Grid item lg="4" xs="12">
						<PopularProductCard bgImg={imgMobile}>
							<PopularProductOverlay>
								<PopularProductOverlayText>
									Mobile Phones
									<ShopButton
										className="category-btn"
										bg="white"
										width="230px"
									>
										Shop Now
										<ArrowForwardOutlined className="arrow-icon" />
									</ShopButton>
								</PopularProductOverlayText>
							</PopularProductOverlay>
						</PopularProductCard>
					</Grid>
					<Grid item lg="8" xs="12">
						<PopularProductCard bgImg={imgLaptop}>
							<PopularProductOverlay>
								<PopularProductOverlayText>
									Laptops
									<ShopButton
										className="category-btn"
										bg="white"
										width="230px"
									>
										Shop Now
										<ArrowForwardOutlined className="arrow-icon" />
									</ShopButton>
								</PopularProductOverlayText>
							</PopularProductOverlay>
						</PopularProductCard>
					</Grid>
					<Grid item lg="8" xs="12">
						<PopularProductCard bgImg={imgsubHomeAppliance}>
							<PopularProductOverlay>
								<PopularProductOverlayText>
									Home Appliances
									<ShopButton
										className="category-btn"
										bg="white"
										width="230px"
									>
										Shop Now
										<ArrowForwardOutlined className="arrow-icon" />
									</ShopButton>
								</PopularProductOverlayText>
							</PopularProductOverlay>
						</PopularProductCard>
					</Grid>
					<Grid item lg="4" xs="12">
						<PopularProductCard bgImg={imgsubHomeDecor}>
							<PopularProductOverlay>
								<PopularProductOverlayText>
									Home Decor
									<ShopButton
										className="category-btn"
										bg="white"
										width="230px"
										onClick={() =>
											handleClick("/categories")
										}
									>
										Shop Now
										<ArrowForwardOutlined className="arrow-icon" />
									</ShopButton>
								</PopularProductOverlayText>
							</PopularProductOverlay>
						</PopularProductCard>
					</Grid>
				</Grid>
				<WhatsNewSection>
					<WhatsNewTitle>Featured Products</WhatsNewTitle>
				</WhatsNewSection>
				<Grid container spacing={4}>
					<Grid item lg="4" xs="12">
						<PopularProductCard
							bgImg={imgSwingChair}
						></PopularProductCard>
					</Grid>
					<Grid item lg="4" xs="12">
						<PopularProductCard
							bgImg={imgCurtain}
						></PopularProductCard>
					</Grid>
					<Grid item lg="4" xs="12">
						<PopularProductCard bgImg={imgFan}></PopularProductCard>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default ProductCategories;

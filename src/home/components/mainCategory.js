import React from "react";
import {
	MainCategoryContainer,
	MainCategoryCard,
	CardTitle,
	FeatureDiv,
	FeatureTitle,
	FeatureSubtitle,
	FeatureIconBlock,
	FeatureTextBlock,
} from "../../styles/mainCategory.styles";
import { Container, Grid } from "@material-ui/core";
import { ShopButton } from "../../styles/shopButton.styles";
import imgAppliance from "../../assets/images/appliance.jpg";
import imgFurniture from "../../assets/images/furniture.jpg";
import imgHomeDecor from "../../assets/images/homeDecor.jpg";
import {
	ArrowForwardOutlined,
	PublicOutlined,
	LocationOnOutlined,
	LockOutlined,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
function MainCategory() {
	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
	};
	return (
		<MainCategoryContainer>
			<MainCategoryCard image={imgAppliance}>
				<CardTitle>Appliances</CardTitle>
				<ShopButton className="category-btn" bg="white" width="60%">
					Shop Appliances
					<ArrowForwardOutlined className="arrow-icon" />
				</ShopButton>
			</MainCategoryCard>
			<MainCategoryCard image={imgFurniture}>
				<CardTitle>Furniture</CardTitle>
				<ShopButton className="category-btn" bg="white" width="60%">
					Shop Furniture
					<ArrowForwardOutlined className="arrow-icon" />
				</ShopButton>
			</MainCategoryCard>
			<MainCategoryCard image={imgHomeDecor}>
				<CardTitle>Home Decor</CardTitle>
				<ShopButton
					className="category-btn"
					bg="white"
					width="60%"
					onClick={() => handleClick("/categories")}
				>
					Shop Home Decor
					<ArrowForwardOutlined className="arrow-icon" />
				</ShopButton>
			</MainCategoryCard>
			<Container>
				<Grid container className="elife-features">
					<Grid item xs="12" lg="4">
						<FeatureDiv>
							<FeatureIconBlock className="feature-icon-block">
								<PublicOutlined className="feature-icon" />
							</FeatureIconBlock>
							<FeatureTextBlock>
								<FeatureTitle>GLOBAL STORES</FeatureTitle>
								<FeatureSubtitle>
									Shop from all global stores
								</FeatureSubtitle>
							</FeatureTextBlock>
						</FeatureDiv>
					</Grid>
					<Grid item xs="12" lg="4">
						<FeatureDiv>
							<FeatureIconBlock className="feature-icon-block">
								<LocationOnOutlined className="feature-icon" />
							</FeatureIconBlock>
							<FeatureTextBlock>
								<FeatureTitle>Local STORES</FeatureTitle>
								<FeatureSubtitle>
									Shop from stores near you
								</FeatureSubtitle>
							</FeatureTextBlock>
						</FeatureDiv>
					</Grid>
					<Grid item xs="12" lg="4">
						<FeatureDiv>
							<FeatureIconBlock className="feature-icon-block">
								<LockOutlined className="feature-icon" />
							</FeatureIconBlock>
							<FeatureTextBlock>
								<FeatureTitle>Secure Shopping</FeatureTitle>
								<FeatureSubtitle>
									You are in safe hands
								</FeatureSubtitle>
							</FeatureTextBlock>
						</FeatureDiv>
					</Grid>
				</Grid>
			</Container>
		</MainCategoryContainer>
	);
}

export default MainCategory;

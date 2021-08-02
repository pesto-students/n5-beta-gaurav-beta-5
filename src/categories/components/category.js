import React from "react";
import homeDecorBannerImg from "../../assets/images/homeDecorBanner.jpg";
import carpetBannerImg from "../../assets/images/carpet.jpg";
import wallHangingBannerImg from "../../assets/images/wallhanging.jpg";
import {
	CategoryBanner,
	CategoryBannerLink,
	CategoryBannerLinksContainer,
	CategoryBannerTitle,
	CategoryContainer,
	CategoryList,
	CategoryListTitle,
	CategoryMainTitle,
	CategoryProductSlider,
	CategorySelectContainer,
	CategoryBannerText,
} from "../../styles/category.styles";
import { Container, Grid } from "@material-ui/core";
import ProductCard from "../../shared/components/productCard";
import LocalGlobalSwitch from "../../shared/components/localGlobalSwitch";
import { useHistory } from "react-router-dom";
function Category() {
	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
	};
	return (
		<CategoryContainer>
			<CategoryBanner banner={homeDecorBannerImg} repeat={true}>
				<CategoryBannerTitle>Home Decor</CategoryBannerTitle>
				<CategoryBannerLinksContainer>
					<CategoryBannerLink>Home Appliances</CategoryBannerLink>
					<CategoryBannerLink>Furniture</CategoryBannerLink>
					<CategoryBannerLink className="active">
						Home Decor
					</CategoryBannerLink>
				</CategoryBannerLinksContainer>
			</CategoryBanner>
			<Container maxWidth={false} className="category-content">
				<Grid container spacing="5" alignItems="stretch">
					<Grid item lg="3">
						<CategorySelectContainer className="category-selector-container">
							<CategoryListTitle>
								Clocks
								<CategoryList>Wall Clocks</CategoryList>
								<CategoryList>Alarm Clocks</CategoryList>
								<CategoryList>Ethnic Clocks</CategoryList>
								<CategoryList>Digital Clocks</CategoryList>
							</CategoryListTitle>
							<CategoryListTitle>
								Clocks
								<CategoryList>Wall Clocks</CategoryList>
								<CategoryList>Alarm Clocks</CategoryList>
								<CategoryList>Ethnic Clocks</CategoryList>
								<CategoryList>Digital Clocks</CategoryList>
							</CategoryListTitle>
							<CategoryListTitle>
								Clocks
								<CategoryList>Wall Clocks</CategoryList>
								<CategoryList>Alarm Clocks</CategoryList>
								<CategoryList>Ethnic Clocks</CategoryList>
								<CategoryList>Digital Clocks</CategoryList>
							</CategoryListTitle>
						</CategorySelectContainer>
					</Grid>
					<Grid item lg="9" xs="12">
						<LocalGlobalSwitch />
						<CategoryMainTitle>
							Popular Products From Stores Near You
						</CategoryMainTitle>
						<CategoryProductSlider>
							<Grid
								container
								spacing="0"
								alignItems="center"
								alignContent="center"
								className="product-grid"
							>
								<Grid lg="3">
									<ProductCard handleClick={handleClick} />
								</Grid>
								<Grid lg="3">
									<ProductCard />
								</Grid>
								<Grid lg="3">
									<ProductCard />
								</Grid>
								<Grid lg="3">
									<ProductCard />
								</Grid>
							</Grid>
						</CategoryProductSlider>
						<Grid lg="12">
							<CategoryBanner
								banner={wallHangingBannerImg}
								className="category-sub-banner"
							>
								<CategoryBannerText
									top="70%"
									left="6%"
									color="black"
								>
									WALL HANGINGS & SHOW <br />
									PIECES
								</CategoryBannerText>
							</CategoryBanner>
						</Grid>
						<Grid lg="12">
							<CategoryBanner
								banner={carpetBannerImg}
								className="category-sub-banner"
							>
								<CategoryBannerText
									top="55%"
									left="10%"
									color="white"
									size="48px"
								>
									CARPETS
								</CategoryBannerText>
							</CategoryBanner>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</CategoryContainer>
	);
}

export default Category;

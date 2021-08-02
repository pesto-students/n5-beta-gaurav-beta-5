import React from "react";
import { ProductsContainer } from "../../styles/products.styles";
import { Container, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
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
import ProductCard from "../../shared/components/productCard";
import LocalGlobalSwitch from "../../shared/components/localGlobalSwitch";
function Products() {
	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
	};
	return (
		<ProductsContainer>
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
						<Container maxWidth={false}>
							<Grid container spacing="4">
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard handleClick={handleClick} />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
							</Grid>
						</Container>
					</Grid>
				</Grid>
			</Container>
		</ProductsContainer>
	);
}

export default Products;

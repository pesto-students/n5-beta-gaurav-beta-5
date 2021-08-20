import React, { useEffect, useState } from "react";

import { Container, Grid } from "@material-ui/core";
import LocalGlobalSwitch from "../../shared/components/localGlobalSwitch";
import {
	FeaturedProducts,
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

import imgsubHomeDecor from "../../assets/images/decorHome.jpg";
import { ShopButton } from "../../styles/shopButton.styles";
import { ArrowForwardOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { getFeaturedProductsApi } from "../../api/products/getFeaturedProductsApi";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { productsAction } from "../../state";

function ProductCategories() {
	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
	};

	const [featuredProducts, setFeaturedProducts] = useState([]);
	const dispatch = useDispatch();
	const { setProduct } = bindActionCreators(productsAction, dispatch);
	useEffect(() => {
		getFeaturedProductsApi().then((data) => {
			setFeaturedProducts(data.result);
		});
	}, []);

	const handleFeaturedProductClick = (product) => {
		setProduct(product);
		history.push(
			`/categories/products/product-details?productId=${product.objectId}`
		);
	};

	return (
		<>
			<Container>
				<LocalGlobalSwitch />
				<WhatsNewSection>
					<WhatsNewSmallText>WHAT’S NEW</WhatsNewSmallText>
					<WhatsNewTitle>New Products</WhatsNewTitle>
					<WhatsNewCategories>
						Electronics, Clothing, Home Decor, Appliances
					</WhatsNewCategories>
				</WhatsNewSection>
				<Grid container spacing={4}>
					<Grid item lg={4} xs={12}>
						<PopularProductCard bgImg={imgMobile}>
							<PopularProductOverlay>
								<PopularProductOverlayText>
									Mobile Phones
									<ShopButton
										className="category-btn"
										bg="white"
										width="230px"
										onClick={() =>
											handleClick(
												"/categories/products?subCat=ngZL0AkYAz"
											)
										}
									>
										Shop Now
										<ArrowForwardOutlined className="arrow-icon" />
									</ShopButton>
								</PopularProductOverlayText>
							</PopularProductOverlay>
						</PopularProductCard>
					</Grid>
					<Grid item lg={8} xs={12}>
						<PopularProductCard bgImg={imgLaptop}>
							<PopularProductOverlay>
								<PopularProductOverlayText>
									Laptops
									<ShopButton
										className="category-btn"
										bg="white"
										width="230px"
										onClick={() =>
											handleClick(
												"/categories/products?subCat=HSn0XBmUFP"
											)
										}
									>
										Shop Now
										<ArrowForwardOutlined className="arrow-icon" />
									</ShopButton>
								</PopularProductOverlayText>
							</PopularProductOverlay>
						</PopularProductCard>
					</Grid>
					<Grid item lg={8} xs={12}>
						<PopularProductCard bgImg={imgsubHomeAppliance}>
							<PopularProductOverlay>
								<PopularProductOverlayText>
									Home Appliances
									<ShopButton
										className="category-btn"
										bg="white"
										width="230px"
										onClick={() =>
											handleClick(
												"/categories?id=djrtQawPPX"
											)
										}
									>
										Shop Now
										<ArrowForwardOutlined className="arrow-icon" />
									</ShopButton>
								</PopularProductOverlayText>
							</PopularProductOverlay>
						</PopularProductCard>
					</Grid>
					<Grid item lg={4} xs={12}>
						<PopularProductCard bgImg={imgsubHomeDecor}>
							<PopularProductOverlay>
								<PopularProductOverlayText>
									Home Decor
									<ShopButton
										className="category-btn"
										bg="white"
										width="230px"
										onClick={() =>
											handleClick(
												"/categories?id=Btffw23eE4"
											)
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
				<FeaturedProducts>
					<Grid
						container
						spacing={4}
						mb={10}
						className="featured-product"
					>
						{featuredProducts.length > 0 &&
							featuredProducts.map((product, index) => (
								<Grid key={index} item lg={4} xs={12}>
									<PopularProductCard
										onClick={() =>
											handleFeaturedProductClick(product)
										}
										bgImg={product.image1.url}
									></PopularProductCard>
								</Grid>
							))}
					</Grid>
				</FeaturedProducts>
			</Container>
		</>
	);
}

export default ProductCategories;

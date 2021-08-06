import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
	ProductDetailsContainer,
	ProductAddContainer,
	ProductImage,
	ProductImageList,
	ProductImageUl,
	ProductPriceContainer,
	ProductPriceKey,
	ProductPriceValue,
	ProductTitle,
	ProductTitleContainer,
	ProductVendorInfo,
	ProductQtyLabel,
	ProductBtn,
	ProductInStock,
	ProductType,
	ProductAboutTitle,
	ProductAboutUl,
	ProductAboutList,
	ProductDescription,
} from "../../styles/productDetails.styles";
import imgClock from "../../assets/images/clock.jpg";
function ProductDetails() {
	return (
		<ProductDetailsContainer>
			<Container>
				<Grid container className="products-content">
					<Grid item lg="6" xs="12">
						<ProductImage src={imgClock} />
						<ProductImageUl>
							<ProductImageList src={imgClock} />
							<ProductImageList src={imgClock} />
							<ProductImageList src={imgClock} />
						</ProductImageUl>
					</Grid>
					<Grid item lg="6" xs="12">
						<ProductTitleContainer>
							<ProductTitle>
								Solimo 12-inch Wall Clock - Classic Roulette
								(Silent Movement, Black Frame)
							</ProductTitle>
							<ProductVendorInfo>
								Vendor: The Clocks Store
							</ProductVendorInfo>
						</ProductTitleContainer>
						<Grid
							container
							item
							xs="12"
							className="price-container"
						>
							<Grid item lg="8" xs="12">
								<ProductPriceContainer>
									<Box className="price-box">
										<ProductPriceKey>MRP:</ProductPriceKey>
										<ProductPriceValue lineThru>
											₹300.00
										</ProductPriceValue>
									</Box>
									<Box className="price-box">
										<ProductPriceKey>
											PRICE:
										</ProductPriceKey>
										<ProductPriceValue color="#B12704">
											₹249.00
										</ProductPriceValue>
									</Box>
									<Box className="price-box">
										<ProductPriceKey>
											You Save:
										</ProductPriceKey>
										<ProductPriceValue color="#B12704">
											₹50.00
										</ProductPriceValue>
									</Box>
									<Box className="price-box">
										<ProductPriceKey> </ProductPriceKey>
										<ProductPriceValue>
											Inclusive of all taxes
										</ProductPriceValue>
									</Box>
									<Box className="price-box">
										<ProductPriceKey>
											Free Delivery:
										</ProductPriceKey>
										<ProductPriceValue fontWeight="bold">
											Tomorrow
										</ProductPriceValue>
									</Box>
								</ProductPriceContainer>
							</Grid>
							<Grid item lg="4" xs="12">
								<ProductAddContainer>
									<Box>
										<ProductQtyLabel>Qty:</ProductQtyLabel>
										<FormControl
											variant="outlined"
											className="qty-dropdown"
										>
											<Select
												value={1}
												className="select-menu"
											>
												<MenuItem value={1}>1</MenuItem>
												<MenuItem value={10}>
													2
												</MenuItem>
												<MenuItem value={20}>
													3
												</MenuItem>
												<MenuItem value={30}>
													4
												</MenuItem>
											</Select>
										</FormControl>
									</Box>
									<ProductBtn>Add to cart</ProductBtn>
									<ProductBtn bg="#FFA41C">
										Buy now
									</ProductBtn>
								</ProductAddContainer>
							</Grid>
						</Grid>
						<Grid container item xs="12">
							<ProductInStock>In Stock</ProductInStock>
							<ProductType>
								Pattern: <b>Wall Clock</b>
							</ProductType>
							<ProductAboutTitle>
								<b>About this item</b>
							</ProductAboutTitle>
							<ProductAboutUl>
								<ProductAboutList>
									Material of the frame: Plastic
								</ProductAboutList>
								<ProductAboutList>
									Dial size: 12 inches in diameter
								</ProductAboutList>
								<ProductAboutList>
									Ideal for living room, bedroom & offices
								</ProductAboutList>
								<ProductAboutList>
									Material of the transparent face: Glass
								</ProductAboutList>
							</ProductAboutUl>
						</Grid>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs="12">
						<ProductDescription>
							<h4>Solimo Wall Clock</h4>
							<p>
								Adorn your interiors with this beautiful time
								piece. Simple yet attractive in design, this
								round Wall Clock by Solimo features a
								sophisticated case. The elegant dial flaunts
								bold numerals which make it easy to check the
								time even from a distance.
							</p>
							<h4>Premium Quality. Great Value.</h4>
							<p>
								Welcome to the world of Solimo – a place where
								premium quality and great value go hand in hand.
								Every Solimo product is carefully built to
								deliver exceptional quality. Right from the
								materials used, to detailed quality checks, to
								thoughtful improvements, quality is at the core
								of everything we do. We invest our resources
								only on what is important to you, and minimize
								costs on things like packaging, advertising and
								other extras that don’t add value.
							</p>
						</ProductDescription>
					</Grid>
				</Grid>
			</Container>
		</ProductDetailsContainer>
	);
}

export default ProductDetails;

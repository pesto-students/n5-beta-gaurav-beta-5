import React, { useState, useEffect } from "react";
import { Container, Grid, Box } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
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
	ProductAboutTitle,
	ProductAboutUl,
	ProductAboutList,
	ProductDescription,
} from "../../styles/productDetails.styles";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCartActions } from "../../state";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import { isEmpty } from "lodash";
// import BreadCrumb from "../../shared/components/breadCrumb";
function ProductDetails() {
	const { product, isLoading } = useSelector((state) => state.products);
	const { cart } = useSelector((state) => state.myCart);
	const [qty, setQty] = useState(1);
	const [imageIndex, setImageIndex] = useState(0);
	const search = useLocation().search;
	const dispatch = useDispatch();
	const { addToCart } = bindActionCreators(addToCartActions, dispatch);
	const productId = new URLSearchParams(search).get("productId");
	const history = useHistory();
	const img1 = { ...product["image1"] };
	const img2 = { ...product["image2"] };
	const img3 = { ...product["image3"] };
	const img4 = { ...product["image4"] };
	const img5 = { ...product["image5"] };
	const img6 = { ...product["image6"] };
	let about = product.specification.split("$$");
	about.shift();
	let longDescription = product.longDescription
		.split("\n")
		.filter((s) => s !== "");

	const images = [img1, img2, img3, img4, img5, img6];

	useEffect(() => {
		//console.log("images", images);
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		console.log(" addedd cart", cart);
	}, [cart]);

	const handleAddToCart = (type = "add") => {
		console.log("product to add", product, qty);
		product.qty = qty;
		product.sumTotal = 0;
		const addProductItem = { ...product };
		addToCart(addProductItem);
		if (type === "buy") {
			history.push("/cart");
		}
	};

	const handleQtyChange = (event) => {
		setQty(event.target.value);
	};

	return (
		<ProductDetailsContainer>
			<Container>
				<Grid container className="products-content">
					{/* <Grid item xs={12}>
						<BreadCrumb />
					</Grid> */}
					<Grid item lg={6} xs={12}>
						<Box className="image-list">
							<ProductImage url={images[imageIndex].url} />
							<ProductImageUl>
								{images.map(
									(image, index) =>
										isEmpty(image) == false && (
											<ProductImageList
												key={index}
												onClick={() =>
													setImageIndex(index)
												}
												src={image.url}
												className={
													index == imageIndex
														? "active"
														: "not-active"
												}
											/>
										)
								)}
							</ProductImageUl>
						</Box>
					</Grid>
					<Grid item lg={6} xs={12}>
						<ProductTitleContainer>
							<ProductTitle>{product.name}</ProductTitle>
							<ProductVendorInfo>
								Vendor: {product.vendorRef.name}
							</ProductVendorInfo>
						</ProductTitleContainer>
						<Grid
							container
							item
							xs={12}
							className="price-container"
						>
							<Grid item lg={8} xs={12}>
								<ProductPriceContainer>
									<Box className="price-box">
										<ProductPriceKey>MRP:</ProductPriceKey>
										<ProductPriceValue lineThru>
											₹{product.mrp}
										</ProductPriceValue>
									</Box>
									<Box className="price-box">
										<ProductPriceKey>
											PRICE:
										</ProductPriceKey>
										<ProductPriceValue color="#B12704">
											₹{product.price}
										</ProductPriceValue>
									</Box>
									<Box className="price-box">
										<ProductPriceKey>
											You Save:
										</ProductPriceKey>
										<ProductPriceValue color="#B12704">
											₹{product.mrp - product.price}
										</ProductPriceValue>
									</Box>
									<Box className="price-box">
										<ProductPriceKey> </ProductPriceKey>
										<ProductPriceValue>
											Inclusive of all taxes
										</ProductPriceValue>
									</Box>
									{product.distance && product.distance < 30 && (
										<Box className="price-box">
											<ProductPriceKey>
												Free Delivery:
											</ProductPriceKey>
											<ProductPriceValue fontWeight="bold">
												Tomorrow
											</ProductPriceValue>
										</Box>
									)}
								</ProductPriceContainer>
							</Grid>
							<Grid item lg={4} xs={12}>
								<ProductAddContainer>
									<Box>
										<ProductQtyLabel>Qty:</ProductQtyLabel>
										<FormControl
											variant="outlined"
											className="qty-dropdown"
										>
											<Select
												className="select-menu"
												value={qty}
												onChange={handleQtyChange}
											>
												<MenuItem value={1}>1</MenuItem>
												<MenuItem value={2}>2</MenuItem>
												<MenuItem value={3}>3</MenuItem>
												<MenuItem value={4}>4</MenuItem>
											</Select>
										</FormControl>
									</Box>
									<ProductBtn
										onClick={() => handleAddToCart()}
									>
										Add to cart
									</ProductBtn>
									<ProductBtn
										bg="#FFA41C"
										onClick={() => handleAddToCart("buy")}
									>
										Buy now
									</ProductBtn>
								</ProductAddContainer>
							</Grid>
						</Grid>
						<Grid container item xs={12}>
							<ProductInStock>
								{product.stock > 0
									? "In Stock"
									: "Out Of Stock"}
							</ProductInStock>
							{/* <ProductType>
								Type: <b>Wall Clock</b>
							</ProductType> */}
							<ProductAboutTitle>
								<b>About this item</b>
							</ProductAboutTitle>
							<ProductAboutUl>
								{about.map((item, index) => (
									<ProductAboutList key={index}>
										{item}
									</ProductAboutList>
								))}
							</ProductAboutUl>
						</Grid>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={12}>
						<ProductDescription>
							{longDescription.map((para) => (
								<p>{para}</p>
							))}
						</ProductDescription>
					</Grid>
				</Grid>
			</Container>
		</ProductDetailsContainer>
	);
}

export default ProductDetails;

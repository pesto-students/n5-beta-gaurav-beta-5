import React, { useEffect, useState } from "react";
import {
	ProductCardContainer,
	ProductCardImg,
	ProductCardTitle,
	ProductCardVendorSection,
	ProductCardVendorName,
	ProductCardVendorLocation,
	ProductCardPriceSection,
	ProductCardMrp,
	ProductCardPrice,
	ProductCardAddToCart,
} from "../../styles/productCard.styles";
import { Grid, Hidden } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { productsAction, addToCartActions } from "../../state";

import { useHistory } from "react-router-dom";

import { isEmpty } from "lodash";
function ProductCard({ handleClick, product }) {
	// const { url } = product.image1;

	const [qty, setQty] = useState(1);
	const image = { ...product["image1"] };
	const history = useHistory();
	const dispatch = useDispatch();
	const { isGlobal } = useSelector((state) => state.localGlobal);
	const { setProduct } = bindActionCreators(productsAction, dispatch);
	const { addToCart } = bindActionCreators(addToCartActions, dispatch);
	const { userSelectedLocation } = useSelector(
		(state) => state.searchedLocation
	);
	useEffect(() => {
		if (
			userSelectedLocation.center == undefined ||
			product.vendorRef == undefined
		)
			return;
		//console.log("product Card", product, userSelectedLocation);
		let vendorGeo = `${product.vendorRef.geoLocation.long},${product.vendorRef.geoLocation.lat}`;

		let userGeo = `${userSelectedLocation.center[0]},${userSelectedLocation.center[1]}`;
		let query = `${vendorGeo};${userGeo}`;
		// distanceApi(query).then((data) => {
		// 	console.log("distance", data);
		// 	let distance = data.waypoints[0].distance;
		// 	setVendorDistance(distance);
		// });
	}, []);

	const showProductDetails = () => {
		setProduct(product);
		history.push(
			`/categories/products/product-details?productId=${product.objectId}`
		);
	};

	const handleAddToCart = () => {
		//console.log("product", product);
		product.qty = qty;
		product.subTotal = 0;
		const addProductItem = { ...product };
		addToCart(addProductItem);
	};

	const truncate = (input, length) =>
		input.length > length ? `${input.substring(0, length)}...` : input;

	return (
		product &&
		product.name && (
			<ProductCardContainer className="product-card">
				<Grid container>
					<Grid item xs={12}>
						<div
							onClick={() => showProductDetails()}
							className="card-content"
						>
							<ProductCardImg
								src={image.url}
								title={product.name}
							/>
							<ProductCardTitle>
								{truncate(product.name, 50)}
							</ProductCardTitle>

							{product.vendorRef && (
								<ProductCardVendorSection>
									<ProductCardVendorName>
										Vendor:
									</ProductCardVendorName>
									<ProductCardVendorLocation>
										{product.vendorRef.name}
										{isEmpty(userSelectedLocation) ==
											false &&
											isGlobal == false &&
											product.distance &&
											`(${product.distance} km)`}
									</ProductCardVendorLocation>
								</ProductCardVendorSection>
							)}
							<ProductCardPriceSection>
								<ProductCardMrp>₹{product.mrp}</ProductCardMrp>
								<ProductCardPrice>
									{" "}
									₹{product.price}
								</ProductCardPrice>
							</ProductCardPriceSection>
						</div>
					</Grid>
					<Grid item xs={12}>
						<ProductCardAddToCart
							className="pc-add-to-cart"
							onClick={handleAddToCart}
						>
							Add to cart
						</ProductCardAddToCart>
					</Grid>
				</Grid>
			</ProductCardContainer>
		)
	);
}

export default ProductCard;

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
import imgClock from "../../assets/images/clock.jpg";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { productsAction } from "../../state";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { distanceApi } from "../../api/location/distanceApi";
import { isEmpty } from "lodash";
function ProductCard({ handleClick, product }) {
	// const { url } = product.image1;
	const [vendorDistance, setVendorDistance] = useState(undefined);
	const image = { ...product["image1"] };
	const history = useHistory();
	const dispatch = useDispatch();
	const { isGlobal } = useSelector((state) => state.localGlobal);
	const { setProduct } = bindActionCreators(productsAction, dispatch);
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

	const handleAddToCart = () => {};

	const truncate = (input, length) =>
		input.length > length ? `${input.substring(0, length)}...` : input;

	return (
		product &&
		product.name && (
			<ProductCardContainer onClick={() => showProductDetails()}>
				<ProductCardImg src={image.url} title={product.name} />
				<ProductCardTitle>
					{truncate(product.name, 50)}
				</ProductCardTitle>
				{product.vendorRef && (
					<ProductCardVendorSection>
						<ProductCardVendorName>Vendor:</ProductCardVendorName>
						<ProductCardVendorLocation>
							{product.vendorRef.name}
							{isEmpty(userSelectedLocation) == false &&
								isGlobal == false &&
								product.distance &&
								`(${product.distance} km)`}
						</ProductCardVendorLocation>
					</ProductCardVendorSection>
				)}
				<ProductCardPriceSection>
					<ProductCardMrp>₹{product.mrp}</ProductCardMrp>
					<ProductCardPrice> ₹{product.price}</ProductCardPrice>
				</ProductCardPriceSection>
				<ProductCardAddToCart onClick={handleAddToCart}>
					Add to cart
				</ProductCardAddToCart>
			</ProductCardContainer>
		)
	);
}

export default ProductCard;

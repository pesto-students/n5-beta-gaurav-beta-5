import React, { useEffect } from "react";
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

function ProductCard({ handleClick, product }) {
	// const { url } = product.image1;
	const image = { ...product["image1"] };
	const history = useHistory();
	const dispatch = useDispatch();
	const { setProduct } = bindActionCreators(productsAction, dispatch);
	useEffect(() => {
		console.log("product Card", image.url);
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
		handleClick &&
		product.name && (
			<ProductCardContainer onClick={() => showProductDetails()}>
				<ProductCardImg src={image.url} title={product.name} />
				<ProductCardTitle>
					{truncate(product.name, 50)}
				</ProductCardTitle>
				<ProductCardVendorSection>
					<ProductCardVendorName>Vendor:</ProductCardVendorName>
					<ProductCardVendorLocation>
						Delux Store (5 km)
					</ProductCardVendorLocation>
				</ProductCardVendorSection>
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

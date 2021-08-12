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
function ProductCard({ handleClick, product }) {
	// const { url } = product.image1;
	const image = { ...product["image1"] };
	useEffect(() => {
		console.log("product Card", image.url);
	}, []);
	return (
		product &&
		handleClick && (
			<ProductCardContainer
				onClick={() =>
					handleClick("/categories/products/product-details")
				}
			>
				<ProductCardImg src={image.url} title={image.name} />
				<ProductCardTitle>{product.name}</ProductCardTitle>
				<ProductCardVendorSection>
					<ProductCardVendorName>Vendor:</ProductCardVendorName>
					<ProductCardVendorLocation>
						Delux Store (5 km)
					</ProductCardVendorLocation>
				</ProductCardVendorSection>
				<ProductCardPriceSection>
					<ProductCardMrp>MRP: ₹{product.mrp}</ProductCardMrp>
					<ProductCardPrice>Price: ₹{product.price}</ProductCardPrice>
				</ProductCardPriceSection>
				<ProductCardAddToCart>Add to cart</ProductCardAddToCart>
			</ProductCardContainer>
		)
	);
}

export default ProductCard;

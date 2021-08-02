import React from "react";
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
function ProductCard(props) {
	return (
		<ProductCardContainer
			onClick={() =>
				props.handleClick("/categories/products/product-details")
			}
		>
			<ProductCardImg src={imgClock} />
			<ProductCardTitle>
				Solimo 12-inch Wall Clock - Classic Roulette....
			</ProductCardTitle>
			<ProductCardVendorSection>
				<ProductCardVendorName>Vendor:</ProductCardVendorName>
				<ProductCardVendorLocation>
					Delux Store (5 km)
				</ProductCardVendorLocation>
			</ProductCardVendorSection>
			<ProductCardPriceSection>
				<ProductCardMrp>₹50.00</ProductCardMrp>
				<ProductCardPrice>₹29.00</ProductCardPrice>
			</ProductCardPriceSection>
			<ProductCardAddToCart>Add to cart</ProductCardAddToCart>
		</ProductCardContainer>
	);
}

export default ProductCard;

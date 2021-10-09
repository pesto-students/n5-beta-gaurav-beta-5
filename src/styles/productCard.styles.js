import styled from "styled-components";

export const ProductCardContainer = styled.div`
	color: black;
	box-shadow: 0px 2px 5px rgb(0 0 0 / 20%);
	display: flex;
	background: white;
	padding: 20px;
	//max-width: 265px;
	min-width: 90%;
	max-width: 90%;
	min-height: 345px;
	cursor: pointer;
	.card-content {
		min-height: 240px;
		@media only screen and (min-width: 600px) and (max-width: 1600px) {
			min-height: 280px;
		}
	}
	.title {
		cursor: pointer;
	}
	@media only screen and (max-width: 600px) {
		margin-bottom: 15px;
		max-width: 100%;
	}
	@media only screen and (min-width: 600px) and (max-width: 1600px) {
		margin-bottom: 15px;
		min-width: 92%;
	}
`;

export const ProductCardSkeletonDiv = styled.div`
	box-shadow: 0px 2px 5px rgb(0 0 0 / 20%);
	display: inline-block;
	background: white;
	padding: 20px;
	width: 265px;
	min-height: 345px;
	@media only screen and (max-width: 600px) {
		margin-bottom: 15px;
		max-width: 100%;
	}
`;

export const ProductCardImg = styled.div`
	width: 60%;
	height: 145px;
	margin: 10px auto;
	background-image: url(${(props) => props.src});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
`;

export const ProductCardTitle = styled.p`
	text-align: left;
	margin: 0;
	padding: 0;
`;

export const ProductCardVendorSection = styled.div`
	text-align: left;
	margin: 3px 0;
	padding: 0;
`;

export const ProductCardVendorName = styled.span`
	text-align: left;
	margin-right: 5px;
	padding: 0;
`;

export const ProductCardVendorLocation = styled.span`
	text-align: left;
	margin: 0;
	padding: 0;
	color: #b12704;
`;

export const ProductCardPriceSection = styled.div`
	text-align: left;
	margin: 3px 0;
	padding: 0;
`;

export const ProductCardMrp = styled.span`
	text-align: left;
	margin-right: 5px;
	color: #595959;
	text-decoration: line-through;
`;

export const ProductCardPrice = styled.span`
	text-align: left;
	color: #b12704;
	font-weight: bold;
`;

export const ProductCardAddToCart = styled.div`
	display: inline-block;
	margin: 0 auto;
	background-color: #f7ca00;
	text-transform: uppercase;
	font-size: 13px;
	padding: 12px;
	font-weight: bold;
	width: 80%;
	text-align: center;
	margin: 15px 10%;
	margin-bottom: 0;
	cursor: pointer;
`;

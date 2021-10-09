import styled from "styled-components";

export const WhatsNewSection = styled.div`
	width: 100%;
	margin: 30px 0;
	min-height: 50px;
	text-align: center;
`;

export const WhatsNewSmallText = styled.div`
	width: 100%;
	font-size: 14px;
	color: #b4afaf;
`;

export const FeaturedProducts = styled.div`
	width: 100%;
	margin-bottom: 20px;
`;

export const WhatsNewTitle = styled.div`
	width: 100%;
	min-height: 50px;
	font-size: 48px;
	padding: 30px;
	font-weight: bold;
`;

export const WhatsNewCategories = styled.div`
	width: 100%;
	min-height: 50px;
	font-size: 14px;
	color: #4e4e4e;
`;

export const PopularProductCard = styled.div`
	width: 100%;
	min-height: 444px;
	font-size: 14px;
	color: #4e4e4e;
	position: relative;
	background-image: url(${(props) => props.bgImg});
	background-size: cover;
	background-repeat: no-repeat;
`;

export const PopularProductOverlay = styled.div`
	width: 100%;
	min-height: 20%;
	font-size: 14px;
	color: #4e4e4e;
	position: absolute;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const PopularProductOverlayText = styled.span`
	width: 100%;
	min-height: 50px;
	font-size: 14px;
	color: white;
	text-align: center;
	font-size: 24px;
	display: inline-block;
	width: 100%;
	padding: 60px;
	text-transform: uppercase;
	font-weight: bold;
`;

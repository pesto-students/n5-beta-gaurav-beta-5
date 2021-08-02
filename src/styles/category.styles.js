import styled from "styled-components";

export const CategoryContainer = styled.div`
	width: 100%;
	min-height: 530px;
	.category-content {
		margin-top: 20px;
		/* .category-selector-container {
			background-color: #f4f2f2;
			margin-top: 40px;
		} */
	}
`;

export const CategoryBanner = styled.div`
	width: 100%;
	min-height: 444px;
	background-image: url(${(props) => props.banner});
	text-align: center;
	position: relative;
	background-repeat: ${(props) => (props.repeat ? "repeat" : "no-repeat")};
	background-size: cover;
	&.category-sub-banner {
		margin: 20px 0;
	}
`;

export const CategoryBannerText = styled.div`
	display: inline-block;
	position: absolute;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	color: ${(props) => props.color};
	font-size: ${(props) => (props.size ? props.size : "24px")};
	font-weight: bold;
	text-align: center;
`;

export const CategoryBannerTitle = styled.div`
	width: 40%;
	text-align: center;
	margin: 90px auto;
	color: white;
	padding: 15px 20px;
	font-size: 48px;
	font-weight: bold;
	background-color: rgba(0, 0, 0, 0.5);
	display: inline-block;
`;

export const CategoryBannerLinksContainer = styled.div`
	width: 40%;
	text-align: center;
	margin: 20px auto;
	color: white;
	padding: 15px 40px;
	font-size: 18px;
	font-weight: bold;
	background-color: rgba(255, 255, 255, 0.8);
	display: block;
	clear: both;
`;

export const CategoryBannerLink = styled.a`
	border-right: 2px solid #333;
	padding: 5px 10px;
	color: black;
	cursor: pointer;
	margin: 0px;
	:first-of-type {
		border-left: none;
	}
	:last-of-type {
		border-right: none;
	}
	&.active,
	:hover {
		color: #0088b4;
		border-bottom: 1px solid #0088b4;
	}
`;

export const CategorySelectContainer = styled.div`
	width: 100%;
	min-height: 530px;
	background-color: #f8f8f8;
	padding: 20px;
	&.category-selector-container {
		margin-top: 40px;
		min-height: 97%;
	}
`;

export const CategoryListTitle = styled.ul`
	margin: 0;
	padding: 0;
	margin-bottom: 20px;
	font-weight: bold;
	margin-left: 40px;
	display: inline-block;
	width: 90%;
`;

export const CategoryList = styled.li`
	list-style: none;
	font-weight: normal;
	padding-left: 20px;
	padding-bottom: 5px;
	cursor: pointer;
	:first-of-type {
		margin-top: 10px;
	}
	:hover {
		text-decoration: underline;
	}
`;

export const CategoryMainTitle = styled.div`
	width: 100%;
	text-align: center;
	font-size: 24px;
	color: #7a7a7a;
	padding: 20px;
	font-weight: bold;
`;

export const CategoryProductSlider = styled.div`
	width: 100%;
	background-color: #f8f8f8;
	padding: 30px;
	min-height: 400px;
	.product-grid {
		text-align: center;
		margin: 0px 0;
	}
`;

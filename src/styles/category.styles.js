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
	.category-selector-container {
		min-height: 100vh;
		position: relative;
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
	width: ${(props) => (props.theme.isSmall ? "80%" : "40%")};
	text-align: center;
	margin: ${(props) => (props.theme.isSmall ? "40px auto" : "90px auto")};
	color: white;
	padding: 15px 20px;
	font-size: ${(props) => (props.theme.isSmall ? "28px" : "48px")};
	font-weight: bold;
	background-color: rgba(0, 0, 0, 0.5);
	display: inline-block;
`;

export const CategoryBannerLinksContainer = styled.div`
	width: ${(props) => (props.theme.isSmall ? "80%" : "40%")};
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
		background-color: #33333390;
		color: white;
	}
	@media only screen and (max-width: 600px) {
		border: none;
		display: block;
		&.active,
		:hover {
			background-color: #33333390;
			color: white;
		}
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

export const CategorySkeletonLoader = styled.div`
	margin-bottom: 15px;
	width: 100%;
	height: 10px;
	display: block;
	background: linear-gradient(
			to right,
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 0.5) 50%,
			rgba(255, 255, 255, 0) 80%
		),
		lightgray;
	background-repeat: repeat-y;
	background-size: 50px 500px;
	background-position: 0 0;
	animation: shine 1s infinite;
	@keyframes shine {
		to {
			background-position: 100% 0;
		}
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

export const CategoryBtn = styled.div`
	width: 100%;
	text-align: center;
	font-size: 24px;
	color: #7a7a7a;
	padding: 20px;
	font-weight: bold;
	background-color: #f5f5f5;
	margin: 10px 0;
`;

export const ModalClose = styled.div`
	width: 100%;
	text-align: right;
	font-size: 43px;
	color: #000;
	position: absolute;
	top: 6%;
	z-index: 10;
	right: 20px;
	.close-icon {
		font-size: 1em;
	}
`;

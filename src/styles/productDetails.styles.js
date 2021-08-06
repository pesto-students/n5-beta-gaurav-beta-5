import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
	margin-top: 20px;
	.price-container {
		border-bottom: 1px solid #dbdbdb;
		margin-bottom: 30px;
	}
	.products-content {
		border-bottom: 1px solid #dbdbdb;
		padding-bottom: 20px;
		margin-bottom: 30px;
	}
`;

export const ProductImage = styled.img`
	width: 50%;
	display: block;
	margin: 0 auto;
	text-align: center;
	background-image: url(${(props) => props.src});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	@media only screen and (max-width: 768px) {
		width: auto;
		min-height: 300px;
	}
`;

export const ProductImageUl = styled.ul`
	width: 100%;
	text-align: center;
	margin: 0;
	padding: 0;
	//background-color: #f8f9fa;
`;

export const ProductImageList = styled.li`
	width: 100%;
	text-align: center;
	background-image: url(${(props) => props.src});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	list-style: none;
	display: inline-block;
	width: 100px;
	height: 100px;
	margin: 0 10px;
	cursor: pointer;
`;

export const ProductTitleContainer = styled.div`
	width: 100%;
	text-align: center;
	padding: 10px;
	border-bottom: 1px solid #dbdbdb;
`;

export const ProductTitle = styled.h3`
	width: 100%;
	text-align: left;
	font-size: 24px;
	font-weight: normal;
	display: inline-block;
	margin-bottom: 10px;
`;

export const ProductVendorInfo = styled.a`
	width: 100%;
	text-align: left;
	color: #0088b4;
	font-size: 14px;
	display: inline-block;
`;

export const ProductPriceContainer = styled.div`
	width: 100%;
	display: inline-block;
	padding: 10px;

	.price-box {
		margin-bottom: 15px;
	}
`;

export const ProductPriceKey = styled.span`
	width: 100px;
	display: inline-block;
	text-align: right;
	margin-right: 20px;
`;

export const ProductPriceValue = styled.span`
	display: inline-block;
	width: 150px;
	text-align: left;
	text-decoration: ${(props) => (props.lineThru ? "line-through" : null)};
	color: ${(props) => props.color};
	font-weight: ${(props) => props.fontWeight};
`;

export const ProductAddContainer = styled.div`
	display: inline-block;
	padding: 10px;
	.qty-dropdown {
		display: inline-block;
		.select-menu {
			.MuiSelect-selectMenu {
				padding-top: 10px;
				padding-bottom: 10px;
			}
		}
	}
	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const ProductQtyLabel = styled.div`
	display: inline-flex;
	padding: 10px;
	margin-bottom: 20px;
`;

export const ProductBtn = styled.div`
	display: inline-block;
	padding: 10px;
	background-color: ${(props) => (props.bg ? props.bg : "#FFD814")};
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 15px;
	width: 130px;
	font-weight: bold;
	@media only screen and (max-width: 768px) {
		width: 100%;
		margin-bottom: 15px;
	}
`;

export const ProductInStock = styled.div`
	display: inline-block;
	width: 100%;
	padding: 10px 0;
	color: #058552;
	font-weight: bold;
	font-size: 18px;
`;

export const ProductType = styled.div`
	display: inline-block;
	width: 100%;
	padding: 10px 0;
`;

export const ProductAboutTitle = styled.div`
	display: inline-block;
	width: 100%;
	padding: 10px 0;
`;

export const ProductAboutUl = styled.ul`
	display: inline-block;
	width: 100%;
	padding: 5px 0;
`;

export const ProductAboutList = styled.li`
	width: 100%;
	list-style: disc;
	margin-left: 20px;
`;

export const ProductDescription = styled.div`
	width: 100%;
	font-size: 18px;
	display: block;
	h4 {
		margin-bottom: 20px;
	}

	p {
		margin-bottom: 30px;
	}
`;

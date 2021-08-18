import styled from "styled-components";
const fontFamily = "Futura-Light";

export const OrderContainer = styled.div`
	.bg-white {
		background-color: #ffffff;
	}
	.continue-shopping {
		position: sticky;
		top: 115px;
	}
	.no-orders {
		padding: 20px;
		text-align: center;
	}

	.paper-main {
		padding: 20px;
	}
	.paper-order {
		margin-bottom: 20px;
	}

	.order-heading {
		padding: 20px;
		font-weight: bold;
		line-height: 27px;
	}

	.pd.MuiGrid-item {
		padding-top: 5px;
		padding-bottom: 20px;
	}

	.default-font-family {
		font-family: ${fontFamily};
	}
	.semiBold {
		font-family: inherit;
		font-weight: bold;
	}
	.productName {
		font-weight: bold;
		font-family: inherit;
		font-size: 14px;
	}

	.productQTY {
		font-size: 14px;
		font-family: ${fontFamily};
		margin: 20px 0px;
	}

	width: 100%;
	background-color: #f5f5f5;
	padding: 20px 0;
	.container {
		padding: 20px;
		margin: 30px auto 100px auto;
	}
	.cart-title {
		margin: 0;
		padding: 20px;
	}
	.item-seleted {
		color: #0088b4;
		padding: 10px 10px 10px 20px;
		font-size: 13px;
	}
	.img-margin {
		margin-left: 25px;
	}
	.cart-price {
		font-family: Futura-Light;
		color: #000000;
		font-size: 13px;
		font-weight: bold;
	}
	.total-price {
		font-family: Futura-Light;
		font-weight: 600;
		font-size: 16px;
	}
	.cart-border {
		border-top: 1px solid #dddddd;
		padding-top: 25px;
	}

	.resp-img {
		width: 101px;
	}
	.cart-product-img {
		margin: auto;
		display: block;
		max-width: 100%;
		max-height: 100%;
	}
	.deletelink {
		margin-left: 10px;
	}
	.submit-change {
		background-color: #ffd814;
		display: inline-block;
		font-size: 13px;
		padding: 5px;
		border: none;
		width: 100%;
		cursor: pointer;
		color: #263238;
		font-weight: bold;
		margin-top: 1rem;
		margin-bottom: 5pm;
		&:hover {
			background-color: #f8dc4d;
		}
		font-family: inherit;
		border-radius: 0;
	}
	.ctn-shopping-btn {
		background-color: #ffa41c;
		font-family: inherit;
		border-radius: 0;
	}
`;

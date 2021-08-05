import styled from "styled-components";
const fontFamily = "Futura-Light";

export const CartContainer = styled.div`
	.bg-white {
		background-color: #ffffff;
	}
	.flex-height {
		height: 100%;
	}
	.pd.MuiGrid-item {
		padding-top: 5px;
		padding-bottom: 20px;
	}
	.addressSection {
		margin-top: 1.5rem;
		.title {
			padding-left: 0px;
		}
		.address {
			width: 150px;
			margin: 15px 0px;
		}
	}
	.default-font-family {
		font-family: ${fontFamily};
	}
	.semiBold {
		font-family: Futura-SemiBold;
	}
	.productName {
		font-family: Futura-SemiBold;
		font-size: 14px;
	}
	.productStock {
		font-family: ${fontFamily};
		font-size: 13px;
		color: #0088b4;
		font-weight: 600;
		margin-bottom: 10px;
	}
	.productQTY {
		font-size: 14px;
		font-family: ${fontFamily};
		color: #000000;
		font-weight: 600;
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
		padding-bottom: 34px;
		padding-top: 25px;
	}
	.qtyDropdow {
		width: 60px;
		height: 25px;
		.MuiOutlinedInput-input {
			padding: 5px 14px;
		}
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
	}
	.ctn-shopping-btn {
		background-color: #ffa41c;
	}
`;

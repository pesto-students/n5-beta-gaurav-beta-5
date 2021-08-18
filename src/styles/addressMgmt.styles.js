import styled from "styled-components";

export const AddressMgmtContainer = styled.div`
	width: 100%;
	background-color: #f5f5f5;
	padding: 30px 0;
`;

export const SelectAddressContainer = styled.div`
	width: 100%;
	background-color: #fff;
	padding: 20px;
	.add-address-box {
		width: 100%;
		cursor: pointer;
	}
	.add-address {
		position: relative;
		background-color: #ffd814;
		padding: 15px;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		display: inline-block;

		.add-icon {
		}
	}
	.add-text {
		display: inline-block;
		padding: 15px 10px;
		position: relative;
		top: -5px;
	}
	.select-address {
		border-bottom: 1px solid #ddd;
		margin-bottom: 20px;
	}
	h3 {
		margin-bottom: 20px;
	}
	p {
		margin-bottom: 30px;
	}
	.delivery-address-btn {
		background-color: #ffd814;
		display: inline-block;
		font-size: 13px;
		padding: 10px;
		border: none;
		width: 100%;
		cursor: pointer;
	}
	.sub-btn {
		display: inline-block;
		width: 45%;
		margin-top: 15px;
		padding: 5px;
		border: none;
		cursor: pointer;
		&.first {
			margin-right: 10%;
		}
	}
`;

export const AddAdressContainer = styled.div`
	width: 100%;
	background-color: #fff;
	margin-top: 20px;
	padding: 20px;
	.add-address {
		border-bottom: 1px solid #ddd;
		padding-bottom: 20px;
		margin-bottom: 20px;
	}
	.save-address-btn,
	.cancel-address-btn {
		background-color: #ffd814;
		display: inline-block;
		font-size: 13px;
		padding: 10px;
		border: none;
		width: 20%;
		cursor: pointer;
	}
	.cancel-address-btn {
		margin-left: 15px;
		background-color: #ddd;
	}
	.text-field {
		width: 100%;
		margin: 15px 0;
		font-family: inherit !important;
		input {
			font-family: Futura-Light;
			:focus {
				border-color: black;
			}
		}
	}
`;

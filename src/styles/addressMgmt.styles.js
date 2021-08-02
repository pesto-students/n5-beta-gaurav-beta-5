import styled from "styled-components";

export const AddressMgmtContainer = styled.div`
	width: 100%;
	background-color: #f5f5f5;
`;

export const SelectAddressContainer = styled.div`
	width: 100%;
	background-color: #fff;
	padding: 20px;

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
	.save-address-btn {
		background-color: #ffd814;
		display: inline-block;
		font-size: 13px;
		padding: 10px;
		border: none;
		width: 20%;
		cursor: pointer;
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

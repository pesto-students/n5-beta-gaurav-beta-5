import styled from "styled-components";
import deliveryTruck from "../assets/delivery-truck.png";
export const HeaderDiv = styled.div`
	display: block;
	width: 100%;
	min-height: 43px;
	background-color: #f5f5f5;
	text-align: left;
	color: black;
`;

export const FreeShippingDiv = styled.div`
	display: inline-block;
	margin-top: 10px;
	width: 20%;
`;

export const FreeShippingIcon = styled.span`
	display: inline-block;
	background-image: url(${deliveryTruck});
	width: 30px;
	height: 12px;
	background-repeat: no-repeat;
	background-position: center;
`;

export const FreeShippingText = styled.span`
	display: inline-block;
`;

export const SameDayDiv = styled.span`
	display: inline-block;
	width: 60%;
	color: #595959;
	//font-family: Futura-Medium;
	font-weight: bold;
`;

export const HeaderLinksDiv = styled.div`
	display: inline-block;
	width: 20%;
	color: #595959;
	text-align: right;
`;

export const HeaderLink = styled.a`
	display: inline-block;
	color: black;
	font-size: 13px;
	cursor: pointer;
	margin-left: 15px;
	text-align: right;
	padding-bottom: 3px;
	&:hover {
		border-bottom: 1px solid #000;
	}
`;

import styled from "styled-components";

export const ShopButton = styled.div`
	width: ${(props) => (props.width ? props.width : "100px")};
	background-color: ${(props) => (props.bg ? props.bg : "#fff")};
	padding: 15px;
	color: black;
	font-weight: bold;
	margin: 20px auto;
	min-height: 50px;
	cursor: pointer;
	position: relative;
	font-size: 18px;
	transition: ease-in 0.1s;
	&:hover {
		background-color: #000;
		color: #fff;
		.arrow-icon {
			color: white;
		}
	}
	.arrow-icon {
		color: black;
		position: absolute;
		right: 20px;
		top: 13px;
	}
`;

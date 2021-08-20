import styled from "styled-components";

export const LocalGlobalContainer = styled.div`
	width: 100%;
	margin: 20px 0;
	min-height: 50px;
	text-align: center;
`;

export const LocalGlobalSwitchBtn = styled.div`
	display: inline-block;
	width: 285px;
	margin: 20px 0;
	padding: 15px;
	font-size: 20px;
	font-weight: bold;
	min-height: 50px;
	text-align: center;
	background-color: #ededed;
	border: 2px solid #000;
	border-style: inset;
	color: #595959;
	text-transform: uppercase;
	cursor: pointer;
	&.active {
		background-color: #303030;
		color: white;
		border: 2px solid #303030;
	}
	@media only screen and (max-width: 600px) {
		margin: 0;
	}
`;

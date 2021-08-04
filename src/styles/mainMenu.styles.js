import styled from "styled-components";

export const MainMenuContainer = styled.div`
	width: 100%;
	text-align: left;
	margin: ${(props) => (props.isSmall ? "10px 0 0 0" : "20px 0")};
	min-height: 50px;
	position: sticky;
	top: 0px;
	z-index: 3;
	background-color: white;
`;

export const Logo = styled.div`
	font-size: 24px;
	font-family: Futura-Bold;
	width: ${(props) => (props.isSmall ? "40%" : "60%")};
	display: inline-block;
	cursor: pointer;
`;

export const Menu = styled.div`
	width: 20%;
	display: inline-block;
	text-align: right;
`;

export const MenuItem = styled.a`
	margin: 0 5%;
	text-align: center;
	padding-bottom: 10px;
	display: inline-block;
	font-weight: bold;
	cursor: pointer;
	&:hover,
	&.active {
		color: #f7ca00;
		border-bottom: 1px solid #f7ca00;
	}
`;

export const IconsMenuDiv = styled.div`
	width: ${(props) => (props.isSmall ? "60%" : "20%")};
	display: inline-block;
	text-align: right;
`;

export const IconMenuItem = styled.div`
	display: inline-block;
	text-align: right;
	cursor: pointer;
	margin-left: 10px;
	position: relative;
	top: 5px;
`;

export const IconMenuText = styled.span`
	display: inline-block;
	position: relative;
	bottom: 5px;
	margin-left: 5px;
`;

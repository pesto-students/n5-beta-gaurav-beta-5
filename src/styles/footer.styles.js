import styled from "styled-components";

export const FooterContainer = styled.div`
	width: 100%;
	min-height: 530px;
	background-color: black;
	color: white;
	.footer-links {
		margin-top: 40px;
	}
`;

export const FooterTitle = styled.div`
	width: 100%;
	margin-top: 95px;
	color: white;
	text-align: center;
	font-size: 24px;
	display: inline-block;
	font-weight: bold;
`;

export const FooterSubscribeContainer = styled.div`
	width: 100%;
	margin-top: 50px;
	background-color: black;
	text-align: center;
`;

export const FooterSubscribeInput = styled.input.attrs((props) => ({
	type: "email",
	placeholder: "Enter Email*",
}))`
	display: inline-block;
	background-color: #292929;
	border: none;
	box-shadow: none;
	font-size: 14px;
	color: white;
	padding: 15px;
	width: 50%;
	font-family: inherit;
	:focus {
		border-radius: 0;
		outline: 1px solid #fff;
		outline-style: inset;
	}
`;

export const FooterSubscribeBtn = styled.button.attrs((props) => ({
	type: "button",
}))`
	display: inline-block;
	background-color: #575757;
	border: none;
	color: white;
	border-radius: 0;
	font-size: 14px;
	padding: 15px;
	width: ${(props) => (props.isSmall ? "40%" : "20%")};
	cursor: pointer;
	text-transform: uppercase;
	font-family: inherit;
`;

export const FooterLogo = styled.div`
	width: 100%;
	margin: 0;
	padding: 0;
	color: white;
	font-size: 24px;
	font-family: Futura-Bold;
	text-align: center;
`;

export const FooterSMIcons = styled.ul`
	width: 100%;
	margin: 0;
	padding: 0;
	background-color: black;
	text-align: center;
	margin-top: 5px;
`;

export const FooterSMLink = styled.li`
	width: 23%;
	list-style: none;
	padding: 5px;
	display: inline-block;
	margin: 7px;
	background: white;
	border-radius: 50%;
	width: 35px;
	height: 35px;
	color: black;
	position: relative;
	cursor: pointer;
	.footer-sm-icon {
		font-size: 16px;
		position: absolute;
		right: 10px;
		top: 9px;
	}
`;

export const FooterLinksTitle = styled.div`
	width: 100%;
	text-transform: uppercase;
	font-weight: bold;
	margin-bottom: 15px;
	color: #adadad;
`;
export const FooterLinksUl = styled.ul`
	width: 100%;
	text-align: left;
`;
export const FooterLink = styled.li`
	list-style: none;
	margin-bottom: 5px;
	cursor: pointer;
	color: #adadad;
`;

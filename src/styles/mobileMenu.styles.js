import styled from "styled-components";

export const MobileMenuContainer = styled.div`
	width: 70%;
	text-align: left;
	position: fixed;
	background-color: white;
	left: 0;
	top: 0;
	min-height: 100vh;
	z-index: 2;
	color: black;
	//transition: ease-in;
	//display: ${(props) => (props.showMenu ? null : "none")};
	transform: ${(props) =>
		props.showMenu ? "translate(00%, 0px)" : "translate(-100%, 0px)"};
	transition: 0.3s cubic-bezier(0, 1, 0.5, 1);
`;

export const MobileMenuBackDrop = styled.div`
	width: 100%;
	z-index: 1;
	position: fixed;
	left: 0;
	top: 0;
	min-height: 100vh;
	background-color: rgba(0, 0, 0, 0.8);
	transition: ease-in;
	display: ${(props) => (props.showMenu ? null : "none")};
`;

export const MobileMenuAvatar = styled.div`
	width: 100%;
	padding: 10px;
	padding-bottom: 15px;
	border-bottom: 1px solid #ddd;
	font-size: 20px;
	font-weight: bold;
	.avatar-icon {
		position: relative;
		font-size: 28px;
		top: 7px;
		margin-right: 10px;
	}
`;

export const MobileMenuList = styled.div`
	width: 100%;
	ul {
		margin: 0;
		padding: 0;
		li {
			list-style: none;
			padding: 10px 15px;
			font-size: 22px;
			border-bottom: 1px solid #ddd;
			background-color: #f2f2f2;
			&.logout {
				background-color: #fff;
				.logout-icon {
					position: relative;
					top: 5px;
					margin-right: 10px;
				}
			}
			&.active {
				background-color: #333;
				color: white;
			}
		}
	}
`;

// export const MobileMenuContainer = styled.div`
// 	width: 70%;
// 	text-align: left;
// 	position: fixed;
// 	left: 0;
// 	top: 0;
// 	min-height: 100vh;
// `;

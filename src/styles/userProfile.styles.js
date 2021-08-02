import styled from "styled-components";

export const UserProfileContainer = styled.div`
	width: 100%;
	background-color: #f5f5f5;
	padding: 20px 0;
	.bg-white {
		background-color: white;
		padding: 20px;
	}
	.profile-title {
		padding: 0;
		margin: 0;
		padding: 20px;
		border-bottom: 1px solid #ddd;
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
	.submit-change {
		background-color: #ffd814;
		display: inline-block;
		font-size: 13px;
		padding: 10px;
		border: none;
		width: 20%;
		cursor: pointer;
	}
`;

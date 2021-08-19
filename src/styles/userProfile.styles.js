import styled from "styled-components";

export const UserProfileContainer = styled.div`
	width: 100%;
	background-color: #f5f5f5;
	padding: 20px 0;
	.avatar {
		background-image: url(${(props) => props.avatar});
		background-repeat: no-repeat;
		background-position: center;
		width: 300px;
		min-height: 300px;
		text-align: center;
		margin: 0 auto;
		background-size: contain;
	}
	.details {
		margin-top: 60px;
		margin-bottom: 20px;
	}
	p {
		margin-bottom: 15px;
	}
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
		width: 100%;
		cursor: pointer;
	}
`;

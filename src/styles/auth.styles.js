import styled from "styled-components";

export const AuthContainer = styled.div`
	width: 100%;
	background-color: #f5f5f5;
	padding: 20px 0;
	.bg-white {
		background-color: white;
		padding: 20px;
		width: 600px;
		margin: 30px auto 100px auto;
		@media only screen and (max-width: 768px) {
			width: 100%;
		}
	}
	.profile-title {
		padding: 0;
		margin: 0;
		padding: 20px;
	}
	.input-text {
		padding: 15px;
	}
	.text-field {
		width: 100%;
		margin: 15px 0;
		font-family: inherit !important;
		input {
			font-family: Futura-Light;
			padding: 14px 14px;
			:focus {
				border-color: black;
			}
		}
		label {
			color: #263238;
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
		color: #263238;
		font-weight: bold;
		margin-top: 10px;
		&:hover {
			background-color: #f8dc4d;
		}
	}
	.text-right {
		text-align: right;
	}
	.link {
		color: #9e1b1b;
		font-weight: 500;
	}
	.link,
	.submit-change,
	input {
		font-family: inherit;
	}
	.submit-change {
		border-radius: 0px;
	}
	.dialog-email-sent {
		h2,
		p,
		button {
			font-family: inherit;
		}
	}
`;

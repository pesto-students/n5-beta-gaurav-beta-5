import styled from "styled-components";

export const SearchBarDiv = styled.div`
	display: block;
	width: 100%;
	min-height: 61px;
	background-color: #000;
	text-align: left;
	.modal-body {
		width: 30%;
		min-height: 200px;
		background-color: white;
	}
`;

export const ModalBody = styled.div`
	display: block;
	width: 30%;
	min-height: 400px;
	background-color: #fff;
	margin: 0 auto;
	position: relative;
	top: 20%;
	border: none;

	border-radius: 0;
	.map-container {
		min-height: 400px;
	}
	.distance-text {
		text-align: center;
		padding: 10px;
	}
`;

export const SearchInput = styled.input.attrs((props) => ({
	type: "text",
	className: "search-box",
	placeholder: "Search Products",
}))`
	display: inline-block;
	width: 100%;
	min-height: 50px;
	background-color: #2c2a2a;
	text-align: left;
	color: white;
	border-radius: 18px;
	font-family: inherit;
	font-size: 22px;
	padding: 10px 24px;
	box-sizing: border-box;
	box-shadow: none;
	outline: none;
	border: none;
	margin-top: 5px;
	::placeholder {
		color: white;
		opacity: 80%;
	}
	::after {
		content: "hello";
	}
	.search-icon {
		position: relative;
		top: 5px;
		right: 0;
	}
`;

export const SearchBox = styled.div`
	display: inline-block;
	width: 80%;
	position: relative;
	.search-icon {
		position: absolute;
		top: 16px;
		right: 20px;
		color: white;
		font-size: 28px;
		opacity: 80%;
	}
`;

export const SearchByLocation = styled.div`
	display: inline-block;
	width: 20%;
	text-align: left;
	color: white;
	.location-icon {
		position: relative;
		top: 5px;
		margin-right: 5px;
		left: -5px;
	}
`;

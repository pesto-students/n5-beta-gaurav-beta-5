// import React from "react";
// import {
// 	Card,
// 	CardText,
// 	CardBody,
// 	CardTitle,
// 	CardSubtitle,
// 	Button,
// } from "reactstrap";
// import { ProductContainer, ImageDiv } from "../../styles/productCard.styles";
// import { useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../../state";
// const ProductCard = (props) => {
// 	//console.log("props", props);
// 	const history = useHistory();
// 	const { id, title, price, description, category, image } = props;
// 	const truncate = (input, length) =>
// 		input.length > length ? `${input.substring(0, length)}...` : input;
// 	const dispatch = useDispatch();
// 	const { setProduct } = bindActionCreators(actionCreators, dispatch);
// 	const goToProductDetails = (item) => {
// 		setProduct(item);
// 		history.push("/pestoassignment1/product-details");
// 	};
// 	return (
// 		<ProductContainer>
// 			<Card>
// 				<ImageDiv src={image} />
// 				<CardBody>
// 					<CardTitle className="title" title={title} tag="h5">
// 						{truncate(title, 20)}
// 					</CardTitle>
// 					<CardSubtitle tag="h6" className="mb-2 text-muted">
// 						{price}
// 					</CardSubtitle>
// 					<CardText>{truncate(description, 10)}</CardText>
// 					<Button color="success">Add to cart</Button>
// 					<Button
// 						onClick={() => goToProductDetails(props)}
// 						color="none"
// 					>
// 						More Details
// 					</Button>
// 				</CardBody>
// 			</Card>
// 		</ProductContainer>
// 	);
// };

// export default ProductCard;

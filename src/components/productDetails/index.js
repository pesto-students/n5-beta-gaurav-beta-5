// import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../../state";
// import {
// 	ProductDetailsContainer,
// 	Heading,
// 	Description,
// 	Image,
// 	Price,
// } from "../../styles/productDetails.styles";
// import { Container, Row, Col, Button } from "reactstrap";
// function ProductDetails() {
// 	const { id, title, price, description, category, image } = useSelector(
// 		(state) => state.products.product
// 	);
// 	const history = useHistory();
// 	const dispatch = useDispatch();
// 	const { getProductList } = bindActionCreators(actionCreators, dispatch);
// 	useEffect(() => {
// 		console.log("indi prod");
// 	}, []);
// 	return (
// 		<ProductDetailsContainer>
// 			<Container>
// 				<Row>
// 					<Col xs={12} md={4}>
// 						<Image src={image} alt={title} />
// 					</Col>
// 					<Col xs={12} md={8}>
// 						<Heading>{title}</Heading>
// 						<Description>{description}</Description>
// 						<Price>${price}</Price>
// 						<Button color="success">Add to Cart</Button>
// 						<Button color="none" onClick={() => history.goBack()}>
// 							Back
// 						</Button>
// 					</Col>
// 				</Row>
// 			</Container>
// 		</ProductDetailsContainer>
// 	);
// }

// export default ProductDetails;

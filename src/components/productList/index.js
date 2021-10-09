import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { Loader } from "../../styles/loader.styles";
import { ProductListContainer } from "../../styles/productListContainer.styles";

import ProductCard from "../productCard";

function ProductList() {
	const [products, setProducts] = useState([]);

	const { productList, isLoading } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const { getProductList } = bindActionCreators(actionCreators, dispatch);

	useEffect(() => {
		if (productList.length === 0) getProductList();
	}, []);

	useEffect(() => {
		console.log("update state", productList);
		setProducts(productList);
	}, [productList]);

	return (
		<ProductListContainer>
			<Row xs={1} sm={2} md={3} xl={4}>
				{products &&
					products.length > 0 &&
					products.map((item) => {
						// console.log(item);
						return (
							<Col>
								<ProductCard key={item.id} {...item} />
							</Col>
						);
					})}
				<Loader show={isLoading}>
					<Spinner color="light" />{" "}
				</Loader>
			</Row>
		</ProductListContainer>
	);
}

export default ProductList;

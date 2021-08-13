import React, { useState, useEffect } from "react";
import { ProductsContainer } from "../../styles/products.styles";
import { Container, Grid, Hidden, Modal, Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useHistory } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { CategoryBtn, ModalClose } from "../../styles/category.styles";
import { ProductCardSkeleton } from "../../styles/productCard.styles";
import ProductCard from "../../shared/components/productCard";
import LocalGlobalSwitch from "../../shared/components/localGlobalSwitch";
import CategorySelection from "../../shared/components/categorySelection";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { productsAction } from "../../state";
import { useLocation } from "react-router-dom";

function Products() {
	const history = useHistory();
	const [open, setOpen] = React.useState(false);
	const [productListState, setProductListState] = useState([]);
	const search = useLocation().search;
	const dispatch = useDispatch();
	const subCatId = new URLSearchParams(search).get("subCat");
	const { getProducts } = bindActionCreators(productsAction, dispatch);
	const { productList, product, isLoading } = useSelector(
		(state) => state.products
	);

	useEffect(() => {
		if (subCatId && subCatId !== null)
			getProducts({
				body: { subCategoryId: subCatId },
				type: "subCategory",
			});
	}, []);

	useEffect(() => {
		console.log("products", productList);
		if (productList.result) setProductListState(productList.result);
		console.log("productListStateProducts", productListState);
	}, [productList]);

	const handleClick = (route) => {
		history.push(route);
	};
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<ProductsContainer>
			<Container maxWidth={false} className="category-content">
				<Grid container spacing="5" alignItems="stretch">
					<Hidden smDown>
						<Grid item lg="3">
							<CategorySelection />
						</Grid>
					</Hidden>
					<Hidden smUp>
						<Grid item xs="12">
							<CategoryBtn onClick={handleOpen}>
								Select Categories
							</CategoryBtn>
							<Modal
								open={open}
								onClose={handleClose}
								disablePortal={true}
								keepMounted={true}
								maxWidth="sm"
							>
								<Box>
									<ModalClose onClick={() => setOpen(false)}>
										<CloseIcon className="close-icon" />
									</ModalClose>
									<CategorySelection />
								</Box>
							</Modal>
						</Grid>
					</Hidden>
					<Grid item lg="9" xs="12">
						<LocalGlobalSwitch />
						<Container maxWidth={false}>
							<Grid container spacing="4">
								{productListState &&
									productListState.length > 0 &&
									productListState.map((product) => (
										<Grid
											item
											xl="3"
											lg="3"
											md="4"
											xs="12"
											className="product-card"
										>
											{isLoading ? (
												<ProductCardSkeleton>
													<Skeleton
														animation="wave"
														variant="rect"
														height={100}
														width={100}
														style={{
															margin: "6px auto",
														}}
													/>
													<Skeleton
														animation="wave"
														variant="text"
														style={{
															marginBottom: 6,
														}}
													/>
													<Skeleton
														animation="wave"
														variant="text"
														style={{
															marginBottom: 6,
														}}
													/>
													<Skeleton
														animation="wave"
														variant="text"
														style={{
															marginBottom: 6,
														}}
													/>
												</ProductCardSkeleton>
											) : (
												<ProductCard
													handleClick={handleClick}
													product={product}
												/>
											)}
										</Grid>
									))}
							</Grid>
						</Container>
					</Grid>
				</Grid>
			</Container>
		</ProductsContainer>
	);
}

export default Products;

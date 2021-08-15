import React, { useState, useEffect, useRef } from "react";
import { ProductsContainer } from "../../styles/products.styles";
import { Container, Grid, Hidden, Modal, Box } from "@material-ui/core";

import { useHistory } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { CategoryBtn, ModalClose } from "../../styles/category.styles";

import ProductCard from "../../shared/components/productCard";
import LocalGlobalSwitch from "../../shared/components/localGlobalSwitch";
import CategorySelection from "../../shared/components/categorySelection";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
	productsAction,
	uvDistanceAction,
	localGlobalAction,
} from "../../state";
import { useLocation } from "react-router-dom";

import { isEmpty } from "lodash";
import ProductSkeleton from "./productSkeleton";

function Products() {
	const [open, setOpen] = React.useState(false);
	const [productListState, setProductListState] = useState([]);
	const [orgProductListState, setOrgProductListState] = useState([]);
	const search = useLocation().search;
	const dispatch = useDispatch();
	const subCatId = new URLSearchParams(search).get("subCat");
	const { getProducts } = bindActionCreators(productsAction, dispatch);
	const { getDistance } = bindActionCreators(uvDistanceAction, dispatch);

	const { productList, product, isLoading } = useSelector(
		(state) => state.products
	);
	const { uvDistance } = useSelector((state) => state.userVendorDistance);
	const { userSelectedLocation } = useSelector(
		(state) => state.searchedLocation
	);
	const { isGlobal } = useSelector((state) => state.localGlobal);

	useEffect(() => {
		if (subCatId && subCatId !== null)
			getProducts({
				body: { subCategoryId: subCatId },
				type: "subCategory",
			});
	}, []);

	useEffect(() => {
		let arry = [...orgProductListState];

		arry.forEach((item) => {
			if (item.vendorRef.objectId == uvDistance.vendor) {
				item.distance = uvDistance.data.waypoints[0].distance.toFixed();
				item.vendorRef.distance =
					uvDistance.data.waypoints[0].distance.toFixed();
			}
		});
		if (isGlobal == false) {
			let arr = arry.filter((item) => {
				return item.vendorRef.distance < 30;
			});
			setProductListState(arr);
		} else {
			setProductListState(arry);
		}
	}, [uvDistance]);

	useEffect(() => {
		if (productList.result) {
			setOrgProductListState(productList.result);
			setProductListState(productList.result);
			if (isEmpty(userSelectedLocation) == false) {
				setProductDistance(productList.result);
			}
		}

		console.log("update....productListStateProducts", productListState);
	}, [productList]);

	useEffect(() => {
		if (isEmpty(userSelectedLocation) == false)
			setProductDistance(productList.result);
	}, [userSelectedLocation]);

	useEffect(() => {
		console.log("isGlobal", isGlobal, productList.result);
		let list = [...productListState];
		if (isGlobal == false) {
			let arr = list.filter((item) => {
				return item.vendorRef.distance < 30;
			});
			setProductListState(arr);
		} else {
			setProductListState(orgProductListState);
		}
	}, [isGlobal]);

	useEffect(() => {
		console.log("update prodliststate", productListState);
	}, [productListState]);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const setProductDistance = (productsArray) => {
		if (userSelectedLocation.center == undefined)
			setProductListState(productsArray);

		productsArray.forEach((item) => {
			calculateDistance(item);
		});
	};

	const calculateDistance = (item) => {
		let vendorGeo = `${item.vendorRef.geoLocation.long},${item.vendorRef.geoLocation.lat}`;

		let userGeo = `${userSelectedLocation.center[0]},${userSelectedLocation.center[1]}`;
		let query = `${vendorGeo};${userGeo}`;
		getDistance({ vendor: item.vendorRef.objectId, query: query });
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
												<ProductSkeleton />
											) : (
												<ProductCard
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

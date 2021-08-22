import React, { useEffect, useState } from "react";
import homeDecorBannerImg from "../../assets/images/homeDecorBanner.jpg";
import carpetBannerImg from "../../assets/images/carpet.jpg";
import wallHangingBannerImg from "../../assets/images/wallhanging.jpg";

import sofaImg from "../../assets/images/sofaBanner.jpg";
import diningImg from "../../assets/images/diningTable.jpg";

import largeApplianceImg from "../../assets/images/largeApplianceBanner.jpg";
import smallApplianceImg from "../../assets/images/smallAppliance.jpg";

import {
	CategoryBanner,
	CategoryBannerLink,
	CategoryBannerLinksContainer,
	CategoryBannerTitle,
	CategoryContainer,
	CategoryMainTitle,
	CategoryProductSlider,
	CategoryBannerText,
	CategoryBtn,
	ModalClose,
} from "../../styles/category.styles";
import { Container, Grid, Hidden, Modal, Box } from "@material-ui/core";
import ProductCard from "../../shared/components/productCard";
import LocalGlobalSwitch from "../../shared/components/localGlobalSwitch";
import { useHistory } from "react-router-dom";
import CategorySelection from "../../shared/components/categorySelection";
import CloseIcon from "@material-ui/icons/Close";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider } from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { productsAction, uvDistanceAction } from "../../state";
import BreadCrumb from "../../shared/components/breadCrumb";
import { isEmpty, orderBy } from "lodash";
import ProductSkeleton from "../../products/components/productSkeleton";

function Category() {
	const themeMat = useTheme();
	const isSmall = useMediaQuery(themeMat.breakpoints.down("sm"));
	const history = useHistory();
	const homeDecorId = "Btffw23eE4";
	const furnitureId = "y4b5xqVFzM";
	const applianceId = "djrtQawPPX";

	const showPiecesId = "sRdGKe0Btl";
	const carpetsId = "TDldZghvIU";
	const sofaId = "tvlGJt2LgJ";
	const diningId = "BMJcwoSDWq";
	const largeApplianceId = "m5DG81CFXj";
	const smallAppliaceId = "lrXfhGCEt1";

	const [open, setOpen] = React.useState(false);
	const [orgProductListState, setOrgProductListState] = useState([]);
	const [productListState, setProductListState] = useState([]);
	const [currentCategory, setCurrentCategory] = useState(homeDecorId);
	const search = useLocation().search;
	const id = new URLSearchParams(search).get("id");

	const { productList, isLoading } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const { getProducts } = bindActionCreators(productsAction, dispatch);
	const { getDistance } = bindActionCreators(uvDistanceAction, dispatch);
	const { uvDistance } = useSelector((state) => state.userVendorDistance);
	const { isGlobal } = useSelector((state) => state.localGlobal);
	const { userSelectedLocation } = useSelector(
		(state) => state.searchedLocation
	);
	const banners = {
		homeDecor: [
			{
				text: "Wallpapers & Show Pieces",
				img: wallHangingBannerImg,
				mainImg: homeDecorBannerImg,
				link: `/categories/products?subCat=${showPiecesId}`,
			},
			{
				text: "Carpets and Coverings",
				img: carpetBannerImg,
				link: `/categories/products?subCat=${carpetsId}`,
			},
		],
		furniture: [
			{
				text: "Sofa",
				img: sofaImg,
				mainImg: sofaImg,
				link: `/categories/products?subCat=${sofaId}`,
			},
			{
				text: "Dining Tables",
				img: diningImg,
				link: `/categories/products?subCat=${diningId}`,
			},
		],
		appliances: [
			{
				text: "Large Appliances",
				img: largeApplianceImg,
				mainImg: largeApplianceImg,
				link: `/categories/products?subCat=${largeApplianceId}`,
			},
			{
				text: "Small Appliances",
				img: smallApplianceImg,
				link: `/categories/products?subCat=${smallAppliaceId}`,
			},
		],
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		if (id && id !== null) {
			getProducts({ body: { categoryId: id }, type: "category" });
			setCurrentCategory(id);
			return;
		}
		getProducts({
			body: { categoryId: currentCategory },
			type: "category",
		});
		setCurrentCategory(currentCategory);
	}, []);

	useEffect(() => {
		let arry = [...orgProductListState];

		arry.forEach((item) => {
			if (item.vendorRef.objectId == uvDistance.vendor) {
				item.distance = Number(
					uvDistance.data.waypoints[0].distance.toFixed()
				);
				item.vendorRef.distance = Number(
					uvDistance.data.waypoints[0].distance.toFixed()
				);
			}
		});
		if (isGlobal == false) {
			let arr = arry.filter((item) => {
				return item.vendorRef.distance < 30;
			});
			let sortedArry = orderBy(arr, ["distance", ["asc"]]);

			setProductListState(sortedArry);
		} else {
			setProductListState(arry);
		}
	}, [uvDistance]);

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
		// console.log("products", productList);
		// if (productList.result) setProductListState(productList.result);
		// console.log("productListState", productListState);
		if (productList.result) {
			setOrgProductListState(productList.result);
			setProductListState(productList.result);
			if (isEmpty(userSelectedLocation) == false) {
				setProductDistance(productList.result);
			}
		}

		console.log("update....productListStateProducts", productListState);
	}, [productList]);

	const selectCategory = (catId) => {
		setCurrentCategory(catId);
		getProducts({ body: { categoryId: catId }, type: "category" });
		history.push({
			pathname: "/categories",
			search: `?id=${catId}`,
		});
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

	const showBanner = () => {
		switch (currentCategory) {
			case homeDecorId:
				return banners.homeDecor;
			case furnitureId:
				return banners.furniture;
			case applianceId:
				return banners.appliances;
			default:
				return banners.homeDecor;
		}
	};

	const handleClick = (route) => {
		history.push(route);
	};
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const theme = {
		isSmall: isSmall,
	};

	return (
		<ThemeProvider theme={theme}>
			<CategoryContainer>
				<CategoryBanner banner={showBanner()[0].mainImg} repeat={true}>
					{currentCategory === applianceId && (
						<CategoryBannerTitle>
							Home Appliances
						</CategoryBannerTitle>
					)}
					{currentCategory === furnitureId && (
						<CategoryBannerTitle>Furniture</CategoryBannerTitle>
					)}
					{currentCategory === homeDecorId && (
						<CategoryBannerTitle>Home Decor</CategoryBannerTitle>
					)}
					<CategoryBannerLinksContainer>
						<CategoryBannerLink
							className={
								currentCategory === applianceId ? "active" : ""
							}
							onClick={() => selectCategory(applianceId)}
						>
							Home Appliances
						</CategoryBannerLink>
						<CategoryBannerLink
							className={
								currentCategory === furnitureId ? "active" : ""
							}
							onClick={() => selectCategory(furnitureId)}
						>
							Furniture
						</CategoryBannerLink>
						<CategoryBannerLink
							className={
								currentCategory === homeDecorId ? "active" : ""
							}
							onClick={() => selectCategory(homeDecorId)}
						>
							Home Decor
						</CategoryBannerLink>
					</CategoryBannerLinksContainer>
				</CategoryBanner>
				<Container maxWidth={false} className="category-content">
					<Grid container spacing={5} alignItems="stretch">
						<Grid item xs={12}>
							<BreadCrumb />
						</Grid>
						<Hidden smDown>
							<Grid item lg={3}>
								<CategorySelection />
							</Grid>
						</Hidden>
						<Hidden smUp>
							<Grid item xs={12}>
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
										<ModalClose
											onClick={() => setOpen(false)}
										>
											<CloseIcon className="close-icon" />
										</ModalClose>
										<CategorySelection />
									</Box>
								</Modal>
							</Grid>
						</Hidden>
						<Grid item lg={9} xs={12}>
							<LocalGlobalSwitch />
							<CategoryMainTitle>
								Popular Products From Stores Near You
							</CategoryMainTitle>
							<CategoryProductSlider>
								<Grid
									container
									spacing={0}
									alignItems="stretch"
									alignContent="center"
									className="product-grid"
								>
									{isLoading && productListState.length == 0 && (
										<Grid container item xs={12}>
											<Grid item lg={3} xs={12}>
												<ProductSkeleton />
											</Grid>
											<Grid item lg={3} xs={12}>
												<ProductSkeleton />
											</Grid>
											<Grid item lg={3} xs={12}>
												<ProductSkeleton />
											</Grid>
											<Grid item lg={3} xs={12}>
												<ProductSkeleton />
											</Grid>
										</Grid>
									)}
									{isLoading == false &&
										productListState.length == 0 && (
											<Grid item xs={12}>
												<h2>No products to show</h2>
											</Grid>
										)}
									{productListState !== undefined &&
										productListState.length > 0 &&
										productListState
											.slice(0, 4)
											.map((product, index) => (
												<Grid
													key={index}
													item
													lg={3}
													xs={12}
												>
													<ProductCard
														handleClick={
															handleClick
														}
														product={product}
													/>
												</Grid>
											))}
								</Grid>
							</CategoryProductSlider>
							{showBanner().map((banner, index) => (
								<Grid key={index} item lg={12}>
									<CategoryBanner
										banner={banner.img}
										className="category-sub-banner"
										onClick={() => handleClick(banner.link)}
									>
										<CategoryBannerText
											top="70%"
											left="6%"
											color="black"
										>
											{banner.text}
										</CategoryBannerText>
									</CategoryBanner>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Container>
			</CategoryContainer>
		</ThemeProvider>
	);
}

export default Category;

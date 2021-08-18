import React, { useRef, useEffect, useState } from "react";
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
	CategoryList,
	CategoryListTitle,
	CategoryMainTitle,
	CategoryProductSlider,
	CategorySelectContainer,
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
import { productsAction } from "../../state";
import BreadCrumb from "../../shared/components/breadCrumb";

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
	const [objId, setObjId] = React.useState(homeDecorId);
	const [productListState, setProductListState] = useState([]);
	const [currentCategory, setCurrentCategory] = useState(homeDecorId);
	const search = useLocation().search;
	const id = new URLSearchParams(search).get("id");

	const { productList, product, isLoading } = useSelector(
		(state) => state.products
	);
	const dispatch = useDispatch();
	const { getProducts, setProduct } = bindActionCreators(
		productsAction,
		dispatch
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
		console.log("products", productList);
		if (productList.result) setProductListState(productList.result);
		console.log("productListState", productListState);
	}, [productList]);

	const selectCategory = (catId) => {
		setCurrentCategory(catId);
		getProducts({ body: { categoryId: catId }, type: "category" });
		history.push({
			pathname: "/categories",
			search: `?id=${catId}`,
		});
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
					{currentCategory == applianceId && (
						<CategoryBannerTitle>
							Home Appliances
						</CategoryBannerTitle>
					)}
					{currentCategory == furnitureId && (
						<CategoryBannerTitle>Furniture</CategoryBannerTitle>
					)}
					{currentCategory == homeDecorId && (
						<CategoryBannerTitle>Home Decor</CategoryBannerTitle>
					)}
					<CategoryBannerLinksContainer>
						<CategoryBannerLink
							className={
								currentCategory == applianceId ? "active" : ""
							}
							onClick={() => selectCategory(applianceId)}
						>
							Home Appliances
						</CategoryBannerLink>
						<CategoryBannerLink
							className={
								currentCategory == furnitureId ? "active" : ""
							}
							onClick={() => selectCategory(furnitureId)}
						>
							Furniture
						</CategoryBannerLink>
						<CategoryBannerLink
							className={
								currentCategory == homeDecorId ? "active" : ""
							}
							onClick={() => selectCategory(homeDecorId)}
						>
							Home Decor
						</CategoryBannerLink>
					</CategoryBannerLinksContainer>
				</CategoryBanner>
				<Container maxWidth={false} className="category-content">
					<Grid container spacing="5" alignItems="stretch">
						<Grid item xs="12">
							<BreadCrumb />
						</Grid>
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
						<Grid item lg="9" xs="12">
							<LocalGlobalSwitch />
							<CategoryMainTitle>
								Popular Products From Stores Near You
							</CategoryMainTitle>
							<CategoryProductSlider>
								<Grid
									container
									spacing="0"
									alignItems="stretch"
									alignContent="center"
									className="product-grid"
								>
									{productListState !== undefined &&
										productListState.length > 0 &&
										productListState
											.slice(0, 4)
											.map((product) => (
												<Grid lg="3" xs="12">
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
							{showBanner().map((banner) => (
								<Grid lg="12">
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

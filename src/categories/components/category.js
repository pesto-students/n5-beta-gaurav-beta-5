import React, { useRef, useEffect, useState } from "react";
import homeDecorBannerImg from "../../assets/images/homeDecorBanner.jpg";
import carpetBannerImg from "../../assets/images/carpet.jpg";
import wallHangingBannerImg from "../../assets/images/wallhanging.jpg";
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
function Category() {
	const themeMat = useTheme();
	const isSmall = useMediaQuery(themeMat.breakpoints.down("sm"));
	const history = useHistory();
	const [open, setOpen] = React.useState(false);
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
				<CategoryBanner banner={homeDecorBannerImg} repeat={true}>
					<CategoryBannerTitle>Home Decor</CategoryBannerTitle>
					<CategoryBannerLinksContainer>
						<CategoryBannerLink>Home Appliances</CategoryBannerLink>
						<CategoryBannerLink>Furniture</CategoryBannerLink>
						<CategoryBannerLink className="active">
							Home Decor
						</CategoryBannerLink>
					</CategoryBannerLinksContainer>
				</CategoryBanner>
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
									alignItems="center"
									alignContent="center"
									className="product-grid"
								>
									<Grid lg="3" xs="12">
										<ProductCard
											handleClick={handleClick}
										/>
									</Grid>
									<Grid lg="3" xs="12">
										<ProductCard />
									</Grid>
									<Grid lg="3" xs="12">
										<ProductCard />
									</Grid>
									<Grid lg="3" xs="12">
										<ProductCard />
									</Grid>
								</Grid>
							</CategoryProductSlider>
							<Grid lg="12">
								<CategoryBanner
									banner={wallHangingBannerImg}
									className="category-sub-banner"
								>
									<CategoryBannerText
										top="70%"
										left="6%"
										color="black"
									>
										WALL HANGINGS & SHOW <br />
										PIECES
									</CategoryBannerText>
								</CategoryBanner>
							</Grid>
							<Grid lg="12">
								<CategoryBanner
									banner={carpetBannerImg}
									className="category-sub-banner"
								>
									<CategoryBannerText
										top="55%"
										left="10%"
										color="white"
										size="48px"
									>
										CARPETS
									</CategoryBannerText>
								</CategoryBanner>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</CategoryContainer>
		</ThemeProvider>
	);
}

export default Category;

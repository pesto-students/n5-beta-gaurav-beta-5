import React from "react";
import { ProductsContainer } from "../../styles/products.styles";
import { Container, Grid, Hidden, Modal, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
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
import ProductCard from "../../shared/components/productCard";
import LocalGlobalSwitch from "../../shared/components/localGlobalSwitch";
import CategorySelection from "../../shared/components/categorySelection";
function Products() {
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
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard handleClick={handleClick} />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
								<Grid
									item
									xl="3"
									lg="3"
									md="4"
									xs="12"
									className="product-card"
								>
									<ProductCard />
								</Grid>
							</Grid>
						</Container>
					</Grid>
				</Grid>
			</Container>
		</ProductsContainer>
	);
}

export default Products;

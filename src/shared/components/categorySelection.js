import React, { useEffect, useState } from "react";
import {
	CategoryList,
	CategoryListTitle,
	CategorySelectContainer,
	CategorySkeletonLoader,
} from "../../styles/category.styles";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { categoriesActions } from "../../state";
import { useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Skeleton from "@material-ui/lab/Skeleton";
import * as _ from "lodash";

function CategorySelection() {
	const theme = useTheme();
	const history = useHistory();
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
	const [categoriesState, setCategoriesState] = useState([]);
	const dispatch = useDispatch();
	const { getCategories, getSubCategories } = bindActionCreators(
		categoriesActions,
		dispatch
	);

	const { categories, subCategories, isLoading } = useSelector(
		(state) => state.category
	);

	useEffect(() => {
		getCategories();
		getSubCategories();
	}, []);

	useEffect(() => {
		console.log("cat, subcat", categories, subCategories);
		groupByCategories();
	}, [categories, subCategories]);

	const groupByCategories = () => {
		let categoriesArray = [];
		if (
			categories.result &&
			subCategories.result &&
			categories.result.length > 0 &&
			subCategories.result.length > 0
		) {
			categories.result.forEach((cat) => {
				let obj = { name: null, subCat: [] };
				subCategories.result.forEach((subCat) => {
					if (cat.objectId == subCat.categoryId) {
						obj.name = cat.name;
						obj.subCat.push(subCat);
					}
				});
				categoriesArray.push(obj);
			});
			console.log("categoriesArray", categoriesArray);
		}
		setCategoriesState(categoriesArray);
	};

	const handleClick = (route) => {
		history.push(route);
	};

	return (
		<CategorySelectContainer className="category-selector-container">
			{isLoading && (
				<>
					<Skeleton
						animation="wave"
						variant="rect"
						height={10}
						style={{ marginBottom: 6 }}
					/>
					<Skeleton
						animation="wave"
						variant="rect"
						height={10}
						style={{ marginBottom: 6, marginLeft: "10%" }}
					/>
					<Skeleton
						animation="wave"
						variant="rect"
						height={10}
						style={{ marginBottom: 6, marginLeft: "10%" }}
					/>
					<Skeleton
						animation="wave"
						variant="rect"
						height={10}
						style={{ marginBottom: 20, marginLeft: "10%" }}
					/>
					<Skeleton
						animation="wave"
						variant="rect"
						height={10}
						style={{ marginBottom: 6 }}
					/>
					<Skeleton
						animation="wave"
						variant="rect"
						height={10}
						style={{ marginBottom: 6, marginLeft: "10%" }}
					/>
					<Skeleton
						animation="wave"
						variant="rect"
						height={10}
						style={{ marginBottom: 6, marginLeft: "10%" }}
					/>
					<Skeleton
						animation="wave"
						variant="rect"
						height={10}
						style={{ marginBottom: 6, marginLeft: "10%" }}
					/>
				</>
			)}
			{isLoading == false &&
				categoriesState &&
				categoriesState.length > 0 &&
				categoriesState.map((cat) => {
					return (
						<CategoryListTitle>
							{cat.name}
							{cat.subCat.map((subItem) => (
								<CategoryList
									onClick={() =>
										handleClick("/categories/products")
									}
								>
									{subItem.name}
								</CategoryList>
							))}
						</CategoryListTitle>
					);
				})}
		</CategorySelectContainer>
	);
}

export default CategorySelection;

import React from "react";
import {
	CategoryList,
	CategoryListTitle,
	CategorySelectContainer,
} from "../../styles/category.styles";
import { useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
function CategorySelection() {
	const theme = useTheme();
	const history = useHistory();
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
	const handleClick = (route) => {
		history.push(route);
	};
	const categories = [
		{
			type: "Clocks",
			subTypes: [
				{ type: "Wall Clocks" },
				{ type: "Alarm Clocks" },
				{ type: "Ethnic Clocks" },
				{ type: "Digital Clocks" },
			],
		},
		{
			type: "Clocks",
			subTypes: [
				{ type: "Wall Clocks" },
				{ type: "Alarm Clocks" },
				{ type: "Ethnic Clocks" },
				{ type: "Digital Clocks" },
			],
		},
		{
			type: "Clocks",
			subTypes: [
				{ type: "Wall Clocks" },
				{ type: "Alarm Clocks" },
				{ type: "Ethnic Clocks" },
				{ type: "Digital Clocks" },
			],
		},
		{
			type: "Clocks",
			subTypes: [
				{ type: "Wall Clocks" },
				{ type: "Alarm Clocks" },
				{ type: "Ethnic Clocks" },
				{ type: "Digital Clocks" },
			],
		},
	];
	return (
		<CategorySelectContainer className="category-selector-container">
			{categories.map((mainItem) => {
				return (
					<CategoryListTitle>
						{mainItem.type}
						{mainItem.subTypes.map((subItem) => (
							<CategoryList
								onClick={() =>
									handleClick("/categories/products")
								}
							>
								{subItem.type}
							</CategoryList>
						))}
					</CategoryListTitle>
				);
			})}
		</CategorySelectContainer>
	);
}

export default CategorySelection;

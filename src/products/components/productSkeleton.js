import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { ProductCardSkeletonDiv } from "../../styles/productCard.styles";
function ProductSkeleton() {
	return (
		<ProductCardSkeletonDiv>
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
		</ProductCardSkeletonDiv>
	);
}

export default ProductSkeleton;

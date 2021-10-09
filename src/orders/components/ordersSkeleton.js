import { Skeleton } from "@material-ui/lab";
import React from "react";

function OrdersSkeleton() {
	const styles = {};
	return (
		<div>
			<Skeleton variant="rect" />
		</div>
	);
}

export default OrdersSkeleton;

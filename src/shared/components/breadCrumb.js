import React from "react";
import { Route, Link } from "react-router-dom";
import { BreadCrumbContainer } from "../../styles/breadCrumb.styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
function BreadCrumb() {
	const BreadcrumbsItem = ({ match, ...rest }) => (
		<React.Fragment>
			<li className={match.isExact ? "breadcrumb-active" : undefined}>
				<Link to={match.url || ""}>
					<ChevronRightIcon className="icon" />
					{match.url.replace(/\\|\//g, "")}
				</Link>
			</li>
			<Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
		</React.Fragment>
	);
	const Breadcrumbs = (props) => (
		<div className="breadcrumbs">
			<ul className="container">
				<li>
					<Link to="/">Home</Link>
				</li>
				<Route path="/:path" component={BreadcrumbsItem} />
			</ul>
		</div>
	);
	return (
		<BreadCrumbContainer>
			<Breadcrumbs />
		</BreadCrumbContainer>
	);
}

export default BreadCrumb;

import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { Loader } from "../../styles/loader.styles";
import { Grid, TextField, Button, Container } from "@material-ui/core";
import { AuthContainer } from "../../styles/auth.styles";
import { useHistory } from "react-router-dom";

function ForgetPass() {
	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
	};
	return (
		<AuthContainer>
			<Container spacing={8} className="bg-white ">
				<Grid container spacing={4}>
					<Grid xs="12">
						<h3 className="profile-title">Forget Password</h3>
					</Grid>
				</Grid>

				<Grid container spacing={4} alignItems="flex-end">
					<Grid item md={true} sm={true} xs={true}>
						<TextField
							className="text-field"
							label="Email or Mobile number"
							type="text"
							InputLabelProps={{
								shrink: true,
							}}
							variant="outlined"
						/>
					</Grid>
				</Grid>

				<Grid container alignItems="center" justify="end">
					<Grid item>
						<Button
							className="link"
							disableFocusRipple
							disableRipple
							style={{ textTransform: "none" }}
							onClick={() => handleClick("/signin")}
						>
							Login
						</Button>
					</Grid>
				</Grid>

				<Grid container justify="center">
					<Button variant="contained" className="submit-change">
						Submit
					</Button>
				</Grid>
			</Container>
		</AuthContainer>
	);
}

export default ForgetPass;

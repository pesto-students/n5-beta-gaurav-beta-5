import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "../../state";
import { Loader } from "../../styles/loader.styles";
import { Grid, TextField, Button, Container } from "@material-ui/core";
import { AuthContainer } from "../../styles/auth.styles";
import { useHistory } from "react-router-dom";

function Signin() {
	const history = useHistory();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const handleClick = (route) => {
		history.push(route);
	};
	const { session, isLoading } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const { signIn } = bindActionCreators(authActions, dispatch);
	useEffect(() => {}, []);

	useEffect(() => {
		console.log("session", session);
		if (session !== null && session.sessionToken && isLoading == false)
			history.push("/");
	}, [session]);

	const userLogin = () => {
		console.log(username, password, "login details");
		signIn({ username, password });
		if (session !== null && session.sessionToken && isLoading == false)
			history.push("/");
	};
	return (
		<AuthContainer>
			<Container spacing={8} className="bg-white ">
				<Grid container spacing={4}>
					<Grid xs="12">
						<h3 className="profile-title">SIGN IN</h3>
					</Grid>
				</Grid>

				<Grid container spacing={4} alignItems="flex-end">
					<Grid item md={true} sm={true} xs={true}>
						<TextField
							className="text-field"
							label="Email or Mobile number"
							type="text"
							onChange={(e) => setUsername(e.target.value)}
							InputLabelProps={{
								shrink: true,
							}}
							variant="outlined"
						/>
					</Grid>
				</Grid>
				<Grid container spacing={4} alignItems="flex-end">
					<Grid item md={true} sm={true} xs={true}>
						<TextField
							className="text-field"
							label="Password"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
							InputLabelProps={{
								shrink: true,
							}}
							variant="outlined"
						/>
					</Grid>
				</Grid>
				<Grid container direction="row">
					<Grid item xs={6}>
						<Button
							className="link"
							disableFocusRipple
							disableRipple
							style={{ textTransform: "none" }}
							onClick={() => handleClick("/forgetpass")}
						>
							Forgot password
						</Button>
					</Grid>
					<Grid item xs={6} className="text-right">
						<Button
							className="link"
							disableFocusRipple
							disableRipple
							style={{ textTransform: "none" }}
							onClick={() => handleClick("/signup")}
						>
							Register
						</Button>
					</Grid>
				</Grid>
				<Grid container justify="center" style={{ marginTop: "10px" }}>
					<Button
						variant="contained"
						className="submit-change"
						disabled={isLoading}
						onClick={() => userLogin()}
					>
						Login
					</Button>
				</Grid>
			</Container>
		</AuthContainer>
	);
}

export default Signin;

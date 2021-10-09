import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "../../state";
import { Loader } from "../../styles/loader.styles";
import { Grid, TextField, Button, Container } from "@material-ui/core";
import { AuthContainer } from "../../styles/auth.styles";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { storeRoute } from "../../state/actions/authActions";
function Signin() {
	const history = useHistory();
	const [username, setUsername] = useState("test@test.com");
	const [password, setPassword] = useState("test@123");
	const handleClick = (route) => {
		history.push(route);
	};
	const { session, isLoading, storedRoute } = useSelector(
		(state) => state.auth
	);
	const dispatch = useDispatch();
	const { signIn } = bindActionCreators(authActions, dispatch);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		console.log("session", session, storedRoute);
		if (session !== null && session.error) {
			toast.error(session.error);
			return;
		}
		if (session !== null && session.sessionToken && isLoading == false) {
			toast.success("Signed In Successfully!");
			history.push(storedRoute);
		}
	}, [session]);

	const userLogin = () => {
		console.log(username, password, "login details");
		if (username === "" || password === "") {
			toast.error("Please provide username and password");
			return;
		}

		signIn({ username, password });

		if (session !== null && session.sessionToken && isLoading == false)
			history.push(storedRoute);
	};
	return (
		<AuthContainer>
			<Container spacing={8} className="bg-white ">
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<h3 className="profile-title">SIGN IN</h3>
					</Grid>
				</Grid>

				<Grid
					container
					spacing={4}
					alignItems="flex-end"
					className="input-text"
				>
					<Grid item md={true} sm={true} xs={12}>
						<TextField
							className="text-field"
							label="Email"
							type="text"
							id="email"
							required
							onChange={(e) => setUsername(e.target.value)}
							InputLabelProps={{
								shrink: true,
							}}
							variant="outlined"
						/>
					</Grid>
				</Grid>
				<Grid
					container
					spacing={4}
					alignItems="flex-end"
					className="input-text"
				>
					<Grid item md={true} sm={true} xs={12}>
						<TextField
							className="text-field"
							label="Password"
							id="password"
							type="password"
							required
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
						id="login"
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

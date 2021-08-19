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
function Signup() {
	const history = useHistory();

	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const { signUpSession, isLoading } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const { signUp } = bindActionCreators(authActions, dispatch);
	const handleClick = (route) => {
		history.push(route);
	};

	useEffect(() => {
		if (
			signUpSession !== null &&
			signUpSession.sessionToken &&
			isLoading == false
		)
			history.push("/signin");
	}, [signUpSession]);

	const registerUser = () => {
		let body = { name, password, email, username: email, phone };
		if (name === "" || password === "" || email === "") {
			toast.error("Please fill all required fields (*)");
			return;
		}
		toast.success("Sign up successful!");
		signUp(body);
		if (
			signUpSession !== null &&
			signUpSession.sessionToken &&
			isLoading == false
		)
			history.push("/signin");
	};

	return (
		<AuthContainer>
			<Container spacing={8} className="bg-white ">
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<h3 className="profile-title">CREATE ACCOUNT</h3>
					</Grid>
				</Grid>
				<Grid container spacing={4} alignItems="flex-end">
					<Grid item md={true} sm={true} xs={true}>
						<TextField
							className="text-field"
							label="Your Name"
							type="text"
							required
							onChange={(e) => setName(e.target.value)}
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
							label="Email"
							required
							type="email"
							onChange={(e) => setEmail(e.target.value)}
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
							label="Mobile"
							type="number"
							onChange={(e) => setPhone(e.target.value)}
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
							required
							InputLabelProps={{
								shrink: true,
							}}
							variant="outlined"
						/>
					</Grid>
				</Grid>

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

				<Grid container justify="center" style={{ marginTop: "10px" }}>
					<Button
						variant="contained"
						onClick={() => registerUser()}
						disabled={isLoading}
						className="submit-change"
					>
						Register
					</Button>
				</Grid>
			</Container>
		</AuthContainer>
	);
}

export default Signup;

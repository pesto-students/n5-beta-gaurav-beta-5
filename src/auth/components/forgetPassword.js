import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { authActions } from "../../state";
import { Loader } from "../../styles/loader.styles";
import {
	Grid,
	TextField,
	Button,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@material-ui/core";
import { AuthContainer } from "../../styles/auth.styles";
import { useHistory } from "react-router-dom";

function ForgetPass() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [dialogOpen, setDialogOpen] = useState(false);
	const { resetPasswordState, isLoading } = useSelector(
		(state) => state.auth
	);
	const dispatch = useDispatch();
	const { resetPassword } = bindActionCreators(authActions, dispatch);

	useEffect(() => {
		console.log("update reste pass", resetPasswordState);
		if (resetPasswordState !== null) setDialogOpen(true);
	}, [resetPasswordState]);

	const handleResetPassword = () => {
		resetPassword({ email });
	};

	const handleClick = (route) => {
		history.push(route);
	};
	const handleClose = () => {
		setDialogOpen(false);
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
							label="Email"
							type="text"
							required
							onChange={(e) => setEmail(e.target.value)}
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
					<Button
						variant="contained"
						className="submit-change"
						disabled={isLoading}
						onClick={() => handleResetPassword()}
					>
						Submit
					</Button>
					<Dialog
						open={dialogOpen}
						onClose={handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
						className="dialog-email-sent"
						disablePortal={true}
					>
						<DialogTitle id="alert-dialog-title">
							Password reset
						</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								An Email has been sent to <b>{email}</b>, with
								reset password link.
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose} color="primary">
								OK
							</Button>
						</DialogActions>
					</Dialog>
				</Grid>
			</Container>
		</AuthContainer>
	);
}

export default ForgetPass;

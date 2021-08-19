import React, { useState, useEffect } from "react";
import { UserProfileContainer } from "../../styles/userProfile.styles";
import { Container, Grid, TextField, Box } from "@material-ui/core";
import avatarImg from "../../assets/images/avatar-main.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { addressAction } from "../../state";
import { authActions } from "../../state";
import { toast } from "react-toastify";
function UserProfile() {
	const [formReadOnly, setFormReadOnly] = useState(true);
	const [userInfo, setUserInfo] = useState({
		name: "",
		phone: "",
		email: "",
	});

	const [userAddressState, setUserAddressState] = useState({});
	const history = useHistory();
	const dispatch = useDispatch();
	const editForm = () => {
		setFormReadOnly(!formReadOnly);
	};
	const { session } = useSelector((state) => state.auth);
	const { userAddresses } = useSelector((state) => state.addressState);
	const { userUpdated, isLoading } = useSelector((state) => state.auth);
	const { getAddresses } = bindActionCreators(addressAction, dispatch);
	const { updateUserInfo, clearSession } = bindActionCreators(
		authActions,
		dispatch
	);
	useEffect(() => {
		console.log("user profile", session);
		if (session == null || session == undefined) {
			history.push("/signin");
			return;
		}
		setUserInfo(session);
		getAddresses({ userId: session.objectId });
	}, []);

	useEffect(() => {
		console.log("user profile", userAddresses);
		setUserAddressState(userAddresses.result?.[0]);
	}, [userAddresses]);

	useEffect(() => {
		console.log("user userUpdated", userUpdated);
		setFormReadOnly(true);
		if (userUpdated?.result?.code == 206) {
			toast.error("Some Error occurred!");
			return;
		}
		if (userUpdated?.result?.code == 200) {
			toast.success("User Updated successfully");
		}
	}, [userUpdated]);

	const handleRoute = () => {
		history.push("/address-management");
	};

	const handleOnChange = (e) => {
		let info = { ...userInfo };
		switch (e.target.id) {
			case "name":
				info.name = e.target.value;
				setUserInfo({ ...info });
				break;
			case "phone":
				info.phone = e.target.value;
				setUserInfo({ ...info });
				break;
			case "email":
				info.email = e.target.value;
				setUserInfo({ ...info });
				break;
			default:
				setUserInfo({ ...userInfo });
				break;
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		updateUserInfo(userInfo);
		console.log("userInfo", userInfo);
	};

	const logout = () => {
		clearSession();
		history.push("/");
	};

	return (
		<UserProfileContainer avatar={avatarImg}>
			<Container className="bg-white">
				<Grid container spacing="3">
					<Grid xs="12">
						<h3 className="profile-title">USER PROFILE</h3>
					</Grid>
					<Grid item xs="12">
						<Grid container item spacing="3">
							<Grid item lg="6" xs="12">
								<div className="avatar"></div>
							</Grid>
							<Grid item lg="6" xs="12">
								<h3 className="details">{userInfo.name}</h3>

								<p>Phone: {userInfo.phone}</p>
								<p>Email: {userInfo.email}</p>
								<form
									noValidate
									autoComplete="off"
									onSubmit={(e) => handleFormSubmit(e)}
									onChange={(e) => handleOnChange(e)}
								>
									<Grid container item spacing="3">
										<Box
											display={formReadOnly ? "none" : ""}
										>
											<Grid item lg="6" xs="12">
												<TextField
													className="text-field"
													label="Full Name (First & Last name)"
													type="text"
													id="name"
													value={userInfo.name}
													disabled={formReadOnly}
													InputLabelProps={{
														shrink: true,
													}}
													variant="outlined"
												/>
												<TextField
													className="text-field"
													label="Phone Number"
													id="phone"
													type="text"
													value={userInfo.phone}
													disabled={formReadOnly}
													InputLabelProps={{
														shrink: true,
													}}
													variant="outlined"
												/>
												<TextField
													className="text-field"
													label="Email Address"
													type="email"
													id="email"
													value={userInfo.email}
													disabled={formReadOnly}
													InputLabelProps={{
														shrink: true,
													}}
													variant="outlined"
												/>
											</Grid>
										</Box>

										<Grid item lg="3" xs="12">
											{formReadOnly == false && (
												<button
													disabled={isLoading}
													type="submit"
													className="submit-change"
												>
													Save
												</button>
											)}
											{formReadOnly && (
												<button
													onClick={editForm}
													className="submit-change"
												>
													Edit
												</button>
											)}
										</Grid>
										<Grid item xs="12" lg="3">
											{session !== null && (
												<button
													onClick={logout}
													className="submit-change"
												>
													Logout
												</button>
											)}
										</Grid>
										<Grid container item lg="12" xs="12">
											<Grid item lg="6" xs="12">
												{userAddresses.result &&
													userAddresses.result
														.length > 0 && (
														<p>
															{
																userAddressState?.streetAddress
															}
															, <br />
															{
																userAddressState?.city
															}
															,{" "}
															{
																userAddressState?.state
															}
															,
															<br />
															{
																userAddressState?.country
															}
															,<br />
															{
																userAddressState?.pincode
															}
														</p>
													)}
												<button
													onClick={handleRoute}
													className="submit-change"
												>
													Add/Edit Address
												</button>
											</Grid>
										</Grid>
									</Grid>
								</form>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</UserProfileContainer>
	);
}

export default UserProfile;

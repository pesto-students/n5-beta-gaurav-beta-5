import React, { useState, useEffect } from "react";
import { UserProfileContainer } from "../../styles/userProfile.styles";
import { Container, Grid, TextField, Box } from "@material-ui/core";
import avatarImg from "../../assets/images/avatar-main.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function UserProfile() {
	const [formReadOnly, setFormReadOnly] = useState(true);
	const [userInfo, setUserInfo] = useState({
		name: "",
		phone: "",
		email: "",
	});
	const history = useHistory();
	const editForm = () => {
		setFormReadOnly(!formReadOnly);
	};
	const { session } = useSelector((state) => state.auth);
	useEffect(() => {
		console.log("user profile", session);
		if (session == null || session == undefined) {
			history.push("/signin");
		}
		setUserInfo(session);
	}, []);
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
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Aliquam vero soluta beatae
									nostrum labore harum exercitationem nam quo
									ab nulla, minima quos, a modi fuga. Fugiat a
									quos porro beatae!
								</p>
								<p>Phone: {userInfo.phone}</p>
								<p>Email: {userInfo.email}</p>
								<form noValidate autoComplete="off">
									<Grid container item spacing="3">
										<Box
											display={formReadOnly ? "none" : ""}
										>
											<Grid item lg="6" xs="12">
												<TextField
													className="text-field"
													label="Full Name (First & Last name)"
													type="text"
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
													value={userInfo.email}
													disabled={formReadOnly}
													InputLabelProps={{
														shrink: true,
													}}
													variant="outlined"
												/>
											</Grid>
										</Box>

										<Grid item xs="12">
											{formReadOnly == false && (
												<button
													type="submit"
													className="submit-change"
													onClick={editForm}
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

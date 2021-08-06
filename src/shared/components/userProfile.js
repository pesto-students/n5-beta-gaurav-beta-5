import React, { useState } from "react";
import { UserProfileContainer } from "../../styles/userProfile.styles";
import { Container, Grid, TextField } from "@material-ui/core";
import avatarImg from "../../assets/images/avatar-main.jpg";

function UserProfile() {
	const [formReadOnly, setFormReadOnly] = useState(true);
	const editForm = () => {
		setFormReadOnly(!formReadOnly);
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
								<h3 className="details">Omkar Kamale</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Aliquam vero soluta beatae
									nostrum labore harum exercitationem nam quo
									ab nulla, minima quos, a modi fuga. Fugiat a
									quos porro beatae!
								</p>
								<p>Phone: 9594552799</p>
								<p>Email: q@qqqq.com</p>
							</Grid>
						</Grid>
						<form noValidate autoComplete="off">
							<Grid container item spacing="3">
								<Grid item lg="6" xs="12">
									<TextField
										className="text-field"
										label="Full Name (First & Last name)"
										type="text"
										value="Omkar Kamale"
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
										value="9974979797"
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
										value="q@q.com"
										disabled={formReadOnly}
										InputLabelProps={{
											shrink: true,
										}}
										variant="outlined"
									/>
								</Grid>
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
			</Container>
		</UserProfileContainer>
	);
}

export default UserProfile;

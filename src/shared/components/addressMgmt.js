import React, { useState, useEffect } from "react";
import {
	AddAdressContainer,
	AddressMgmtContainer,
	SelectAddressContainer,
} from "../../styles/addressMgmt.styles";
import { Container, Grid, TextField, Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addressAction, mapAction } from "../../state";
import { isEmpty } from "lodash";

function AddressMgmt() {
	const history = useHistory();
	const handleClick = (route) => {
		history.push(route);
	};

	const [addressFields, setAddressFields] = useState({
		fname: "",
		lname: "",
		street: "",
		pincode: "",
		city: "",
		state: "",
		country: "India",
		addressId: "",
	});

	const { userSelectedLocation } = useSelector(
		(state) => state.searchedLocation
	);

	const userSession = JSON.parse(localStorage.getItem("session"));

	const { userAddresses, addedAddress, updatedAddress } = useSelector(
		(state) => state.addressState
	);
	const dispatch = useDispatch();
	const { showMap } = bindActionCreators(mapAction, dispatch);
	const { getAddresses, updateAddress, addAddress } = bindActionCreators(
		addressAction,
		dispatch
	);
	const [showAddAddress, setShowAddAddress] = useState(false);

	const addNewAddress = () => {
		setShowAddAddress(true);
		showMap(true);
	};

	useEffect(() => {
		setAddressFromUserLocation();
	}, []);

	useEffect(() => {
		setAddressFromUserLocation();
	}, [userSelectedLocation]);

	const setAddressFromUserLocation = () => {
		if (isEmpty(userSelectedLocation)) return;
		let context = userSelectedLocation.context;
		let street = userSelectedLocation.place_name;
		let city = context.filter((i) => i.id.includes("place"))[0].text;
		let state = context.filter((i) => i.id.includes("region"))[0].text;
		setAddressFields({ ...addressFields, street, city, state });
	};

	const addEditAddress = (e) => {
		let addressCopy = { ...addressFields };
		switch (e.target.id) {
			case "fname":
				addressCopy.fname = e.target.value;
				setAddressFields(addressCopy);
				break;
			case "lname":
				addressCopy.lname = e.target.value;
				setAddressFields(addressCopy);
				break;
			case "street":
				addressCopy.street = e.target.value;
				setAddressFields(addressCopy);
				break;
			case "city":
				addressCopy.city = e.target.value;
				setAddressFields(addressCopy);
				break;
			case "state":
				addressCopy.state = e.target.value;
				setAddressFields(addressCopy);
				break;
			case "pincode":
				addressCopy.pincode = e.target.value;
				setAddressFields(addressCopy);
				break;
			default:
				setAddressFields({ ...addressFields });
				break;
		}

		//console.log({ ...addressFields });
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		console.log("on submit", addressFields);
	};

	return (
		<AddressMgmtContainer>
			<Container>
				<SelectAddressContainer>
					<div className="select-address">
						<h3>SELECT DELIVERY ADDRESS</h3>
						<p>
							Is the address you'd like to use displayed below? If
							so, click the corresponding "Deliver to this
							address" button. Or you can enter a new delivery
							address.
						</p>
					</div>
					<Grid container spacing="3">
						<Grid container spacing="3" item lg="8" xs="12">
							<Grid item xs="4">
								<h4>Omkar Kamale</h4>
								<p>
									506 Abc CHS, Plot 123, Sector 19, Nerul,
									Navi Mumbai Maharashtra, 400706 India
								</p>
								<button
									className="delivery-address-btn"
									onClick={() => handleClick("/makepayment")}
								>
									Deliver to this address
								</button>
								<button className="sub-btn first">Edit</button>
								<button className="sub-btn">Delete</button>
							</Grid>
							<Grid item xs="4">
								<h4>Omkar Kamale</h4>
								<p>
									506 Abc CHS, Plot 123, Sector 19, Nerul,
									Navi Mumbai Maharashtra, 400706 India
								</p>
								<button
									className="delivery-address-btn"
									onClick={() => handleClick("/makepayment")}
								>
									Deliver to this address
								</button>
								<button className="sub-btn first">Edit</button>
								<button className="sub-btn">Delete</button>
							</Grid>
						</Grid>
						<Grid
							container
							item
							lg="4"
							xs="12"
							alignContent="center"
							alignItems="center"
						>
							<Box
								textAlign="center"
								className="add-address-box"
								onClick={() => addNewAddress()}
							>
								<span className="add-address">
									<AddIcon className="add-icon" />
								</span>
								<span className="add-text">ADD ADDRESS</span>
							</Box>
						</Grid>
					</Grid>
				</SelectAddressContainer>
				{showAddAddress && (
					<AddAdressContainer>
						<div className="add-address">
							<h3>ADD NEW ADDRESS</h3>
						</div>
						<Grid container spacing="3">
							<Grid item xs="12">
								<form
									noValidate
									autoComplete="off"
									onChange={(e) => addEditAddress(e)}
									onSubmit={(e) => onFormSubmit(e)}
								>
									<Grid container item spacing="3">
										<Grid item lg="6" xs="12">
											<Grid item container spacing="3">
												<Grid item lg="6" xs="12">
													<TextField
														className="text-field"
														label="First name"
														type="text"
														id="fname"
														value={
															addressFields.fname
														}
														required
														InputLabelProps={{
															shrink: true,
														}}
														variant="outlined"
													/>
												</Grid>
												<Grid item lg="6" xs="12">
													<TextField
														className="text-field"
														label="Last name"
														type="text"
														id="lname"
														value={
															addressFields.lname
														}
														required
														InputLabelProps={{
															shrink: true,
														}}
														variant="outlined"
													/>
												</Grid>
											</Grid>

											<TextField
												className="text-field"
												label="Street Address"
												id="street"
												type="text"
												value={addressFields.street}
												required
												InputLabelProps={{
													shrink: true,
												}}
												variant="outlined"
											/>
											<TextField
												className="text-field"
												label="City"
												type="text"
												id="city"
												value={addressFields.city}
												required
												InputLabelProps={{
													shrink: true,
												}}
												variant="outlined"
											/>
										</Grid>
										<Grid item lg="6" xs="12">
											<TextField
												className="text-field"
												label="State"
												type="text"
												id="state"
												value={addressFields.state}
												required
												InputLabelProps={{
													shrink: true,
												}}
												variant="outlined"
											/>
											<TextField
												className="text-field"
												label="Country/Region"
												type="text"
												id="country"
												value={addressFields.country}
												required
												InputLabelProps={{
													shrink: true,
												}}
												variant="outlined"
											/>
											<TextField
												className="text-field"
												label="PIN Code"
												type="number"
												id="pincode"
												value={addressFields.pincode}
												required
												InputLabelProps={{
													shrink: true,
												}}
												error={false}
												variant="outlined"
											/>
										</Grid>
										<Grid item lg="6" xs="12">
											<button
												type="submit"
												className="save-address-btn"
											>
												Save Address
											</button>
											<button
												type="submit"
												onClick={() =>
													setShowAddAddress(false)
												}
												className="cancel-address-btn"
											>
												Cancel
											</button>
										</Grid>
									</Grid>
								</form>
							</Grid>
						</Grid>
					</AddAdressContainer>
				)}
			</Container>
		</AddressMgmtContainer>
	);
}

export default AddressMgmt;

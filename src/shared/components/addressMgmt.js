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
import Skeleton from "@material-ui/lab/Skeleton";
import { toast } from "react-toastify";
function AddressMgmt() {
	const history = useHistory();
	const handleCurrentAddress = (route, address) => {
		history.push(route);
		setCurrentAddress(address);
	};
	const userSession = JSON.parse(localStorage.getItem("session"));
	const [addressFields, setAddressFields] = useState({
		fname: "",
		lname: "",
		street: "",
		pincode: "",
		city: "",
		state: "",
		country: "India",
		addressId: "",
		userId: userSession && userSession !== null ? userSession.objectId : "",
		geoLocation: { lat: 0, long: 0 },
	});

	const [error, setError] = useState({
		fnameError: false,
		lnameError: false,
		streetError: false,
		pincodeError: false,
		cityError: false,
		stateError: false,
		countryError: false,
	});

	const { userSelectedLocation } = useSelector(
		(state) => state.searchedLocation
	);

	const {
		userAddresses,
		addedAddress,
		updatedAddress,
		deletedAddress,

		isLoading,
	} = useSelector((state) => state.addressState);
	const dispatch = useDispatch();
	const { showMap } = bindActionCreators(mapAction, dispatch);
	const {
		getAddresses,
		updateAddress,
		addAddress,
		deleteAddress,
		setCurrentAddress,
	} = bindActionCreators(addressAction, dispatch);
	const [showAddAddress, setShowAddAddress] = useState(false);

	const addNewAddress = () => {
		setAddressFields({ ...addressFields, addressId: "" });
		setShowAddAddress(true);
		showMap(true);
	};

	useEffect(() => {
		setAddressFromUserLocation();
		if (userSession && userSession !== null)
			getAddresses({ userId: userSession.objectId });
	}, []);

	useEffect(() => {
		setShowAddAddress(false);
		if (userSession && userSession !== null)
			getAddresses({ userId: userSession.objectId });
	}, [addedAddress, updatedAddress, deletedAddress]);

	useEffect(() => {
		// setAddressFromUserLocation();
		console.log("userAddresses", userAddresses);
	}, [userAddresses]);

	useEffect(() => {
		setAddressFromUserLocation();
	}, [userSelectedLocation]);

	const setAddressFromUserLocation = () => {
		if (isEmpty(userSelectedLocation)) return;
		let context = userSelectedLocation.context;
		let street = userSelectedLocation.place_name;
		let city = context.filter((i) => i.id.includes("place"))[0]
			? context.filter((i) => i.id.includes("place"))[0].text
			: "";
		let state = context.filter((i) => i.id.includes("region"))[0]
			? context.filter((i) => i.id.includes("region"))[0].text
			: "";
		setAddressFields({ ...addressFields, street, city, state });
	};

	const addEditAddress = (e) => {
		let addressCopy = { ...addressFields };
		let errorCopy = { ...error };
		if (isEmpty(userSelectedLocation) === false) {
			addressCopy.geoLocation.lat = userSelectedLocation.center[0];
			addressCopy.geoLocation.long = userSelectedLocation.center[1];
		}
		switch (e.target.id) {
			case "fname":
				addressCopy.fname = e.target.value;
				e.target.value === ""
					? (errorCopy.fnameError = true)
					: (errorCopy.fnameError = false);
				setAddressFields(addressCopy);
				setError(errorCopy);
				break;
			case "lname":
				addressCopy.lname = e.target.value;
				e.target.value === ""
					? (errorCopy.lnameError = true)
					: (errorCopy.lnameError = false);
				setAddressFields(addressCopy);
				setError(errorCopy);
				break;
			case "street":
				addressCopy.street = e.target.value;
				e.target.value === ""
					? (errorCopy.streetError = true)
					: (errorCopy.streetError = false);
				setAddressFields(addressCopy);
				setError(errorCopy);
				break;
			case "city":
				addressCopy.city = e.target.value;
				e.target.value === ""
					? (errorCopy.cityError = true)
					: (errorCopy.cityError = false);
				setAddressFields(addressCopy);
				setError(errorCopy);
				break;
			case "state":
				addressCopy.state = e.target.value;
				e.target.value === ""
					? (errorCopy.stateError = true)
					: (errorCopy.stateError = false);
				setAddressFields(addressCopy);
				setError(errorCopy);
				break;
			case "pincode":
				addressCopy.pincode = e.target.value;
				e.target.value === ""
					? (errorCopy.pincodeError = true)
					: (errorCopy.pincodeError = false);
				setAddressFields(addressCopy);
				setError(errorCopy);
				break;
			default:
				setAddressFields({ ...addressFields });
				break;
		}

		//console.log({ ...addressFields });
	};

	const editAddress = (address) => {
		const {
			objectId,
			city,
			country,
			firstName,
			lastName,
			pincode,
			state,
			streetAddress,
		} = address;
		setShowAddAddress(true);
		setAddressFields({
			...addressFields,
			fname: firstName,
			lname: lastName,
			street: streetAddress,
			pincode: pincode,
			city: city,
			state: state,
			country: country,
			addressId: objectId,
		});
	};

	const deleteThisAddress = (address) => {
		deleteAddress({ addressId: address.objectId });
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		var errorTrue = Object.keys(error).some((k) => error[k] === true);
		var valueBlank = Object.keys(addressFields).some(
			(k) => k !== "addressId" && addressFields[k] === ""
		);
		if (errorTrue || valueBlank) {
			toast.error("Please fill all the required (*) fields");
			return;
		}
		if (addressFields.addressId !== "") {
			console.log("edit", JSON.stringify(addressFields));
			updateAddress(addressFields);
			return;
		}
		addAddress(addressFields);
		console.log("on submit add", addressFields);
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
					<Grid container spacing={3}>
						<Grid container spacing={3} item lg={8} xs={12}>
							{isLoading && (
								<Grid item lg={4} xs={12}>
									<Skeleton
										variant="text"
										style={{ marginBottom: "10px" }}
									/>
									<Skeleton
										variant="rect"
										width={210}
										height={100}
										style={{ marginBottom: "10px" }}
									/>
									<Skeleton
										variant="rect"
										height={30}
										style={{ marginBottom: "10px" }}
									/>
									<Skeleton
										variant="rect"
										height={30}
										style={{ marginBottom: "10px" }}
									/>
								</Grid>
							)}
							{userAddresses.result &&
								isLoading == false &&
								userAddresses.result.length > 0 &&
								userAddresses.result.map((address) => (
									<Grid
										key={address.objectId}
										item
										lg={4}
										xs={12}
									>
										<h4>
											{address.firstName}{" "}
											{address.lastName}
										</h4>
										<p>
											{address.streetAddress}, <br />
											{address.city}, {address.state},
											<br />
											{address.country},<br />
											{address.pincode}
										</p>
										<button
											className="delivery-address-btn"
											onClick={() =>
												handleCurrentAddress(
													"/makepayment",
													address
												)
											}
										>
											Deliver to this address
										</button>
										<button
											onClick={() => editAddress(address)}
											className="sub-btn first"
										>
											Edit
										</button>
										<button
											disabled={isLoading}
											onClick={() =>
												deleteThisAddress(address)
											}
											className="sub-btn"
										>
											Delete
										</button>
									</Grid>
								))}
						</Grid>
						<Grid
							container
							item
							lg={4}
							xs={12}
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
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<form
									noValidate
									autoComplete="off"
									onChange={(e) => addEditAddress(e)}
									onSubmit={(e) => onFormSubmit(e)}
								>
									<Grid container item spacing={3}>
										<Grid item lg={6} xs={12}>
											<Grid item container spacing={3}>
												<Grid item lg={6} xs={12}>
													<TextField
														className="text-field"
														label="First name"
														type="text"
														id="fname"
														error={error.fnameError}
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
												<Grid item lg={6} xs={12}>
													<TextField
														className="text-field"
														label="Last name"
														type="text"
														id="lname"
														error={error.lnameError}
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
												error={error.streetError}
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
												error={error.cityError}
												required
												InputLabelProps={{
													shrink: true,
												}}
												variant="outlined"
											/>
										</Grid>
										<Grid item lg={6} xs={12}>
											<TextField
												className="text-field"
												label="State"
												type="text"
												id="state"
												value={addressFields.state}
												error={error.stateError}
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
												error={error.countryError}
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
												error={error.pincodeError}
												required
												InputLabelProps={{
													shrink: true,
												}}
												error={false}
												variant="outlined"
											/>
										</Grid>
										<Grid item lg={6} xs={12}>
											<button
												disabled={isLoading}
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

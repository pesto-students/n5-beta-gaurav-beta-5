import React from "react";
import {
	AddAdressContainer,
	AddressMgmtContainer,
	SelectAddressContainer,
} from "../../styles/addressMgmt.styles";
import { Container, Grid, TextField } from "@material-ui/core";
function AddressMgmt() {
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
						<Grid item xs="2">
							<h4>Omkar Kamale</h4>
							<p>
								506 Abc CHS, Plot 123, Sector 19, Nerul, Navi
								Mumbai Maharashtra, 400706 India
							</p>
							<button className="delivery-address-btn">
								Deliver to this address
							</button>
							<button className="sub-btn first">Edit</button>
							<button className="sub-btn">Delete</button>
						</Grid>
						<Grid item xs="2">
							<h4>Omkar Kamale</h4>
							<p>
								506 Abc CHS, Plot 123, Sector 19, Nerul, Navi
								Mumbai Maharashtra, 400706 India
							</p>
							<button className="delivery-address-btn">
								Deliver to this address
							</button>
							<button className="sub-btn first">Edit</button>
							<button className="sub-btn">Delete</button>
						</Grid>
					</Grid>
				</SelectAddressContainer>
				<AddAdressContainer>
					<div className="add-address">
						<h3>ADD NEW ADDRESS</h3>
					</div>
					<Grid container spacing="3">
						<Grid item xs="12">
							<form noValidate autoComplete="off">
								<Grid container item spacing="3">
									<Grid item lg="6" xs="12">
										<TextField
											className="text-field"
											label="Full Name (First & Last name)"
											type="text"
											InputLabelProps={{
												shrink: true,
											}}
											variant="outlined"
										/>
										<TextField
											className="text-field"
											label="Country/Region"
											type="text"
											InputLabelProps={{
												shrink: true,
											}}
											variant="outlined"
										/>
										<TextField
											className="text-field"
											label="Street Address"
											type="text"
											InputLabelProps={{
												shrink: true,
											}}
											variant="outlined"
										/>
									</Grid>
									<Grid item lg="6" xs="12">
										<TextField
											className="text-field"
											label="City"
											type="text"
											InputLabelProps={{
												shrink: true,
											}}
											variant="outlined"
										/>
										<TextField
											className="text-field"
											label="State"
											type="text"
											InputLabelProps={{
												shrink: true,
											}}
											variant="outlined"
										/>
										<TextField
											className="text-field"
											label="PIN Code"
											type="text"
											InputLabelProps={{
												shrink: true,
											}}
											variant="outlined"
										/>
									</Grid>
									<Grid item xs="12">
										<button
											type="submit"
											className="save-address-btn"
										>
											Save Address
										</button>
									</Grid>
								</Grid>
							</form>
						</Grid>
					</Grid>
				</AddAdressContainer>
			</Container>
		</AddressMgmtContainer>
	);
}

export default AddressMgmt;

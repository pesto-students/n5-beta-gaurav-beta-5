import React, { useRef, useEffect, useState } from "react";
import { LocationServiceContainer } from "../../styles/loactionService.styles";
import { ModalBody } from "../../styles/loactionService.styles.js";

import { LocationOnOutlined } from "@material-ui/icons";
import Modal from "@material-ui/core/Modal";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { locationSearchAction } from "../../state";
import { mapBoxApiKey } from "../api/config";

mapboxgl.accessToken = mapBoxApiKey;

function LocationService(props) {
	const [open, setOpen] = React.useState(false);
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(null);
	const [lat, setLat] = useState(null);
	const [zoom, setZoom] = useState(12);
	const [mapObject, setMapObject] = useState();
	const [mapMarker, setMapMarker] = useState();
	const [calculatedDis, setCalculatedDis] = useState(0);
	const [showLocSearch, setShowLocSearch] = useState(false);
	const [inputValue, setInputValue] = useState();
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
	const { locations, userSelectedLocation, userLatLong, isLoading } =
		useSelector((state) => state.searchedLocation);
	const dispatch = useDispatch();
	const { locationSearch, setUserLatLong, setUserLocation } =
		bindActionCreators(locationSearchAction, dispatch);
	// const [map, setMap] = useState(null);
	const mapAPIKey = "AIzaSyCIvL2H0HuV2Id1daEwNkgGkAJybAui6Ho";
	const handleOpen = () => {
		setOpen(true);
		setLat(props.coords ? props.coords.latitude : 19.0295309);
		setLng(props.coords ? props.coords.longitude : 73.0206934);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (props.coords !== null) {
			if (map.current) return; // initialize map only once
			map.current = new mapboxgl.Map({
				container: mapContainer.current,
				style: "mapbox://styles/mapbox/streets-v11",
				center: [lng, lat],
				zoom: zoom,
			});
			var marker = new mapboxgl.Marker({
				color: "red",
				draggable: true,
			})
				.setLngLat([lng, lat])
				.addTo(map.current);
			setMapMarker(marker);
			console.log("updated lat long", lat, lng);
			function onDragEnd() {
				const lngLat = marker.getLngLat();
				setLat(lngLat.lat);
				setLng(lngLat.lng);
				console.log("lngLat", lngLat);
				locationSearch({ query: `${lngLat.lng},${lngLat.lat}` });
				setShowLocSearch(true);
			}
			marker.on("dragend", onDragEnd);
			setMapObject(map.current);
		}
	}, [mapContainer, map, lat, lng]);

	useEffect(() => {
		//console.log("locations", locations);
		console.log("userSelectedLocation", userSelectedLocation);
		setShowLocSearch(false);
		if (userSelectedLocation.center) {
			setLat(userSelectedLocation.center[0]);
			setLng(userSelectedLocation.center[1]);
			console.log(lat, lng);
		}
	}, [userSelectedLocation]);

	const searchLocation = (e) => {
		// console.log(e.target.value);
		locationSearch({ query: e.target.value });
		setInputValue(e.target.value);
	};

	const setMapCenter = (coords) => {
		if (mapObject) {
			mapObject.setCenter(coords);
		}
	};

	const selectUserLocation = (loc) => {
		console.log("loc", loc);
		setUserLocation(loc);
		setMapCenter(loc.center);
		setMapMarker(mapMarker.setLngLat(loc.center));
		setInputValue(loc.place_name);
	};

	const truncate = (input, length) =>
		input.length > length ? `${input.substring(0, length)}...` : input;

	return (
		<>
			<LocationServiceContainer isSmall={isSmall}>
				<div onClick={handleOpen} className="location-text">
					<LocationOnOutlined className="location-icon" />
					{userSelectedLocation.place_name
						? truncate(userSelectedLocation.place_name, 20)
						: "Stores all around"}
				</div>
				<Modal
					open={open}
					onClose={handleClose}
					disablePortal={true}
					keepMounted={true}
				>
					<ModalBody isSmall={isSmall}>
						<div className="modal-body-div">
							<div
								ref={mapContainer}
								className="map-container"
							></div>
							<div className="distance-text">
								{calculatedDis} KM
							</div>
							<div className="search-location">
								<input
									type="text"
									placeholder="Search Location"
									onChange={(e) => searchLocation(e)}
									onFocus={() => setShowLocSearch(true)}
									value={inputValue}
								/>
								{showLocSearch &&
									locations &&
									locations.features &&
									locations.features.length > 0 && (
										<div className="search-results">
											<ul>
												{locations.features.map(
													(loc) => (
														<li
															onClick={() =>
																selectUserLocation(
																	loc
																)
															}
														>
															{loc.place_name}
														</li>
													)
												)}
											</ul>
										</div>
									)}
							</div>
						</div>
					</ModalBody>
				</Modal>
			</LocationServiceContainer>
		</>
	);
}

export default LocationService;

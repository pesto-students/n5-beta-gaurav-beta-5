import React, { useRef, useEffect, useState } from "react";
import { LocationServiceContainer } from "../../styles/loactionService.styles";
import { ModalBody } from "../../styles/loactionService.styles.js";

import { LocationOnOutlined } from "@material-ui/icons";
import Modal from "@material-ui/core/Modal";
import { Tooltip } from "@material-ui/core";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { locationSearchAction, mapAction } from "../../state";
import { mapBoxApiKey } from "../api/config";
import { isEmpty } from "lodash";

mapboxgl.accessToken = mapBoxApiKey;

function LocationService(props) {
	const { isMapView } = useSelector((state) => state.map);
	const [open, setOpen] = React.useState(false);
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(78.476681027237);
	const [lat, setLat] = useState(22.1991660760527);
	const [zoom, setZoom] = useState(3);
	const [mapObject, setMapObject] = useState();
	const [mapMarker, setMapMarker] = useState();

	const [showLocSearch, setShowLocSearch] = useState(false);
	const [inputValue, setInputValue] = useState();
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
	const { locations, userSelectedLocation } = useSelector(
		(state) => state.searchedLocation
	);

	const dispatch = useDispatch();
	const { locationSearch, setUserLocation } = bindActionCreators(
		locationSearchAction,
		dispatch
	);
	const { showMap } = bindActionCreators(mapAction, dispatch);
	// const [map, setMap] = useState(null);

	const handleOpen = () => {
		// setOpen(true);
		showMap(true);
		setOpen(isMapView);
		// setLat(props.coords ? props.coords.latitude : 22.1991660760527);
		// setLng(props.coords ? props.coords.longitude : 78.476681027237);
	};

	const handleClose = () => {
		// setOpen(false);
		setOpen(isMapView);
		showMap(false);
	};

	useEffect(() => {
		console.log("props.coords", props.coords);
		if (props.coords && props.coords !== null) {
			setLat(props.coords.latitude);
			setLng(props.coords.longitude);
			setZoom(12);
		}
		// setLat(
		// 	props.coords !== null ? props.coords.latitude : 22.1991660760527
		// );
		// setLng(
		// 	props.coords !== null ? props.coords.longitude : 78.476681027237
		// );
		console.log("lat lng", [lng, lat]);

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
			setLat(lngLat.lat);
			setLng(lngLat.lng);
			setShowLocSearch(true);

			setZoom(12);
		}
		marker.on("dragend", onDragEnd);
		setMapObject(map.current);
	}, []);

	useEffect(() => {
		map.current.flyTo({ center: [lng, lat], zoom: zoom });
	}, [zoom]);

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
		setShowLocSearch(false);
	};

	const truncate = (input, length) =>
		input.length > length ? `${input.substring(0, length)}...` : input;

	return (
		<>
			<LocationServiceContainer isSmall={isSmall}>
				<Tooltip title="Select Location">
					<div onClick={handleOpen} className="location-text">
						<LocationOnOutlined className="location-icon" />
						{userSelectedLocation.place_name
							? isSmall
								? truncate(userSelectedLocation.place_name, 15)
								: truncate(userSelectedLocation.place_name, 35)
							: "Stores all around"}
					</div>
				</Tooltip>

				<Modal
					open={isMapView}
					onClose={handleClose}
					disablePortal={true}
					keepMounted={true}
					className="map-view-modal"
				>
					<ModalBody isSmall={isSmall}>
						<div className="modal-body-div">
							<div
								className="close"
								id="modal-close"
								onClick={handleClose}
							>
								<CloseIcon className="close-icon" />
							</div>
							<div
								ref={mapContainer}
								className="map-container"
							></div>
							{/* <div className="distance-text">
								{calculatedDis} KM
							</div> */}
							<div className="search-location">
								<input
									type="text"
									id="search-input"
									placeholder="Search Location"
									onChange={(e) => searchLocation(e)}
									onFocus={() => setShowLocSearch(true)}
									onBlur={() =>
										setTimeout(() => {
											setShowLocSearch(false);
										}, 100)
									}
									value={inputValue}
								/>
								<button
									disabled={isEmpty(userSelectedLocation)}
									onClick={handleClose}
									className="select select-location"
								>
									Select
								</button>
								{showLocSearch &&
									locations &&
									locations.features &&
									locations.features.length > 0 && (
										<div className="search-results">
											<ul>
												{locations.features.map(
													(loc, index) => (
														<li
															key={index}
															className="search-result"
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

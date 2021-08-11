import React from "react";
import { LocationServiceContainer } from "../../styles/loactionService.styles";
import { useRef, useEffect, useState } from "react";
import { ModalBody } from "../../styles/loactionService.styles.js";
import Container from "@material-ui/core/Container";
import { LocationOnOutlined } from "@material-ui/icons";
import Modal from "@material-ui/core/Modal";
import { geolocated } from "react-geolocated";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import distance from "@turf/distance";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { SearchByLocation } from "../../styles/serachBar.styles";
mapboxgl.accessToken =
	"pk.eyJ1Ijoib21rYXJrYW1hbGUwMDEiLCJhIjoiY2tydGlsN3YzMWdqajJ1cGZ0b3BrYTJrMSJ9.VzUJw-oFBbvvyZ-XmuOWyA";

function LocationService(props) {
	const [open, setOpen] = React.useState(false);
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(null);
	const [lat, setLat] = useState(null);
	const [zoom, setZoom] = useState(12);
	const [calculatedDis, setCalculatedDis] = useState(0);
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
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
			var coordinates = document.getElementById("coordinates");

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

			function onDragEnd() {
				var lngLat = marker.getLngLat();
				coordinates.style.display = "block";
				setLat(lngLat.lat);
				setLng(lngLat.lng);
				let to = [73.0206934, 19.0295309];
				let from = [lngLat.lng, lngLat.lat];
				var distanceCal = distance(to, from, options);
				console.log("distance", distanceCal.toFixed(2), "km");
				setCalculatedDis(distanceCal.toFixed(2));
				coordinates.innerHTML =
					"Longitude: " +
					lngLat.lng +
					"<br />Latitude: " +
					lngLat.lat;
			}

			marker.on("dragend", onDragEnd);
			var greenMarker = new mapboxgl.Marker({
				color: "green",
			})
				.setLngLat([73.0206934, 19.0295309])
				.addTo(map.current);
			var from = [lng, lat];
			var to = [73.0206934, 19.0295309];
			console.log("marker", map.current);
			var options = {
				units: "kilometers",
			};
			var distanceCal = distance(to, from, options);
			console.log("distance", distanceCal.toFixed(2), "km");
			setCalculatedDis(distanceCal.toFixed(2));
			var geolocate = new mapboxgl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true,
				},
				trackUserLocation: true,
			});
			const geocoder = new MapboxGeocoder({
				accessToken: mapboxgl.accessToken,
				mapboxgl: mapboxgl,
			});
			// Add the control to the map.
			//map.current.addControl(geolocate);
			map.current.addControl(geocoder);
			// Set an event listener that fires
			// when a geolocate event occurs.
			geocoder.on("geocoder", function (e) {
				console.log("A geocoder event has occurred.", e);
			});
		}
	}, [mapContainer, map, lat, lng]);

	const searchLocation = (e) => {
		console.log(e.target.value);
	};

	return (
		<>
			<LocationServiceContainer isSmall={isSmall}>
				<div onClick={handleOpen} className="location-text">
					<LocationOnOutlined className="location-icon" />
					{"Stores all around"}
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
								/>
							</div>
							<pre id="coordinates" class="coordinates"></pre>
						</div>
					</ModalBody>
				</Modal>
			</LocationServiceContainer>
		</>
	);
}

export default LocationService;

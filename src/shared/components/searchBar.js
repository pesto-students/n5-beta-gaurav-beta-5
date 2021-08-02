import React, { useRef, useEffect, useState } from "react";
import {
	SearchBarDiv,
	SearchBox,
	SearchByLocation,
	SearchInput,
	ModalBody,
} from "../../styles/serachBar.styles";
import Container from "@material-ui/core/Container";
import { LocationOnOutlined, SearchOutlined } from "@material-ui/icons";
import Modal from "@material-ui/core/Modal";
import { geolocated } from "react-geolocated";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import distance from "@turf/distance";

mapboxgl.accessToken =
	"pk.eyJ1Ijoib21rYXJrYW1hbGUwMDEiLCJhIjoiY2tydGlsN3YzMWdqajJ1cGZ0b3BrYTJrMSJ9.VzUJw-oFBbvvyZ-XmuOWyA";

function SearchBar(props) {
	const [open, setOpen] = React.useState(false);
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(null);
	const [lat, setLat] = useState(null);
	const [zoom, setZoom] = useState(12);
	const [calculatedDis, setCalculatedDis] = useState(0);
	// const [map, setMap] = useState(null);
	const mapAPIKey = "AIzaSyCIvL2H0HuV2Id1daEwNkgGkAJybAui6Ho";
	const handleOpen = () => {
		setOpen(true);
		setLat(props.coords.latitude);
		setLng(props.coords.longitude);
	};

	useEffect(() => {
        if (props.coords !== null) {
            var coordinates = document.getElementById('coordinates');
			
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
                coordinates.style.display = 'block';
                setLat(lngLat.lat);
                setLng(lngLat.lng);
                let to = [73.0206934, 19.0295309];
                let from = [lngLat.lng, lngLat.lat];
                var distanceCal = distance(to, from, options);
                console.log("distance", distanceCal.toFixed(2), "km");
                setCalculatedDis(distanceCal.toFixed(2));
                coordinates.innerHTML =
                'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
            }
                
            marker.on('dragend', onDragEnd);
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

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<SearchBarDiv>
			<Container>
				<SearchByLocation onClick={handleOpen}>
					<LocationOnOutlined className="location-icon" />
					{"Stores all around"}
				</SearchByLocation>
				<SearchBox>
					<SearchInput />
					<SearchOutlined className="search-icon" />
				</SearchBox>
			</Container>
			<Modal
				open={open}
				onClose={handleClose}
				disablePortal={true}
				keepMounted={true}
			>
				<ModalBody>
					<div>
						<div ref={mapContainer} className="map-container"></div>
                        <div className="distance-text">{calculatedDis} KM</div>
                        <pre id="coordinates" class="coordinates"></pre>
					</div>
				</ModalBody>
			</Modal>
		</SearchBarDiv>
	);
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: true,
	},
	userDecisionTimeout: 5000,
})(SearchBar);

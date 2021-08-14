import { mapBoxApiKey, mapBoxDirectionUrl } from "../../shared/api/config";

export async function distanceApi(query) {
	//https://api.mapbox.com/directions/v5/mapbox/driving/-122.42,37.78;-77.03,38.91?access_token=pk.eyJ1Ijoib21rYXJrYW1hbGUwMDEiLCJhIjoiY2tydGlsN3YzMWdqajJ1cGZ0b3BrYTJrMSJ9.VzUJw-oFBbvvyZ-XmuOWyA
	try {
		let url = `${mapBoxDirectionUrl}${query}?access_token=${mapBoxApiKey}`;
		const getProductsResponse = await fetch(url, {
			method: "GET",
		});
		return await getProductsResponse.json();
	} catch (errors) {
		return errors;
	}
}

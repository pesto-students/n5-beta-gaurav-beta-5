import { mapBoxApiKey, mapBoxUrl } from "../../shared/api/config";

export async function searchLocationApi({ payload }) {
	try {
		// https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoib21rYXJrYW1hbGUwMDEiLCJhIjoiY2tydGlsN3YzMWdqajJ1cGZ0b3BrYTJrMSJ9.VzUJw-oFBbvvyZ-XmuOWyA
		let url = `${mapBoxUrl}${payload.query}.json?access_token=${mapBoxApiKey}`;
		const getProductsResponse = await fetch(url, {
			method: "GET",
			// headers: {
			// 	"X-Parse-Application-Id": appId,
			// 	"X-Parse-REST-API-Key": restKey,
			// 	"Content-Type": "application/json",
			// },
			// body: JSON.stringify(body),
		});
		return await getProductsResponse.json();
	} catch (errors) {
		return errors;
	}
}

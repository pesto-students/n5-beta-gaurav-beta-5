import { appId, restKey, serverUrl } from "../../shared/api/config";

export async function getFeaturedProductsApi() {
	try {
		const url = `${serverUrl}/functions/getFeaturedProductsApi`;

		const getProductsResponse = await fetch(url, {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": appId,
				"X-Parse-REST-API-Key": restKey,
				"Content-Type": "application/json",
			},
		});
		return await getProductsResponse.json();
	} catch (errors) {
		return errors;
	}
}

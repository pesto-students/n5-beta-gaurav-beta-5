import { appId, restKey, serverUrl } from "../../shared/api/config";

export async function getCategoriesApi({ payload }) {
	try {
		const url = `${serverUrl}/functions/getCategoriesApi`;

		const getCategoriesResponse = await fetch(url, {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": appId,
				"X-Parse-REST-API-Key": restKey,
				"Content-Type": "application/json",
			},
		});
		return await getCategoriesResponse.json();
	} catch (errors) {
		return errors;
	}
}

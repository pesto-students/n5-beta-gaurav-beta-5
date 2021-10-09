import { appId, restKey, serverUrl } from "../../shared/api/config";

export async function getSubCategoriesApi({ payload }) {
	try {
		const url = `${serverUrl}/functions/getSubCategoriesApi`;
		const getSubCategoriesResponse = await fetch(url, {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": appId,
				"X-Parse-REST-API-Key": restKey,
				"Content-Type": "application/json",
			},
		});
		return await getSubCategoriesResponse.json();
	} catch (errors) {
		return errors;
	}
}

import { appId, restKey, serverUrl } from "../../shared/api/config";

export async function getAddressesApi({ payload }) {
	try {
		const url = `${serverUrl}functions/getAddressesByUserIdApi`;
		const body = payload;
		const getAddressesResponse = await fetch(url, {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": appId,
				"X-Parse-REST-API-Key": restKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		return await getAddressesResponse.json();
	} catch (errors) {
		return errors;
	}
}

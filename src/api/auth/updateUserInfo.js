import { appId, restKey, serverUrl } from "../../shared/api/config";

export async function updateUserInfoApi({ payload }) {
	try {
		const url = `${serverUrl}users/${payload.objectId}`;
		const body = {
			username: payload.username,
			email: payload.email,
			phone: payload.phone,
		};

		const updateUserInfoDataResponse = await fetch(url, {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": appId,
				"X-Parse-REST-API-Key": restKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		return await updateUserInfoDataResponse.json();
	} catch (errors) {
		return errors;
	}
}

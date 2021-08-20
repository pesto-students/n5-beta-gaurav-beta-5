import { appId, restKey, serverUrl } from "../../shared/api/config";

export async function signInAPI({ payload }) {
	try {
		const url = serverUrl + "login";
		const body = {
			username: payload.username,
			password: payload.password,
		};

		const signInDataResponse = await fetch(url, {
			method: "POST",
			headers: {
				"X-Parse-Application-Id": appId,
				"X-Parse-REST-API-Key": restKey,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		return await signInDataResponse.json();
	} catch (errors) {
		return errors;
	}
}

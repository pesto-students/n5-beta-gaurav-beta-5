import { appId, restKey, serverUrl } from "../../shared/api/config";

export const userMeApi = async (payload) => {
	try {
		if (payload.sessionToken != null && payload.sessionToken.length > 0) {
			const url = serverUrl + "users/me";
			const authResponse = await fetch(url, {
				method: "GET",

				headers: {
					"X-Parse-Application-Id": appId,
					"X-Parse-REST-API-Key": restKey,
					"X-Parse-Session-Token": payload.sessionToken,
					"Content-Type": "application/json",
				},
			});

			return await authResponse.json();
		} else {
			return null;
		}
	} catch (errors) {
		return null;
	}
};

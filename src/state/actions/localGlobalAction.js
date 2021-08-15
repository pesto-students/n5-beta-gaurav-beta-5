import { IS_GLOBAL } from "../../constants/actionType";

export const setGlobal = (payload) => ({
	type: IS_GLOBAL,
	payload,
});

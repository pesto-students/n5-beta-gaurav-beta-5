import React, { useEffect, useState } from "react";
import {
	LocalGlobalContainer,
	LocalGlobalSwitchBtn,
} from "../../styles/localGlobalSwitch.styles";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { localGlobalAction, mapAction } from "../../state";
import { isEmpty } from "lodash";

function LocalGlobalSwitch() {
	const dispatch = useDispatch();
	const { setGlobal } = bindActionCreators(localGlobalAction, dispatch);
	const { showMap } = bindActionCreators(mapAction, dispatch);
	const { isGlobal } = useSelector((state) => state.localGlobal);
	const [btnState, setBtnState] = useState(true);
	const { userSelectedLocation } = useSelector(
		(state) => state.searchedLocation
	);

	const handleClick = (bool) => {
		if (isEmpty(userSelectedLocation)) {
			showMap(true);
			setBtnState(bool);
			return;
		}
		setGlobal(bool);
	};

	useEffect(() => {
		if (isEmpty(userSelectedLocation) == false && btnState == false) {
			setGlobal(false);
		}
	}, [userSelectedLocation]);

	return (
		<LocalGlobalContainer>
			<LocalGlobalSwitchBtn
				onClick={() => handleClick(true)}
				className={isGlobal ? "active" : null}
			>
				Global Products
			</LocalGlobalSwitchBtn>
			<LocalGlobalSwitchBtn
				onClick={() => handleClick(false)}
				className={isGlobal ? null : "active"}
			>
				Local Products
			</LocalGlobalSwitchBtn>
		</LocalGlobalContainer>
	);
}

export default LocalGlobalSwitch;

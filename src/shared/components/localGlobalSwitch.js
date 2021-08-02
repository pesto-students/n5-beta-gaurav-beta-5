import React from "react";
import {
	LocalGlobalContainer,
	LocalGlobalSwitchBtn,
} from "../../styles/localGlobalSwitch.styles";

function LocalGlobalSwitch() {
	return (
		<LocalGlobalContainer>
			<LocalGlobalSwitchBtn className="active">
				Global Products
			</LocalGlobalSwitchBtn>
			<LocalGlobalSwitchBtn>Local Products</LocalGlobalSwitchBtn>
		</LocalGlobalContainer>
	);
}

export default LocalGlobalSwitch;

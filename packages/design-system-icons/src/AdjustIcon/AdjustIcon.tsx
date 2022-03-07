import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import Adjust from "../icons/ic_adjust=outlined_20px.svg";

const AdjustIcon: React.FunctionComponent<SvgIconProps> = (props) => {
  return <SvgIcon {...props} component={Adjust} inheritViewBox />;
};

export default AdjustIcon;

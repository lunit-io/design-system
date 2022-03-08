import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import outlined from "../icons/ic_brightness=outlined_20px.svg";

const Brightness: React.FunctionComponent<SvgIconProps> = (props) => {
  return <SvgIcon {...props} component={outlined} inheritViewBox />;
};

export default Brightness;

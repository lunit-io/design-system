import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import outlined from "../assets/ic_zoom_in=outlined_20px.svg";

const ZoomIn: React.FunctionComponent<SvgIconProps> = (props) => {
  return <SvgIcon {...props} component={outlined} inheritViewBox />;
};

export default ZoomIn;

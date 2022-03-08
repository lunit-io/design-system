import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import outlined from "../icons/ic_zoom=out_outlined_20px.svg";

const ZoomOut: React.FunctionComponent<SvgIconProps> = (props) => {
  return <SvgIcon {...props} component={outlined} inheritViewBox />;
};

export default ZoomOut;

import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import outlined from "../icons/ic_adjust=outlined_20px.svg";

const AdjustIcon: React.FunctionComponent<SvgIconProps> = (props) => {
  return <SvgIcon {...props} component={outlined} inheritViewBox />;
};

export default AdjustIcon;

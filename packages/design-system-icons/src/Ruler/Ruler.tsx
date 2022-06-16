import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import outlined from "../assets/ic_ruler_t1=outlined_20px.svg";

const Ruler: React.FunctionComponent<SvgIconProps> = (props) => {
  return <SvgIcon {...props} component={outlined} inheritViewBox />;
};

export default Ruler;

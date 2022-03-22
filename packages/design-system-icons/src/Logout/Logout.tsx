import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import outlined from "../assets/ic_logout=outlined_20px.svg";

const Logout: React.FunctionComponent<SvgIconProps> = (props) => {
  return <SvgIcon {...props} component={outlined} inheritViewBox />;
};

export default Logout;

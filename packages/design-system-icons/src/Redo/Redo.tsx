import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import outlined from "../assets/ic_redo=outlined_20px.svg";

const Redo: React.FunctionComponent<SvgIconProps> = (props) => {
  return <SvgIcon {...props} component={outlined} inheritViewBox />;
};

export default Redo;

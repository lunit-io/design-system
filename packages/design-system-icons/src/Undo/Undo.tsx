import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import outlined from "../assets/ic_undo=outlined_20px.svg";

const Undo: React.FunctionComponent<SvgIconProps> = (props) => {
  return <SvgIcon {...props} component={outlined} inheritViewBox />;
};

export default Undo;

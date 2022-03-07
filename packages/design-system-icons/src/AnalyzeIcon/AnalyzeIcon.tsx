import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import Analyze from "../icons/ic_analyze=outlined_20px.svg";

const AnalyzeIcon: React.FunctionComponent<SvgIconProps> = (props) => {
  return <SvgIcon {...props} component={Analyze} inheritViewBox />;
};

export default AnalyzeIcon;

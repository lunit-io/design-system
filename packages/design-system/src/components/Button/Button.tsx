import React from "react";

import { Button as MuiButton } from "@mui/material";

const Button = () => {
  // 예제 코드이기 떄문에 지워도 상관없습니다.
  return (<>
    <MuiButton className="one" variant="contained">Button</MuiButton>
    <MuiButton className="two" variant="contained">Button</MuiButton>
    <MuiButton className="three" variant="contained">Button</MuiButton>
  </>);
};

export default Button;

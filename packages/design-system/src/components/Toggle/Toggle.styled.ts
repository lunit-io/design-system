import { styled, Switch as MuiSwitch, SwitchProps } from "@mui/material";
interface ToggleProps extends SwitchProps {
  toggleSize: "medium" | "large";
}

const toggleStyles = {
  medium: {
    root: {
      width: 28,
      height: 18,
      borderRadius: 9,
    },
    focus: {
      width: 34,
      height: 24,
      borderRadius: 12,
    },
    switch: {
      transition: "all 100ms ease-in-out",
    },
    switchChecked: {
      transform: "translateX(10px)",
    },
    thumb: {
      width: 14,
      height: 14,
    },
  },
  large: {
    root: {
      width: 44,
      height: 24,
      borderRadius: 12,
    },
    focus: {
      width: 50,
      height: 30,
      borderRadius: 14,
    },
    switch: {
      transition: "all 150ms ease-in-out",
    },
    switchChecked: {
      transform: "translateX(20px)",
    },
    thumb: {
      width: 20,
      height: 20,
    },
  },
};

const indeterminateStyles = {
  large: {
    switchChecked: {
      top: 8,
      left: -8,
    },
    track: {
      borderRadius: 12,
    },
    thumb: {
      height: 4,
      width: 16,
      borderRadius: 2,
    },
  },
  medium: {
    switchChecked: {
      top: 6,
      left: -4,
    },
    track: {
      borderRadius: 12,
    },
    thumb: {
      height: 2,
      width: 12,
      borderRadius: 2,
    },
  },
};

export const CommonToggle = styled(MuiSwitch, {
  shouldForwardProp: (props) => props !== "toggleSize",
})<ToggleProps>(({ theme, toggleSize, disabled }) => {
  const checkedColor = theme.palette.lunit_token.component.selectcontrol_on;
  const uncheckedColor = theme.palette.lunit_token.component.selectcontrol_off;
  const handlerColor =
    theme.palette.lunit_token.component.selectcontrol_handler;

  const toggleStyle = toggleStyles[toggleSize];
  const toggleOpacity = disabled ? 0.38 : 1;

  return {
    ...toggleStyle.root,

    padding: 0,
    overflow: "visible",
    backgroundColor: "transparent",
    opacity: toggleOpacity,
    "& .Mui-focusVisible": {
      // clear default focus style
      boxShadow: "none",
      background: "transparent",
      borderColor: "transparent",
      outline: "none",
      "& + .MuiSwitch-track::after": {
        ...toggleStyle.focus,
        content: '""',
        position: "absolute",
        border: `1px solid ${checkedColor}`,
        boxSizing: "border-box",
        top: -3, // border 1px + offset 2px
        left: -3, // border 1px + offset 2px
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      borderRadius: 12,
      backgroundColor: uncheckedColor,
    },
    "& .MuiSwitch-thumb": {
      ...toggleStyle.thumb,
      boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.4)",
    },
    "& .MuiSwitch-switchBase": {
      ...toggleStyle.switch,
      padding: 2,
      opacity: 1,
      "&.Mui-checked": {
        ...toggleStyle.switchChecked,
        color: handlerColor,
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: checkedColor,
        },
      },
    },
    "& .Mui-disabled + .MuiSwitch-track": {
      opacity: 1,
    },
  };
});

export const CommonIndeterminateToggle = styled(CommonToggle, {
  shouldForwardProp: (props) => props !== "toggleSize",
})(({ toggleSize }) => {
  const indeterminateStyle = indeterminateStyles[toggleSize];

  return {
    padding: 0,
    cursor: "pointer",
    "& .MuiSwitch-switchBase.Mui-checked": {
      ...indeterminateStyle.switchChecked,
      "& + .MuiSwitch-track": {
        ...indeterminateStyle.track,
      },
    },
    "& .MuiSwitch-thumb": {
      ...indeterminateStyle.thumb,
      boxShadow: "none",
    },
  };
});

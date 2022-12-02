import { styled, Switch as MuiSwitch, Theme } from "@mui/material";

const MediumSize = {
  width: 28,
  height: 18,
  borderRadius: 9,
  "&:focus-within::after": {
    width: 34,
    height: 24,
    borderRadius: 12,
  },
}

const LargeSize = {
  width: 44,
  height: 24,
  borderRadius: 12,
  "&:focus-within::after": {
    width: 50,
    height: 30,
    borderRadius: 14,
  },
}

const useToggleColor = (theme: Theme) => ({
    checked: theme.palette.lunit.lunitTeal[40].main,
    unchecked: theme.palette.lunit.grey[40].main,
})

const CommonToggle = styled(MuiSwitch)(({ theme }) => {
  const {checked, unchecked} = useToggleColor(theme)

  return({
  display: 'flex',
  padding: 0,
  overflow: "visible",
  backgroundColor: "transparent",
  "&:focus-within::after": {
    position: "absolute",
    content: '""',
    boxSizing: "border-box",
    top: -3, // border 1px + offset 2px
    left: -3, // border 1px + offset 2px
    border: `1px solid ${checked}`,
  },
  '& .MuiSwitch-track': {
    backgroundColor: unchecked,
    opacity: 1,
    borderRadius: 16,
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    opacity: 1,
    '&.Mui-focusVisible': {
      boxShadow: "none",
      background: "transparent",
      borderColor: "transparent",
      outline: "1px solid transparent",
    },
    '&.Mui-checked': {
      opacity: 1,
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: checked,
      },
      '&.Mui-disabled': {
        opacity: 1,
        color: "#fff",
      },
    },
    '&.Mui-disabled': {
      opacity: 1,
      color: "fff",
      '& + .MuiSwitch-track': {
        opacity: 0.38,
        backgroundColor: unchecked,
      },
      "&.Mui-checked": {
        '& + .MuiSwitch-track': {
          opacity: 0.38,
          backgroundColor: checked,
        },
      }
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: "none",
  },
})});

export const LargeToggle= styled(CommonToggle)({
  ...LargeSize,
  '& .MuiSwitch-switchBase': {
    transition: "all 150ms ease-in-out",
    "&.Mui-checked": {
      transform: 'translateX(20px)',
    },
  },
  '& .MuiSwitch-thumb': {
    width: 20,
    height: 20,
  },
});

export const MediumToggle = styled(CommonToggle)({
  ...MediumSize,
  '& .MuiSwitch-switchBase': {
    transition: "all 100ms ease-in-out",
    "&.Mui-checked": {
      transform: 'translateX(10px)',
    },
  },
  '& .MuiSwitch-thumb': {
    width: 14,
    height: 14,
  },
});

const CommonIndeterminateToggle = styled(CommonToggle)({
  display: 'flex',
  padding: 0,
  cursor: "pointer",
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        borderRadius: 9,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    height: 2,
    width: 12,
    borderRadius: 2,
  },
});

export const IndeterminateMediumToggle = styled(CommonIndeterminateToggle)({
  ...MediumSize,
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      top: 6,
      left: -14,
    },
  },
});

export const IndeterminateLargeToggle = styled(CommonIndeterminateToggle)({
  ...LargeSize,
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      top: 8,
      left: -8,
      '& + .MuiSwitch-track': {
        borderRadius: 12,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    height: 4,
    width: 16,
    borderRadius: 2,
  },
});

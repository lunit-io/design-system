import { styled, Switch as MuiSwitch } from "@mui/material";

// TODO: CSS refactoring
const CommonToggle = styled(MuiSwitch)(({ theme }) => ({
  display: 'flex',
  padding: 0,
  overflow: "visible",
  backgroundColor: theme.palette.lunit.grey[40].main,
  "&:focus-within::after": {
    position: "absolute",
    content: '""',
    boxSizing: "border-box",
    top: -3,
    left: -3,
    border: `1px solid ${theme.palette.lunit.lunitTeal[40].main}`,
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.lunit.grey[40].main,
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
        backgroundColor: theme.palette.lunit.lunitTeal[40].main,
      },
      '&.Mui-disabled': {
        opacity: 1,
        color: "#fff",
      },
    },
    '&.Mui-disabled': {
      opacity: 1,
      color: "#fff",
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.lunit.grey[10].main,
      },
      "&.Mui-checked": {
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.lunit.lunitTeal[20].main,
        },
      }
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: "none",
  },
}));

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

export const LargeToggle= styled(CommonToggle)({
  ...LargeSize,
  '& .MuiSwitch-switchBase.Mui-checked': {
    transform: 'translateX(20px)',
  },
  '& .MuiSwitch-thumb': {
    width: 20,
    height: 20,
  },
});

export const MediumToggle = styled(CommonToggle)({
  ...MediumSize,
  '& .MuiSwitch-switchBase.Mui-checked': {
    transform: 'translateX(10px)',
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

import { styled, Switch as MuiSwitch } from "@mui/material";


const ToggleCommon = styled(MuiSwitch)(({ theme }) => ({
  backgroundColor: theme.palette.lunit.grey[40].main,
  "&:focus": {
    outline: `1px solid ${theme.palette.lunit.lunitTeal[40].main}`,
    outlineOffset: 2,
  },
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
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

}));

const ToggleBase = styled(ToggleCommon)(({ theme }) => ({
  display: 'flex',
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 2,
    opacity: 1,
  },
  '& .MuiSwitch-thumb': {
    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.05)",
    transition: "200ms",
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.lunit.grey[40].main,
    opacity: 1,
  },
}));

export const LargeToggle= styled(ToggleBase)(({ theme }) => ({
  width: 44,
  height: 24,
  borderRadius: 12,
  '& .MuiSwitch-switchBase.Mui-checked': {
    transform: 'translateX(20px)',
  },
  '& .MuiSwitch-thumb': {
    width: 20,
    height: 20,
  },
}));

export const MiddleToggle = styled(ToggleBase)(({ theme }) => ({
  width: 28,
  height: 18,
  borderRadius: 9,
  '& .MuiSwitch-switchBase.Mui-checked': {
    transform: 'translateX(10px)',
  },
  '& .MuiSwitch-thumb': {
    width: 14,
    height: 14,
  },
}));

const IndeterminateToggleBase = styled(ToggleCommon)(({ theme }) => ({
  display: 'flex',
  padding: 0,
  backgroundColor: theme.palette.lunit.lunitTeal[40].main,
  cursor: "pointer",
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.lunit.lunitTeal[40].main,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    height: 2,
    width: 12,
    borderRadius: 2,
    boxShadow: "none",
  },
}));

export const IndeterminateMiddleToggle = styled(IndeterminateToggleBase)(({ theme }) => ({
  width: 28,
  height: 18,
  borderRadius: 9,
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      transform: "translate(6px, 6px)",
    },
  },
}));

export const IndeterminateLargeToggle = styled(IndeterminateToggleBase)(({ theme }) => ({
  width: 44,
  height: 24,
  borderRadius: 12,
  cursor: "pointer",
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      color: '#fff',
      transform: "translate(14px, 9px)",
    },
  },
}));

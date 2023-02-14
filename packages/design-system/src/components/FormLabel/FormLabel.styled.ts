import { FormControlLabel, styled } from "@mui/material";

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginLeft: 0,
  '& .MuiTypography-root': {
    marginLeft: theme.spacing(2),
  }
}))

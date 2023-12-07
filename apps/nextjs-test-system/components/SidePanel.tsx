import React from "react";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Check } from "@lunit/design-system-icons";
import {
  Typography,
  Button,
  RadioGroup,
  Radio,
  FormLabel,
  Chip,
  Alert,
  TextField,
  Toggle,
  Toast,
} from "@lunit/design-system";
import { DatePicker, Dropdown, Table } from "./temp/ver2Components";

function SidePanel() {
  const theme = useTheme();

  const Fieldset = ({ children }: { children: React.ReactNode }) => (
    <Box
      component="fieldset"
      sx={{
        border: 0,
      }}
    >
      {children}
    </Box>
  );

  const Legend = ({ children }: { children: React.ReactNode }) => (
    <Box
      component="legend"
      sx={{ typography: "body3_12_semibold", marginBottom: "0.625rem" }}
    >
      {children}
    </Box>
  );

  return (
    <Box
      component="form"
      sx={{
        flex: "0 0 500px",
        backgroundColor: theme.palette.lunit_token.core.bg_03,
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        padding: "2.5rem",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "0.625rem",
          opacity: "0.30000001192092896",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "0.375rem",
          background: theme.palette.lunit_token.component.scrollbars_bg,
        },
        borderLeft: "1px solid #000",
      }}
    >
      <Box sx={{ display: "flex" }}>
        {/* TODO: below variant should be fixed as 'variant="headline3"' */}
        <Typography variant="h3" sx={{ flex: "1 0 0" }}>
          Detail
        </Typography>
        <Button kind="contained" size="medium" icon={<Check />}>
          Save
        </Button>
      </Box>
      <Alert severity="error">내용이 맞는지 반드시 다시 확인하세요.</Alert>
      <Fieldset>
        <Legend>Name*</Legend>
        <TextField
          size="medium"
          variant="outlined"
          placeholder="Youjinnnnnn*"
          sx={{
            width: "100%",
          }}
        />
      </Fieldset>
      <Fieldset>
        <Legend>Age</Legend>
        <Dropdown />
      </Fieldset>
      <Fieldset>
        <Legend>Study Description</Legend>
        <TextField
          size="medium"
          variant="outlined"
          multiline
          sx={{
            width: "100%",
          }}
          placeholder="디자인팀의 센터를 맡고있다. 가능하면 슬랙으로 말걸어주는 것을 선호한다. 회의는 짧고 명료하게 하는걸 선호한다."
        />
      </Fieldset>
      <Fieldset>
        <Legend>Favorite</Legend>
        <RadioGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "3.75rem",
          }}
        >
          <FormLabel control={<Radio />} label="Cat" value="Cat" />
          <FormLabel control={<Radio />} label="Dog" value="Dog" />
        </RadioGroup>
      </Fieldset>
      <Fieldset>
        <Legend>Birth Date</Legend>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <DatePicker />
          <Stack direction="row" spacing="0.5rem" alignItems="center">
            <Typography variant="body2">Show BD</Typography>
            <Toggle />
          </Stack>
        </Box>
      </Fieldset>
      <Box>
        <Legend>Food</Legend>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <Chip
            kind="contained"
            color="success"
            label="meat"
            onDelete={() => console.log("meat delete is clicked")}
          />
          <Chip
            kind="contained"
            color="warning"
            label="fish"
            onDelete={() => console.log("fish delete is clicked")}
          />
          <Chip
            kind="contained"
            color="error"
            label="desert"
            onDelete={() => console.log("desert delete is clicked")}
          />
        </Box>
      </Box>
      <Fieldset>
        <Legend>Name*</Legend>
        <Table />
      </Fieldset>
    </Box>
  );
}

export default SidePanel;

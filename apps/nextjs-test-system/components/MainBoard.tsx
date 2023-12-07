import { Box, Divider, Stack, useTheme } from "@mui/material";

import { Button, FormLabel, Checkbox, Chip } from "@lunit/design-system";
import { SearchBar, Worklist } from "./temp/ver2Components";
import { Plus, DownloadT1, Delete } from "@lunit/design-system-icons";

function MainBoard() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        padding: "2.06rem 1.56rem 2.25rem ",
      }}
    >
      {/* Toolbar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <Stack direction="row" alignItems="center" spacing="0.25rem">
          <Button kind="ghost" color="primary" icon={<Plus />}>
            Add Person
          </Button>
          {/* Divider */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="14"
            viewBox="0 0 2 14"
            fill="none"
          >
            <path d="M1 1V13" stroke="#747477" strokeLinecap="round" />
          </svg>
          <Button
            kind="ghost"
            color="secondary"
            size="medium"
            icon={<DownloadT1 />}
          />
          <Button
            kind="ghost"
            color="secondary"
            size="medium"
            icon={<Delete />}
          />
        </Stack>
        <Stack direction="row" alignItems="center" spacing="0.75rem">
          <SearchBar />
          <Button kind="contained" color="secondary" size="medium">
            Search
          </Button>
        </Stack>
      </Box>
      {/* FilteringBar */}
      <Stack
        direction="row"
        className="dark3"
        sx={{
          padding: "0.25rem 1.25rem",
          borderRadius: "0.75rem",
          backgroundColor: theme.palette.lunit_token.core.bg_01,
          marginBottom: "1.5rem",
          typography: "body2_14_regular",
        }}
      >
        <FormLabel
          control={<Checkbox indeterminate />}
          label="All"
          sx={{
            padding: "0.5rem 0.75rem",
          }}
        />
        <Divider orientation="vertical" />
        <FormLabel control={<Checkbox />} label="20-29" />
        <FormLabel control={<Checkbox />} label="30-39" />
        <FormLabel control={<Checkbox />} label="40-49" />
        <FormLabel control={<Checkbox />} label="50-59" />
        <FormLabel
          control={<Checkbox />}
          label={<Chip kind="outlined" color="success" label="Meat" />}
        />
        <FormLabel
          control={<Checkbox />}
          label={<Chip kind="outlined" color="warning" label="Fish" />}
        />
        <FormLabel
          control={<Checkbox />}
          label={<Chip kind="outlined" color="error" label="Desert" />}
        />
      </Stack>
      <Box
        sx={{
          maxHeight: "48rem",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "0.5rem",
            opacity: "0.30000001192092896",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "0.375rem",
            background: theme.palette.lunit_token.component.scrollbars_bg,
          },
        }}
      >
        <Worklist />
      </Box>
    </Box>
  );
}

export default MainBoard;

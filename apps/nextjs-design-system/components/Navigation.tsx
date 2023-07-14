import { Box, Stack } from "@mui/material";

import { LunitDark } from "@lunit/design-system-logo";
import { ToggleButton, Button } from "@lunit/design-system";
import { RotationLeft, Logout } from "@lunit/design-system-icons";

function Navigation() {
  return (
    <Box
      component="header"
      className="dark1"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.75rem 1.25rem",
        gap: "0.5rem",
        borderBottom: "1px solid #000",
      }}
    >
      <LunitDark width="5rem" />
      <Stack direction="row" alignItems="center" spacing="1rem">
        <ToggleButton
          selectedColor="secondary"
          selected
          icon={<RotationLeft />}
          value="dark mode"
        >
          Dark Mode
        </ToggleButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="14"
          viewBox="0 0 2 14"
          fill="none"
        >
          <path d="M1 1V13" stroke="#747477" strokeLinecap="round" />
        </svg>
        <Button kind="ghost" color="secondary" icon={<Logout />}>
          Logout
        </Button>
      </Stack>
    </Box>
  );
}

export default Navigation;

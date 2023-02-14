import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  useTheme,
  Box,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableContainer,
  TableCell,
} from "@mui/material";
import { DarkTypography, LightTypography } from "./styled";
import { tokenCoreColor } from "@/foundation/colors/token/core";
import type { ColorToken } from "@/foundation/colors/types";

const CoreTokenColors = () => {
  const theme = useTheme();

  const colorBoxStyle = {
    borderTop: "1px solid",
    borderBottom: "1px solid",
    borderColor: "rgba(0, 0, 0, 0.12)",
    height: "12px",
  };

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}> </TableCell>
            <TableCell colSpan={2}>Light</TableCell>
            <TableCell colSpan={4}>Dark</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Token name</TableCell>
            <TableCell>Light 1</TableCell>
            <TableCell>Light 2</TableCell>
            <TableCell>Dark 1</TableCell>
            <TableCell>Dark 2</TableCell>
            <TableCell>Dark 3</TableCell>
            <TableCell>Dark 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(theme.palette.token.core).map(
            ([paletteKey, _colorVariable]) => (
              <TableRow key={paletteKey}>
                <TableCell sx={{ height: "72px" }}>
                  <DarkTypography>core.{paletteKey}</DarkTypography>
                </TableCell>
                <TableCell
                  className="light1"
                  sx={{
                    background: "var(--grey-0)",
                    padding: 0,
                  }}
                >
                  <Box
                    sx={{
                      background:
                        theme.palette.token.core[
                          paletteKey as keyof ColorToken["core"]
                        ],
                      borderLeft: "1px solid",
                      ...colorBoxStyle,
                    }}
                  ></Box>
                  <DarkTypography>
                    {tokenCoreColor[paletteKey]["light1"]}
                  </DarkTypography>
                </TableCell>
                <TableCell
                  className="light2"
                  sx={{ background: "var(--grey-10)", padding: 0 }}
                >
                  <Box
                    sx={{
                      background:
                        theme.palette.token.core[
                          paletteKey as keyof ColorToken["core"]
                        ],
                      ...colorBoxStyle,
                    }}
                  ></Box>
                  <DarkTypography>
                    {tokenCoreColor[paletteKey]["light2"]}
                  </DarkTypography>
                </TableCell>
                <TableCell
                  className="dark1"
                  sx={{
                    background: "var(--grey-90)",
                    padding: 0,
                  }}
                >
                  <Box
                    sx={{
                      background:
                        theme.palette.token.core[
                          paletteKey as keyof ColorToken["core"]
                        ],
                      ...colorBoxStyle,
                    }}
                  ></Box>
                  <LightTypography>
                    {tokenCoreColor[paletteKey]["dark1"]}
                  </LightTypography>
                </TableCell>
                <TableCell
                  className="dark2"
                  sx={{
                    background: "var(--grey-85)",
                    padding: 0,
                  }}
                >
                  <Box
                    sx={{
                      background:
                        theme.palette.token.core[
                          paletteKey as keyof ColorToken["core"]
                        ],
                      ...colorBoxStyle,
                    }}
                  ></Box>

                  <LightTypography>
                    {tokenCoreColor[paletteKey]["dark2"]}
                  </LightTypography>
                </TableCell>
                <TableCell
                  className="dark3"
                  sx={{
                    background: "var(--grey-80)",
                    padding: 0,
                  }}
                >
                  <Box
                    sx={{
                      background:
                        theme.palette.token.core[
                          paletteKey as keyof ColorToken["core"]
                        ],
                      ...colorBoxStyle,
                    }}
                  ></Box>
                  <LightTypography>
                    {tokenCoreColor[paletteKey]["dark3"]}
                  </LightTypography>
                </TableCell>
                <TableCell
                  className="dark4"
                  sx={{
                    background: "var(--grey-70)",
                    padding: 0,
                  }}
                >
                  <Box
                    sx={{
                      background:
                        theme.palette.token.core[
                          paletteKey as keyof ColorToken["core"]
                        ],
                      ...colorBoxStyle,
                    }}
                  ></Box>
                  <LightTypography>
                    {tokenCoreColor[paletteKey]["dark4"]}
                  </LightTypography>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default {
  title: "Foundation/Colors/ColorToken",
  component: CoreTokenColors,
} as ComponentMeta<typeof CoreTokenColors>;

const Template: ComponentStory<typeof CoreTokenColors> = () => (
  <CoreTokenColors />
);

export const CoreTokens = Template.bind({});

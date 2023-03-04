import React from "react";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableContainer,
  TableCell,
  useTheme,
} from "@mui/material";
import { StyledTypography } from "./styled";
import { tokenCoreColor } from "@/foundation/colors/token/core";
import { tokenComponentColor } from "@/foundation/colors/token/component";

import type { ColorToken } from "@/foundation/colors/types";
import type { ColorTokenValueBySurface } from "@/foundation/colors/token/types";

interface TokenPaletteTableProps {
  token: keyof ColorToken;
}

const TokenPaletteTable = ({ token }: TokenPaletteTableProps) => {
  const theme = useTheme();

  const COLOR_SURFACE: ColorTokenValueBySurface = {
    light1: "var(--grey-0)",
    light2: "var(--grey-10)",
    dark1: "var(--grey-90)",
    dark2: "var(--grey-85)",
    dark3: "var(--grey-80)",
    dark4: "var(--grey-70)",
  } as const;

  const COLOR_BOX_STYLE = {
    borderTop: "1px solid",
    borderBottom: "1px solid",
    borderColor: "rgba(0, 0, 0, 0.12)",
    height: "12px",
  } as const;

  const colorTokenMap = Object.entries(
    token === "core" ? theme.palette.token.core : theme.palette.token.component
  );

  const tokenComponentColorFlatten = Object.values(tokenComponentColor).reduce(
    (acc, cur) => {
      return { ...acc, ...cur };
    },
    {}
  );

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
          {colorTokenMap.map(([paletteKey, _colorVariable]) => {
            const tokenColor =
              token === "core"
                ? theme.palette.token.core[
                    paletteKey as keyof ColorToken["core"]
                  ]
                : theme.palette.token.component[
                    paletteKey as keyof ColorToken["component"]
                  ];

            const tokenColorText =
              token === "core"
                ? tokenCoreColor[paletteKey]
                : tokenComponentColorFlatten[paletteKey];

            return (
              <TableRow key={paletteKey}>
                <TableCell sx={{ height: "72px" }}>
                  <StyledTypography>
                    {token}.{paletteKey}
                  </StyledTypography>
                </TableCell>
                <TableCell
                  className="light1"
                  sx={{
                    background: COLOR_SURFACE["light1"],
                    padding: 0,
                  }}
                >
                  <Box
                    sx={{
                      background: tokenColor,
                      borderLeft: "1px solid",
                      ...COLOR_BOX_STYLE,
                    }}
                  ></Box>
                  <StyledTypography>
                    {tokenColorText["light1"]}
                  </StyledTypography>
                </TableCell>
                <TableCell
                  className="light2"
                  sx={{
                    background: COLOR_SURFACE["light2"],
                    padding: 0,
                  }}
                >
                  <Box
                    sx={{
                      background: tokenColor,
                      ...COLOR_BOX_STYLE,
                    }}
                  ></Box>
                  <StyledTypography>
                    {tokenColorText["light2"]}
                  </StyledTypography>
                </TableCell>
                <TableCell
                  className="dark1"
                  sx={{
                    background: COLOR_SURFACE["dark1"],
                    padding: 0,
                  }}
                >
                  <Box
                    sx={{
                      background: tokenColor,
                      ...COLOR_BOX_STYLE,
                    }}
                  ></Box>
                  <StyledTypography>{tokenColorText["dark1"]}</StyledTypography>
                </TableCell>
                <TableCell
                  className="dark2"
                  sx={{
                    background: COLOR_SURFACE["dark2"],
                    padding: 0,
                  }}
                >
                  <Box
                    sx={{
                      background: tokenColor,
                      ...COLOR_BOX_STYLE,
                    }}
                  ></Box>
                  <StyledTypography>{tokenColorText["dark2"]}</StyledTypography>
                </TableCell>
                <TableCell
                  className="dark3"
                  sx={{
                    background: COLOR_SURFACE["dark3"],
                    padding: 0,
                  }}
                >
                  <Box
                    sx={{
                      background: tokenColor,
                      ...COLOR_BOX_STYLE,
                    }}
                  ></Box>
                  <StyledTypography>{tokenColorText["dark3"]}</StyledTypography>
                </TableCell>
                <TableCell
                  className="dark4"
                  sx={{
                    background: COLOR_SURFACE["dark4"],
                    padding: 0,
                  }}
                >
                  <Box
                    sx={{
                      background: tokenColor,
                      ...COLOR_BOX_STYLE,
                    }}
                  ></Box>
                  <StyledTypography>{tokenColorText["dark4"]}</StyledTypography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TokenPaletteTable;

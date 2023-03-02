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
import type { TokenComponentColorValue } from "@/foundation/colors/token/component";
import type { ColorTokenValueBySurface } from "@/foundation/colors/token/types";

interface TokenPaletteTableProps {
  token: keyof ColorToken;
}

const TokenPaletteTable = ({ token }: TokenPaletteTableProps) => {
  const theme = useTheme();
  const colorTokenMap = Object.entries(
    token === "core" ? theme.palette.token.core : theme.palette.token.component
  );

  const tokenComponentColorFlatten = [
    ...Object.values(tokenComponentColor),
  ].reduce((acc, cur) => {
    return { ...acc, ...cur };
  }, {});

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
                    background: "var(--grey-0)",
                    padding: 0,
                  }}
                >
                  <Box
                    sx={{
                      background: tokenColor,
                      borderLeft: "1px solid",
                      ...colorBoxStyle,
                    }}
                  ></Box>
                  <StyledTypography>
                    {tokenColorText["light1"]}
                  </StyledTypography>
                </TableCell>
                <TableCell
                  className="light2"
                  sx={{
                    background: "var(--grey-10)",
                    padding: 0,
                  }}
                >
                  <Box
                    sx={{
                      background: tokenColor,
                      ...colorBoxStyle,
                    }}
                  ></Box>
                  <StyledTypography>
                    {tokenColorText["light2"]}
                  </StyledTypography>
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
                      background: tokenColor,
                      ...colorBoxStyle,
                    }}
                  ></Box>
                  <StyledTypography>{tokenColorText["dark1"]}</StyledTypography>
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
                      background: tokenColor,
                      ...colorBoxStyle,
                    }}
                  ></Box>
                  <StyledTypography>{tokenColorText["dark2"]}</StyledTypography>
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
                      background: tokenColor,
                      ...colorBoxStyle,
                    }}
                  ></Box>
                  <StyledTypography>{tokenColorText["dark3"]}</StyledTypography>
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
                      background: tokenColor,
                      ...colorBoxStyle,
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

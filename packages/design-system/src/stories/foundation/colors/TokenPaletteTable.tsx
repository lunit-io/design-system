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
  SxProps,
} from "@mui/material";
import { StyledTypography } from "./styled";
import { tokenCoreColor } from "@/foundation/colors/token/core";
import { tokenComponentColor } from "@/foundation/colors/token/component";

import type { ColorToken } from "@/foundation/colors/types";
import type { ColorTokenValueBySurface } from "@/foundation/colors/token/types";

interface TokenPaletteTableProps {
  kind: keyof ColorToken;
}

const TokenPaletteTable = ({ kind }: TokenPaletteTableProps) => {
  const theme = useTheme();

  const colorTokenMap = Object.entries(
    kind === "core"
      ? theme.palette.lunit_token.core
      : theme.palette.lunit_token.component
  );

  const TokenPaletteCell = (props: {
    surface: keyof ColorTokenValueBySurface;
    paletteKey: string;
    sx?: SxProps;
  }) => {
    const { surface, paletteKey, sx } = props;

    const tokenComponentColorFlatten = Object.values(
      tokenComponentColor
    ).reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, {});

    const boxColorByToken =
      kind === "core"
        ? theme.palette.lunit_token.core[paletteKey as keyof ColorToken["core"]]
        : theme.palette.lunit_token.component[
            paletteKey as keyof ColorToken["component"]
          ];

    const globalColorByToken =
      kind === "core"
        ? tokenCoreColor[paletteKey]
        : tokenComponentColorFlatten[paletteKey];

    return (
      <TableCell
        className={surface}
        sx={{
          background: theme.palette.lunit_token.core.bg_01,
          padding: 0,
        }}
      >
        <Box
          sx={{
            background: boxColorByToken,
            borderTop: "1px solid",
            borderBottom: "1px solid",
            borderColor: "rgba(0, 0, 0, 0.12)",
            height: "12px",
            ...sx,
          }}
        ></Box>
        <StyledTypography>{globalColorByToken[surface]}</StyledTypography>
      </TableCell>
    );
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
          {colorTokenMap.map(([paletteKey, _colorVariable]) => (
            <TableRow key={paletteKey}>
              <TableCell sx={{ height: "72px" }}>
                <StyledTypography>
                  {kind}.{paletteKey}
                </StyledTypography>
              </TableCell>
              <TokenPaletteCell
                surface="light1"
                paletteKey={paletteKey}
                sx={{
                  borderLeft: "1px solid",
                  borderLeftColor: "rgba(0, 0, 0, 0.12)",
                }}
              />
              <TokenPaletteCell surface="light2" paletteKey={paletteKey} />
              <TokenPaletteCell surface="dark1" paletteKey={paletteKey} />
              <TokenPaletteCell surface="dark2" paletteKey={paletteKey} />
              <TokenPaletteCell surface="dark3" paletteKey={paletteKey} />
              <TokenPaletteCell surface="dark4" paletteKey={paletteKey} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TokenPaletteTable;

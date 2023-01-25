import React from "react";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
} from "@mui/material";

import Button from "@/components/Button/Button";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [
    /**
     * TODO
     * Since Color Token system will be changed, below className should be changed accordingly
     * Also, the hover color will be set again with the color token system completion
     */
    (Story) => <Box className="dark4">{Story()}</Box>,
  ],
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Table sx={{ width: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={3}
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              <Typography variant="body1_sb">Kind</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ width: "33.33333%" }}>
              <Typography variant="body2_m">Contained(deault)</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2_m">Outlined</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2_m">Ghost</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Button>Text</Button>
            </TableCell>
            <TableCell>
              <Button kind="outlined">Text</Button>
            </TableCell>
            <TableCell>
              <Button kind="ghost">Text</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <br />
      <br />
    </>
  );
};

export const Kind = ButtonTemplate.bind({});

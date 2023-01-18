import React from "react";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "@/components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [
    /**
     * TODO
     * Since Color Token system will be changed, below className should be changed accordingly
     * Also, the hover color will be set again with the color token system completion
     */
    (Story) => <Box className="base90">{Story()}</Box>,
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
              Kind
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ width: "33.33333%" }}>
              Contained 1st(deault)
            </TableCell>
            <TableCell>Outlined 1st</TableCell>
            <TableCell>Ghost 1st</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Button>Text</Button>
            </TableCell>
            <TableCell>
              <Button kind="outlined1st">Text</Button>
            </TableCell>
            <TableCell>
              <Button kind="ghost1st">Text</Button>
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

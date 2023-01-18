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
import Button, { ButtonProps } from "@/components/Button/Button";

type Size = Pick<ButtonProps, "size">;
type SizeValues = Size[keyof Size];
const sizeList: SizeValues[] = ["small", "medium", "large"];

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
      <Table sx={{ width: 900 }}>
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={3}
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Size
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Small</TableCell>
            <TableCell>Medium</TableCell>
            <TableCell>Large</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {sizeList.map((size) => (
              <TableCell
                key={size}
                sx={{ "& button": { marginRight: "10px" } }}
              >
                <Button size={size}>Icon</Button>
                <Button size={size}>Text</Button>
                <Button size={size}>Text</Button>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
      <br />
      <br />
    </>
  );
};

export const Size = ButtonTemplate.bind({});
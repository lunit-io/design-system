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
  parameters: {
    pseudo: {
      hover: ["#hover"],
    },
  },
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
      <Table sx={{ width: 220 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Outlined 1st</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Enable</TableCell>
            <TableCell>
              <Button kind="outlined1st">Text</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Hover</TableCell>
            <TableCell>
              <Button id="hover" kind="outlined1st">
                Text
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Focus</TableCell>
            <TableCell>
              <Button kind="outlined1st" className="Mui-focusVisible">
                Text
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Disabled</TableCell>
            <TableCell>
              <Button kind="outlined1st" disabled>
                Text
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export const Outlined = ButtonTemplate.bind({});

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
      <Table sx={{ width: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Contained 1st</TableCell>
            <TableCell>Contained 2nd</TableCell>
            <TableCell>Contained Error</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Enable</TableCell>
            <TableCell>
              <Button kind="contained1st">Text</Button>
            </TableCell>
            <TableCell>
              <Button kind="contained2nd">Text</Button>
            </TableCell>
            <TableCell>
              <Button kind="containedError">Text</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Hover</TableCell>
            <TableCell>
              <Button id="hover" kind="contained1st">
                Text
              </Button>
            </TableCell>
            <TableCell>
              <Button id="hover" kind="contained2nd">
                Text
              </Button>
            </TableCell>
            <TableCell>
              <Button id="hover" kind="containedError">
                Text
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Focus</TableCell>
            <TableCell>
              <Button kind="contained1st" className="Mui-focusVisible">
                Text
              </Button>
            </TableCell>
            <TableCell>
              <Button kind="contained2nd" className="Mui-focusVisible">
                Text
              </Button>
            </TableCell>
            <TableCell>
              <Button kind="containedError" className="Mui-focusVisible">
                Text
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Disabled</TableCell>
            <TableCell>
              <Button kind="contained1st" disabled>
                Text
              </Button>
            </TableCell>
            <TableCell>
              <Button kind="contained2nd" disabled>
                Text
              </Button>
            </TableCell>
            <TableCell>
              <Button kind="containedError" disabled>
                Text
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <br />
      <br />
    </>
  );
};

export const Containd = ButtonTemplate.bind({});

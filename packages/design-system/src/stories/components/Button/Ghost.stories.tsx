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
  parameters: {
    pseudo: {
      hover: ["#hover"],
      focus: [".Mui-focusVisible"],
    },
  },
  decorators: [
    /**
     * TODO
     * Since Color Token system will be changed, below className should be changed accordingly
     * Also, the hover color will be set again with the color token system completion
     */
    (Story) => <Box className="light1">{Story()}</Box>,
  ],
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Table sx={{ width: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <Typography variant="body2_m">Ghost Primary</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2_m">Ghost Secondary</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2_m">Ghost Error</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Enable</Typography>
            </TableCell>
            <TableCell>
              <Button kind="ghost">Text</Button>
            </TableCell>
            <TableCell>
              <Button kind="ghost" color="secondary">
                Text
              </Button>
            </TableCell>
            <TableCell>
              <Button kind="ghost" color="error">
                Text
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Hover</Typography>
            </TableCell>
            <TableCell>
              <Button id="hover" kind="ghost">
                Text
              </Button>
            </TableCell>
            <TableCell>
              <Button id="hover" kind="ghost" color="secondary">
                Text
              </Button>
            </TableCell>
            <TableCell>
              <Button id="hover" kind="ghost" color="error">
                Text
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Focus</Typography>
            </TableCell>
            <TableCell>
              <Button kind="ghost" className="Mui-focusVisible">
                Text
              </Button>
            </TableCell>
            <TableCell>
              <Button
                kind="ghost"
                color="secondary"
                className="Mui-focusVisible"
              >
                Text
              </Button>
            </TableCell>
            <TableCell>
              <Button kind="ghost" color="error" className="Mui-focusVisible">
                Text
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Disabled</Typography>
            </TableCell>
            <TableCell>
              <Button kind="ghost" disabled>
                Text
              </Button>
            </TableCell>
            <TableCell>
              <Button kind="ghost" color="secondary" disabled>
                Text
              </Button>
            </TableCell>
            <TableCell>
              <Button kind="ghost" color="error" disabled>
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

export const Ghost = ButtonTemplate.bind({});

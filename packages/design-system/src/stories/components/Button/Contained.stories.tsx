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
import { action } from "@storybook/addon-actions";

import Button from "@/components/Button/Button";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
      defaultValue: "Text",
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "medium", "large"],
      defaultValue: "small",
      table: {
        defaultValue: { summary: "small" },
      },
    },
    onClick: {
      type: "function",
      control: {
        type: "radio",
      },
      options: ["function", undefined],
      mapping: {
        function: action("onClick"),
        undefined: undefined,
      },
      defaultValue: "function",
      description:
        "It is a callback function that is called when the button is clicked.",
    },
  },
  parameters: {
    pseudo: {
      hover: ["#hover"],
      focusVisible: [".Mui-focusVisible"],
    },
    controls: {
      include: ["onClick", "children", "size"],
    },
    docs: {
      description: {
        component: `It is a Contained kind Button. For more details, please
				see [Material-UI Button](https://mui.com/material-ui/react-button/).`,
      },
    },
  },
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
      <Table sx={{ width: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <Typography variant="body2_m">Contained Primary</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2_m">Contained Secondary</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2_m">Contained Error</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Enable</Typography>
            </TableCell>
            <TableCell>
              <Button {...args} kind="contained">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="contained" color="secondary">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="contained" color="error">
                {args.children}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Hover</Typography>
            </TableCell>
            <TableCell>
              <Button {...args} id="hover" kind="contained">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} id="hover" kind="contained" color="secondary">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} id="hover" kind="contained" color="error">
                {args.children}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Focus</Typography>
            </TableCell>
            <TableCell>
              <Button {...args} kind="contained" className="Mui-focusVisible">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...args}
                kind="contained"
                color="secondary"
                className="Mui-focusVisible"
              >
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...args}
                kind="contained"
                color="error"
                className="Mui-focusVisible"
              >
                {args.children}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Disabled</Typography>
            </TableCell>
            <TableCell>
              <Button {...args} kind="contained" disabled>
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="contained" color="secondary" disabled>
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="contained" color="error" disabled>
                {args.children}
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

export const KindContained = ButtonTemplate.bind({});

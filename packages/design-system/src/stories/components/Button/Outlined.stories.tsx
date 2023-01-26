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
        type: "select",
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
        type: "select",
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
    color: {
      control: {
        type: "select",
      },
      options: ["primary"],
      defaultValue: "primary",
      description: "Outlined Button has only one color primary",
      table: {
        type: { summary: "primary" },
        defaultValue: { summary: "primary" },
      },
    },
  },
  parameters: {
    pseudo: {
      hover: ["#hover"],
      focusVisible: [".Mui-focusVisible"],
    },
    controls: {
      include: ["onClick", "children", "size", "color"],
    },
    docs: {
      description: {
        component: `It is a Outlined kind Button. For more details, please
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

const ButtonTemplate: ComponentStory<typeof Button> = ({
  color,
  ...restProps
}) => {
  return (
    <>
      <Table sx={{ width: 250 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <Typography variant="body2_m">Outlined Primary</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Enable</Typography>
            </TableCell>
            <TableCell>
              <Button {...restProps} kind="outlined">
                Text
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Hover</Typography>
            </TableCell>
            <TableCell>
              <Button {...restProps} id="hover" kind="outlined">
                Text
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Focus</Typography>
            </TableCell>
            <TableCell>
              <Button
                {...restProps}
                kind="outlined"
                className="Mui-focusVisible"
              >
                Text
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Disabled</Typography>
            </TableCell>
            <TableCell>
              <Button {...restProps} kind="outlined" disabled>
                Text
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export const KindOutlined = ButtonTemplate.bind({});

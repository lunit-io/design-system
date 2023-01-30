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

import ToggleButton from "@/components/ToggleButton";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
  argTypes: {
    value: {
      control: false,
      table: { type: { summary: "any" } },
    },
    selected: {
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    children: {
      type: "string",
      defaultValue: "Text",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      table: {
        defaultValue: { summary: "false" },
      },
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
    selectedColor: {
      control: {
        type: "radio",
      },
      defaultValue: "primary",
      options: ["primary", "secondary"],
      description:
        "The color of the button when it is in an select state. It has nothing to do with active button",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    onChange: {
      type: "function",
      control: false,
      options: ["function", undefined],
      mapping: {
        function: action("onChange"),
        undefined: undefined,
      },
      defaultValue: "function",
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
    color: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary"],
      defaultValue: "primary",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    kind: {
      control: false,
      options: ["contained", "outlined", "ghost"],
      description: "Button has three Kinds Contained, Outlined, Ghost",
      defaultValue: "contained",
      table: {
        defaultValue: { summary: "contained" },
      },
    },
  },
  parameters: {
    controls: {
      include: [
        "value",
        "kind",
        "selectedColor",
        "onClick",
        "children",
        "disabled",
        "size",
        "selected",
        "color",
        "onChange",
      ],
    },
    docs: {
      description: {
        component: `A Toggle Button can be used to group related options. please
				see [Material-UI Toggle Button](https://mui.com/material-ui/react-toggle-button/).`,
      },
    },
  },
} as ComponentMeta<typeof ToggleButton>;

const ButtonTemplate: ComponentStory<typeof ToggleButton> = ({
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
              <ToggleButton {...restProps} kind="outlined" value="text1">
                Text
              </ToggleButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Hover</Typography>
            </TableCell>
            <TableCell>
              <ToggleButton
                {...restProps}
                id="hover"
                kind="outlined"
                value="text2"
              >
                Text
              </ToggleButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Focus</Typography>
            </TableCell>
            <TableCell>
              <ToggleButton
                {...restProps}
                kind="outlined"
                className="Mui-focusVisible"
                value="text3"
              >
                Text
              </ToggleButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Disabled</Typography>
            </TableCell>
            <TableCell>
              <ToggleButton
                {...restProps}
                kind="outlined"
                disabled
                value="text4"
              >
                Text
              </ToggleButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export const KindOutlined = ButtonTemplate.bind({});
KindOutlined.storyName = "Kind: Outlined";

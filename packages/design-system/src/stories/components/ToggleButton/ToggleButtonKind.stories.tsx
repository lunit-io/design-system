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
      defaultValue: false,
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
  kind,
  color,
  children,
  ...restProps
}) => {
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
              <Typography variant="body2_m">Contained(default)</Typography>
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
              <ToggleButton color={color} {...restProps} value="text1">
                {children}
              </ToggleButton>
            </TableCell>
            <TableCell>
              <ToggleButton
                kind="outlined"
                color="primary"
                {...restProps}
                value="text2"
              >
                {children}
              </ToggleButton>
            </TableCell>
            <TableCell>
              <ToggleButton
                kind="ghost"
                color={color}
                {...restProps}
                value="text3"
              >
                {children}
              </ToggleButton>
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

Kind.argTypes = {
  color: {
    control: {
      type: "radio",
    },
  },
};

const ContainedTemplate: ComponentStory<typeof ToggleButton> = (args) => {
  return (
    <Table sx={{ width: 450 }}>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>
            <Typography variant="body2_m">Contained Primary</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body2_m">Contained Secondary</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography variant="body2_reg">Enable</Typography>
          </TableCell>
          <TableCell>
            <ToggleButton {...args} kind="contained" value="text1">
              {args.children}
            </ToggleButton>
          </TableCell>
          <TableCell>
            <ToggleButton
              {...args}
              kind="contained"
              color="secondary"
              value="text2"
            >
              {args.children}
            </ToggleButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="body2_reg">Hover</Typography>
          </TableCell>
          <TableCell>
            <ToggleButton {...args} id="hover" kind="contained" value="text3">
              {args.children}
            </ToggleButton>
          </TableCell>
          <TableCell>
            <ToggleButton
              {...args}
              id="hover"
              kind="contained"
              color="secondary"
              value="text4"
            >
              {args.children}
            </ToggleButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="body2_reg">Focus</Typography>
          </TableCell>
          <TableCell>
            <ToggleButton
              {...args}
              kind="contained"
              className="Mui-focusVisible"
              value="text5"
            >
              {args.children}
            </ToggleButton>
          </TableCell>
          <TableCell>
            <ToggleButton
              {...args}
              kind="contained"
              color="secondary"
              className="Mui-focusVisible"
              value="text6"
            >
              {args.children}
            </ToggleButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="body2_reg">Disabled</Typography>
          </TableCell>
          <TableCell>
            <ToggleButton {...args} kind="contained" disabled value="text7">
              {args.children}
            </ToggleButton>
          </TableCell>
          <TableCell>
            <ToggleButton
              {...args}
              kind="contained"
              color="secondary"
              disabled
              value="text8"
            >
              {args.children}
            </ToggleButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const KindContained = ContainedTemplate.bind({});
KindContained.storyName = "Kind: Contained";

KindContained.argTypes = {
  color: {
    control: false,
  },
};

const GhostTemplate: ComponentStory<typeof ToggleButton> = (args) => {
  return (
    <>
      <Table sx={{ width: 450 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <Typography variant="body2_m">Ghost Primary</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2_m">Ghost Secondary</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Enable</Typography>
            </TableCell>
            <TableCell>
              <ToggleButton {...args} kind="ghost" value="text1">
                {args.children}
              </ToggleButton>
            </TableCell>
            <TableCell>
              <ToggleButton
                {...args}
                kind="ghost"
                color="secondary"
                value="text2"
              >
                {args.children}
              </ToggleButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Hover</Typography>
            </TableCell>
            <TableCell>
              <ToggleButton {...args} id="hover" kind="ghost" value="text3">
                {args.children}
              </ToggleButton>
            </TableCell>
            <TableCell>
              <ToggleButton
                {...args}
                id="hover"
                kind="ghost"
                color="secondary"
                value="text4"
              >
                {args.children}
              </ToggleButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Focus</Typography>
            </TableCell>
            <TableCell>
              <ToggleButton
                {...args}
                kind="ghost"
                className="Mui-focusVisible"
                value="text5"
              >
                {args.children}
              </ToggleButton>
            </TableCell>
            <TableCell>
              <ToggleButton
                {...args}
                kind="ghost"
                color="secondary"
                className="Mui-focusVisible"
                value="text6"
              >
                {args.children}
              </ToggleButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Disabled</Typography>
            </TableCell>
            <TableCell>
              <ToggleButton {...args} kind="ghost" disabled value="text7">
                {args.children}
              </ToggleButton>
            </TableCell>
            <TableCell>
              <ToggleButton
                {...args}
                kind="ghost"
                color="secondary"
                disabled
                value="text8"
              >
                {args.children}
              </ToggleButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <br />
      <br />
    </>
  );
};

export const KindGhost = GhostTemplate.bind({});
KindGhost.storyName = "Kind: Ghost";

KindGhost.argTypes = {
  color: {
    control: false,
  },
};

const OutlinedTemplate: ComponentStory<typeof ToggleButton> = ({
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

export const KindOutlined = OutlinedTemplate.bind({});
KindOutlined.storyName = "Kind: Outlined";

KindOutlined.argTypes = {
  color: {
    control: false,
  },
};

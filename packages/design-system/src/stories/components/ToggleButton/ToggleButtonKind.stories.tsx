import React, { useState } from "react";
import {
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
      control: false,
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
  const [values, setValues] = useState({
    contained: false,
    outlined: false,
    ghost: false,
  });

  const handleChange = (value: keyof typeof values) => {
    setValues({ ...values, [value]: !values[value] });
  };

  return (
    <>
      <Table sx={{ width: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={3}
              sx={{
                typography: "body1_16_semibold",
                color: "inherit",
              }}
            >
              Kind
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                width: "33.33333%",
                typography: "body2_14_medium",
                color: "inherit",
              }}
            >
              Contained(default)
            </TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Outlined
            </TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Ghost
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <ToggleButton
                color={color}
                {...restProps}
                value="contained"
                onChange={() => handleChange("contained")}
                selected={values.contained}
              >
                {children}
              </ToggleButton>
            </TableCell>
            <TableCell>
              <ToggleButton
                kind="outlined"
                color="primary"
                {...restProps}
                value="outlined"
                onChange={() => handleChange("outlined")}
                selected={values.outlined}
              >
                {children}
              </ToggleButton>
            </TableCell>
            <TableCell>
              <ToggleButton
                kind="ghost"
                color={color}
                {...restProps}
                value="ghost"
                onChange={() => handleChange("ghost")}
                selected={values.ghost}
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
  const [values, setValues] = useState({
    primary: {
      enable: false,
      hover: false,
      focus: false,
    },
    secondary: {
      enable: false,
      hover: false,
      focus: false,
    },
  });

  const handleChange = (
    color: keyof typeof values,
    value: keyof typeof values[keyof typeof values]
  ) => {
    setValues({
      ...values,
      [color]: {
        ...values[color],
        [value]: !values[color][value],
      },
    });
  };

  return (
    <Table sx={{ width: 450 }}>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
            Contained Primary
          </TableCell>
          <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
            Contained Secondary
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell sx={{ typography: "body2_14_regular", color: "inherit" }}>
            Enable
          </TableCell>
          <TableCell>
            <ToggleButton
              {...args}
              kind="contained"
              value="enable"
              onChange={() => handleChange("primary", "enable")}
              selected={values.primary.enable}
            >
              {args.children}
            </ToggleButton>
          </TableCell>
          <TableCell>
            <ToggleButton
              {...args}
              kind="contained"
              color="secondary"
              value="enable"
              onChange={() => handleChange("secondary", "enable")}
              selected={values.secondary.enable}
            >
              {args.children}
            </ToggleButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ typography: "body2_14_regular", color: "inherit" }}>
            Hover
          </TableCell>
          <TableCell>
            <ToggleButton
              {...args}
              id="hover"
              kind="contained"
              value="hover"
              onChange={() => handleChange("primary", "hover")}
              selected={values.primary.hover}
            >
              {args.children}
            </ToggleButton>
          </TableCell>
          <TableCell>
            <ToggleButton
              {...args}
              id="hover"
              kind="contained"
              color="secondary"
              value="hover"
              onChange={() => handleChange("secondary", "hover")}
              selected={values.secondary.hover}
            >
              {args.children}
            </ToggleButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ typography: "body2_14_regular", color: "inherit" }}>
            Focus
          </TableCell>
          <TableCell>
            <ToggleButton
              {...args}
              kind="contained"
              className="Mui-focusVisible"
              value="focus"
              onChange={() => handleChange("primary", "focus")}
              selected={values.primary.focus}
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
              value="focus"
              onChange={() => handleChange("secondary", "focus")}
              selected={values.secondary.focus}
            >
              {args.children}
            </ToggleButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ typography: "body2_14_regular", color: "inherit" }}>
            Disabled
          </TableCell>
          <TableCell>
            <ToggleButton {...args} kind="contained" disabled value="disabled">
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
  const [values, setValues] = useState({
    primary: {
      enable: false,
      hover: false,
      focus: false,
    },
    secondary: {
      enable: false,
      hover: false,
      focus: false,
    },
  });

  const handleChange = (
    color: keyof typeof values,
    value: keyof typeof values[keyof typeof values]
  ) => {
    setValues({
      ...values,
      [color]: {
        ...values[color],
        [value]: !values[color][value],
      },
    });
  };

  return (
    <>
      <Table sx={{ width: 450 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Ghost Primary
            </TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Ghost Secondary
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Enable
            </TableCell>
            <TableCell>
              <ToggleButton
                {...args}
                kind="ghost"
                value="enable"
                onChange={() => handleChange("primary", "enable")}
                selected={values.primary.enable}
              >
                {args.children}
              </ToggleButton>
            </TableCell>
            <TableCell>
              <ToggleButton
                {...args}
                kind="ghost"
                color="secondary"
                value="enable"
                onChange={() => handleChange("secondary", "enable")}
                selected={values.secondary.enable}
              >
                {args.children}
              </ToggleButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Hover
            </TableCell>
            <TableCell>
              <ToggleButton
                {...args}
                id="hover"
                kind="ghost"
                value="hover"
                onChange={() => handleChange("primary", "hover")}
                selected={values.primary.hover}
              >
                {args.children}
              </ToggleButton>
            </TableCell>
            <TableCell>
              <ToggleButton
                {...args}
                id="hover"
                kind="ghost"
                color="secondary"
                value="hover"
                onChange={() => handleChange("secondary", "hover")}
                selected={values.secondary.hover}
              >
                {args.children}
              </ToggleButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Focus
            </TableCell>
            <TableCell>
              <ToggleButton
                {...args}
                kind="ghost"
                className="Mui-focusVisible"
                value="focus"
                onChange={() => handleChange("primary", "focus")}
                selected={values.primary.focus}
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
                value="focus"
                onChange={() => handleChange("secondary", "focus")}
                selected={values.secondary.focus}
              >
                {args.children}
              </ToggleButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Disabled
            </TableCell>
            <TableCell>
              <ToggleButton {...args} kind="ghost" disabled value="disabled">
                {args.children}
              </ToggleButton>
            </TableCell>
            <TableCell>
              <ToggleButton
                {...args}
                kind="ghost"
                color="secondary"
                disabled
                value="disabled"
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
  const [values, setValues] = useState({
    primary: {
      enable: false,
      hover: false,
      focus: false,
    },
  });

  const handleChange = (
    color: keyof typeof values,
    value: keyof typeof values[keyof typeof values]
  ) => {
    setValues({
      ...values,
      [color]: {
        ...values[color],
        [value]: !values[color][value],
      },
    });
  };

  return (
    <>
      <Table sx={{ width: 250 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Outlined Primary
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Enable
            </TableCell>
            <TableCell>
              <ToggleButton
                {...restProps}
                kind="outlined"
                value="enable"
                onChange={() => handleChange("primary", "enable")}
                selected={values.primary.enable}
              >
                Text
              </ToggleButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Hover
            </TableCell>
            <TableCell>
              <ToggleButton
                {...restProps}
                id="hover"
                kind="outlined"
                value="hover"
                onChange={() => handleChange("primary", "hover")}
                selected={values.primary.hover}
              >
                Text
              </ToggleButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Focus
            </TableCell>
            <TableCell>
              <ToggleButton
                {...restProps}
                kind="outlined"
                className="Mui-focusVisible"
                value="focus"
                onChange={() => handleChange("primary", "focus")}
                selected={values.primary.focus}
              >
                Text
              </ToggleButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Disabled
            </TableCell>
            <TableCell>
              <ToggleButton
                {...restProps}
                kind="outlined"
                disabled
                value="disabled"
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

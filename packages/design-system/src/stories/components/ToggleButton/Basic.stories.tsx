import React, { useEffect, useState } from "react";
import { action } from "@storybook/addon-actions";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Box,
} from "@mui/material";
import Bell from "@lunit/design-system-icons/Bell";
import ToggleButton from "@/components/ToggleButton";
import ToggleButtonGroup from "@/components/ToggleButtonGroup";

import type { StoryFn, Meta } from "@storybook/react";
import type { ButtonProps } from "@/components/Button/Button.types";

type Size = Pick<ButtonProps, "size">;
type SizeValues = Size[keyof Size];
const sizeList: SizeValues[] = ["small", "medium", "large"];

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
  args: {
    children: "Text",
    kind: "contained",
    color: "primary",
    selectedColor: "primary",
    size: "small",
    disabled: false,
  },
  argTypes: {
    icon: {
      control: false,
      description: `Use this prop when you want to add icon.
        \n It is added to the left of the text criteria`,
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "React.ReactNode" },
      },
    },
    value: {
      control: false,
      table: { type: { summary: "any" } },
    },
    children: {
      type: "string",
    },
    selected: {
      control: false,
      table: {
        defaultValue: { summary: "false" },
      },
    },
    selectedColor: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary"],
      description:
        "The color of the button when it is in an select state. It has nothing to do with active button",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    kind: {
      control: {
        type: "radio",
      },
      options: ["contained", "outlined", "ghost"],
      description: "Button has three Kinds Contained, Outlined, Ghost",
      table: {
        defaultValue: { summary: "contained" },
      },
    },
    color: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary"],
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    size: {
      options: ["small", "medium", "large"],
      table: {
        defaultValue: { summary: "small" },
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
    },
    onClick: {
      type: "function",
      control: false,
      options: ["function", undefined],
      mapping: {
        function: action("onClick"),
        undefined: undefined,
      },
      description:
        "It is a callback function that is called when the button is clicked.",
    },
  },
  parameters: {
    controls: {
      include: [
        "onChange",
        "onClick",
        "children",
        "disabled",
        "size",
        "kind",
        "color",
        "selectedColor",
        "selected",
        "value",
        "icon",
      ],
    },
    docs: {
      description: {
        component: `A Toggle Button can be used to group related options. please
				see [Material-UI Toggle Button](https://mui.com/material-ui/react-toggle-button/).`,
      },
    },
  },
} as Meta<typeof ToggleButton>;

const BasicToggleButtonTemplate: StoryFn<typeof ToggleButton> = (arg) => {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(Boolean(arg.selected));
  }, [arg.selected]);

  return (
    <ToggleButton
      {...arg}
      value="test"
      selected={selected}
      onChange={() => setSelected(!selected)}
    >
      {arg.children}
    </ToggleButton>
  );
};

export const BasicToggleButton = {
  render: BasicToggleButtonTemplate,
  name: "Basic ToggleButton",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const SizeTemplate: StoryFn<typeof ToggleButton> = (args) => {
  const [values, setValues] = React.useState({
    small: "",
    medium: "",
    large: "",
  });

  const handleChange = (value: string | null, size: SizeValues) => {
    if (size) {
      setValues({
        ...values,
        [size]: value,
      });
    }
  };

  const group = sizeList.map((size) => {
    if (size) {
      return {
        size: size,
        handler: (_: React.MouseEvent<HTMLElement>, value: string | null) =>
          handleChange(value, size),
      };
    }
  });

  return (
    <Table sx={{ width: 900 }}>
      <TableHead>
        <TableRow>
          <TableCell
            colSpan={3}
            sx={{
              typography: "body1_16_semibold",
              color: "inherit",
            }}
          >
            Size
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
            Small
          </TableCell>
          <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
            Medium
          </TableCell>
          <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
            Large
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {group.map((item) => {
            if (item) {
              const { size, handler } = item;
              return (
                <TableCell
                  key={size}
                  sx={{ "& button": { marginRight: "10px" } }}
                >
                  <ToggleButtonGroup
                    value={values[size]}
                    exclusive
                    onChange={handler}
                    aria-label="text alignment"
                    sx={{
                      "& button": {
                        marginRight: "7px",
                      },
                    }}
                  >
                    <ToggleButton
                      {...args}
                      icon={<Bell />}
                      size={size}
                      value={String(size) + 1}
                    />
                    <ToggleButton
                      {...args}
                      size={size}
                      value={String(size) + 2}
                    >
                      {args.children}
                    </ToggleButton>
                    <ToggleButton
                      {...args}
                      icon={<Bell />}
                      size={size}
                      value={String(size) + 3}
                    >
                      {args.children}
                    </ToggleButton>
                  </ToggleButtonGroup>
                </TableCell>
              );
            }
          })}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const Size = {
  render: SizeTemplate,

  argTypes: {
    size: {
      control: false,
    },
  },
};

const SizeDocsTemplate: StoryFn<typeof ToggleButton> = (args) => {
  const [values, setValues] = React.useState({
    small: "",
    medium: "",
    large: "",
  });

  const handleChange = (value: string | null, size: SizeValues) => {
    if (!size) return;

    setValues({
      ...values,
      [size]: value,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        "& button": {
          marginRight: 2,
        },
      }}
    >
      <ToggleButtonGroup
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        value={values.small}
        onChange={(_, value) => handleChange(value, "small")}
      >
        <ToggleButton {...args} value="small" size="small">
          Small
        </ToggleButton>
        <ToggleButton {...args} value="medium" size="medium">
          Medium
        </ToggleButton>
        <ToggleButton {...args} value="large" size="large">
          Large
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        value={values.medium}
        onChange={(_, value) => handleChange(value, "medium")}
      >
        <ToggleButton
          {...args}
          value="small"
          kind="outlined"
          color="primary"
          size="small"
        >
          Small
        </ToggleButton>
        <ToggleButton
          {...args}
          value="medium"
          kind="outlined"
          color="primary"
          size="medium"
        >
          Medium
        </ToggleButton>
        <ToggleButton
          {...args}
          value="large"
          kind="outlined"
          color="primary"
          size="large"
        >
          Large
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        value={values.large}
        onChange={(_, value) => handleChange(value, "large")}
      >
        <ToggleButton {...args} value="small" kind="ghost" size="small">
          Small
        </ToggleButton>
        <ToggleButton {...args} value="medium" kind="ghost" size="medium">
          Medium
        </ToggleButton>
        <ToggleButton {...args} value="large" kind="ghost" size="large">
          Large
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export const SizeDocs = {
  render: SizeDocsTemplate,
  argTypes: {
    size: {
      control: false,
    },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const ColorTemplate: StoryFn<typeof ToggleButton> = (args) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          "& button": {
            marginRight: 2,
          },
        }}
      >
        <ToggleButton {...args} value="first" kind="contained" color="primary">
          Primary
        </ToggleButton>
        <ToggleButton
          {...args}
          value="first"
          kind="contained"
          color="secondary"
        >
          Secondary
        </ToggleButton>
      </Box>
      <Box
        sx={{
          marginTop: 4,
          "& button": {
            marginRight: 2,
          },
        }}
      >
        <ToggleButton {...args} value="first" kind="outlined" color="primary">
          Primary
        </ToggleButton>
      </Box>
      <Box
        sx={{
          marginTop: 4,
          "& button": {
            marginRight: 2,
          },
        }}
      >
        <ToggleButton {...args} value="first" kind="ghost" color="primary">
          Primary
        </ToggleButton>
        <ToggleButton {...args} value="first" kind="ghost" color="secondary">
          Secondary
        </ToggleButton>
      </Box>
    </Box>
  );
};

export const Color = {
  render: ColorTemplate,
  argTypes: {
    size: {
      control: false,
    },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const SelectedColorTemplate: StoryFn<typeof ToggleButton> = (arg) => {
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(true);

  return (
    <Table sx={{ width: 330 }}>
      <TableHead>
        <TableRow>
          <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
            Selected color
          </TableCell>
          <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
            Primary
          </TableCell>
          <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
            Secondary
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
            Selected
          </TableCell>
          <TableCell>
            <ToggleButton
              {...arg}
              value="first"
              selected={selected1}
              onChange={() => setSelected1(!selected1)}
            >
              {arg.children}
            </ToggleButton>
          </TableCell>
          <TableCell>
            <ToggleButton
              {...arg}
              selectedColor="secondary"
              value="second"
              selected={selected2}
              onChange={() => setSelected2(!selected2)}
            >
              {arg.children}
            </ToggleButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const SelectedColor = {
  render: SelectedColorTemplate,

  argTypes: {
    selectedColor: {
      control: false,
    },
  },

  args: {
    selected: true,
  },
};

const SelectedColorDocsTemplate: StoryFn<typeof ToggleButton> = (args) => {
  const { kind, selectedColor, color, ...restProps } = args;
  return (
    <Box
      sx={{
        "& button": {
          marginRight: 2,
        },
      }}
    >
      <ToggleButton {...restProps} value="first" selectedColor="primary">
        Primary
      </ToggleButton>
      <ToggleButton {...restProps} value="second" selectedColor="secondary">
        Secondary
      </ToggleButton>
    </Box>
  );
};

export const SelectedColorDocs = {
  render: SelectedColorDocsTemplate,
  argTypes: {
    selectedColor: {
      control: false,
    },
  },
  args: {
    selected: true,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const SelectedDocsTemplate: StoryFn<typeof ToggleButton> = (args) => {
  const { kind, selectedColor, color, selected, ...restProps } = args;
  return (
    <Box
      sx={{
        "& button": {
          marginRight: 2,
        },
      }}
    >
      <ToggleButton {...restProps} value="first">
        Not Selected
      </ToggleButton>
      <ToggleButton {...restProps} value="second" selected={true}>
        Selected
      </ToggleButton>
    </Box>
  );
};

export const SelectedDocs = {
  render: SelectedDocsTemplate,
  argTypes: {
    selectedColor: {
      control: false,
    },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    include: ["color", "size", "disabled", "selected", "kind"],
  },
};

const DisabledTemplate: StoryFn<typeof ToggleButton> = (args) => {
  return (
    <Box
      sx={{
        "& button": {
          marginRight: 2,
        },
      }}
    >
      <ToggleButton {...args} value="first" disabled>
        Text
      </ToggleButton>
      <ToggleButton
        {...args}
        kind="outlined"
        color="primary"
        value="second"
        disabled
      >
        Text
      </ToggleButton>
      <ToggleButton {...args} kind="ghost" value="second" disabled>
        Text
      </ToggleButton>
    </Box>
  );
};

export const DisabledDocs = {
  render: DisabledTemplate,
  argTypes: {
    selectedColor: {
      control: false,
    },
  },
  args: {
    selected: false,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

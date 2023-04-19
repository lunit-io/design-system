import React, { useEffect, useState } from "react";
import { action } from "@storybook/addon-actions";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
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
      defaultValue: "Text",
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
      defaultValue: "primary",
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
      defaultValue: "contained",
      table: {
        defaultValue: { summary: "contained" },
      },
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
      options: ["small", "medium", "large"],
      defaultValue: "small",
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
      defaultValue: "function",
    },
    onClick: {
      type: "function",
      control: false,
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

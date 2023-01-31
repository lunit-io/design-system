import React, { useEffect, useState } from "react";
import { action } from "@storybook/addon-actions";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
} from "@mui/material";
import { Bell } from "@lunit/design-system-icons";
import ToggleButton from "@/components/ToggleButton";

import type { ComponentStory, ComponentMeta } from "@storybook/react";
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
        \n It is added to the left of the text criteria,
        \n and only Icon can be checked when used with hasIconOnly.`,
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "React.ReactNode" },
      },
    },
    hasIconOnly: {
      control: false,
      description: `Option to handle so that only icons can be inserted
          \n If set to false, you can add Text.`,
      defaultValue: false,
      table: {
        defaultValue: { summary: "false" },
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
      defaultValue: false,
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
        "hasIconOnly",
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

const BasicToggleButtonTemplate: ComponentStory<typeof ToggleButton> = (
  arg,
) => {
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

export const BasicToggleButton = BasicToggleButtonTemplate.bind({});
BasicToggleButton.storyName = "Basic ToggleButton";

const SizeTemplate: ComponentStory<typeof ToggleButton> = (args) => {
  return (
    <Table sx={{ width: 900 }}>
      <TableHead>
        <TableRow>
          <TableCell colSpan={3} sx={{ fontWeight: "bold", fontSize: "16px" }}>
            <Typography variant="body1_sb">Size</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="body2_m">Small</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body2_m">Medium</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body2_m">Large</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {sizeList.map((size) => (
            <TableCell key={size} sx={{ "& button": { marginRight: "10px" } }}>
              <ToggleButton
                {...args}
                hasIconOnly
                icon={<Bell />}
                size={size}
                value="text1"
              />
              <ToggleButton {...args} size={size}>
                {args.children}
              </ToggleButton>
              <ToggleButton {...args} icon={<Bell />} size={size} value="text2">
                {args.children}
              </ToggleButton>
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const Size = SizeTemplate.bind({});
Size.argTypes = {
  size: {
    control: false,
  },
};

const SelectedColorTemplate: ComponentStory<typeof ToggleButton> = (arg) => (
  <Table sx={{ width: 330 }}>
    <TableHead>
      <TableRow>
        <TableCell>
          <Typography variant="body2_m">Selected color</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2_m">Primary</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2_m">Secondary</Typography>
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          <Typography variant="body2_m">Selected</Typography>
        </TableCell>
        <TableCell>
          <ToggleButton {...arg} value="first">
            {arg.children}
          </ToggleButton>
        </TableCell>
        <TableCell>
          <ToggleButton {...arg} selectedColor="secondary" value="second">
            {arg.children}
          </ToggleButton>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const SelectedColor = SelectedColorTemplate.bind({});

SelectedColor.argTypes = {
  selectedColor: {
    control: false,
  },
};

SelectedColor.args = {
  selected: true,
};

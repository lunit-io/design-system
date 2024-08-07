import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Box,
} from "@mui/material";
import { action } from "@storybook/addon-actions";
import Bell from "@lunit/design-system-icons/Bell";

import ToggleButton from "@/components/ToggleButton";

import type { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
  args: {
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
    selected: {
      control: false,
      table: {
        defaultValue: { summary: "false" },
      },
    },
    selectedColor: {
      control: false,
      options: ["primary", "secondary"],
      description:
        "The color of the button when it is in an select state. It has nothing to do with active button",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    color: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary"],
      description: "Button has three Kinds Contained, Ghost",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    kind: {
      control: {
        type: "radio",
      },
      options: ["contained", "outlined", "ghost"],
      table: {
        defaultValue: { summary: "contained" },
      },
    },
    children: {
      type: "string",
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
      control: {
        type: "radio",
      },
      options: ["small", "medium", "large"],
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
      description:
        "It is a callback function that is called when the button is clicked.",
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
  },
  parameters: {
    controls: {
      include: [
        "icon",
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
} as Meta<typeof ToggleButton>;

const Template: StoryFn<typeof ToggleButton> = (arg) => {
  const [values, setValues] = useState({
    primary: true,
    secondary: true,
  });

  const handleChange = (value: keyof typeof values) => {
    setValues({
      ...values,
      [value]: !values[value],
    });
  };

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
              icon={<Bell />}
              value="primary"
              onChange={() => handleChange("primary")}
              selected={values.primary}
            >
              {arg.children}
            </ToggleButton>
          </TableCell>
          <TableCell>
            <ToggleButton
              {...arg}
              icon={<Bell />}
              selectedColor="secondary"
              value="secondary"
              onChange={() => handleChange("secondary")}
              selected={values.secondary}
            >
              {arg.children}
            </ToggleButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const IconStory = {
  render: Template,
  name: "Icon",

  args: {
    children: "Text",
  },

  argTypes: {
    children: {
      type: "string",
      defaultValue: "text",
    },
  },
};

const IconDocsTemplate: StoryFn<typeof ToggleButton> = (arg) => {
  const [values, setValues] = useState({
    contained: false,
    outlined: false,
    ghost: false,
  });

  const handleChange = (value: keyof typeof values) => {
    setValues({
      ...values,
      [value]: !values[value],
    });
  };

  return (
    <Box sx={{ "& button": { marginRight: 2 } }}>
      <ToggleButton
        {...arg}
        icon={<Bell />}
        value="contained"
        onChange={() => handleChange("contained")}
        selected={values.contained}
      >
        Contained
      </ToggleButton>
      <ToggleButton
        {...arg}
        icon={<Bell />}
        kind="outlined"
        color="primary"
        value="outlined"
        onChange={() => handleChange("outlined")}
        selected={values.outlined}
      >
        Outlined
      </ToggleButton>
      <ToggleButton
        {...arg}
        icon={<Bell />}
        kind="ghost"
        value="ghost"
        onChange={() => handleChange("ghost")}
        selected={values.ghost}
      >
        Ghost
      </ToggleButton>
    </Box>
  );
};

export const IconDocs = {
  render: IconDocsTemplate,
  name: "Icon Docs",
  args: {
    children: "Text",
  },
  argTypes: {
    children: {
      type: "string",
      defaultValue: "text",
    },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    controls: {
      include: ["color", "size", "disabled", "children"],
    },
  },
};

const IconOnlyTemplate: StoryFn<typeof ToggleButton> = (arg) => {
  const [values, setValues] = useState({
    primary: true,
    secondary: true,
  });

  const handleChange = (value: keyof typeof values) => {
    setValues({
      ...values,
      [value]: !values[value],
    });
  };

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
              icon={<Bell />}
              value="primary"
              onChange={() => handleChange("primary")}
              selected={values.primary}
            >
              {arg.children}
            </ToggleButton>
          </TableCell>
          <TableCell>
            <ToggleButton
              {...arg}
              icon={<Bell />}
              selectedColor="secondary"
              value="secondary"
              onChange={() => handleChange("secondary")}
              selected={values.secondary}
            >
              {arg.children}
            </ToggleButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const WithIconOnlyStory = {
  render: IconOnlyTemplate,
  name: "Icon only",

  argTypes: {
    children: {
      type: "string",
      controls: false,
    },
  },
};

const IconOnlyDocsTemplate: StoryFn<typeof ToggleButton> = (arg) => {
  const { children, ...restArg } = arg;

  const [values, setValues] = useState({
    contained: false,
    outlined: false,
    ghost: false,
  });

  const handleChange = (value: keyof typeof values) => {
    setValues({
      ...values,
      [value]: !values[value],
    });
  };

  return (
    <Box sx={{ "& button": { marginRight: 2 } }}>
      <ToggleButton
        {...restArg}
        icon={<Bell />}
        value="contained"
        onChange={() => handleChange("contained")}
        selected={values.contained}
      />
      <ToggleButton
        {...restArg}
        icon={<Bell />}
        kind="outlined"
        color="primary"
        value="outlined"
        onChange={() => handleChange("outlined")}
        selected={values.outlined}
      />

      <ToggleButton
        {...restArg}
        icon={<Bell />}
        kind="ghost"
        value="ghost"
        onChange={() => handleChange("ghost")}
        selected={values.ghost}
      />
    </Box>
  );
};

export const IconOnlyDocs = {
  render: IconOnlyDocsTemplate,
  name: "Icon Only Docs",
  args: {
    children: "Text",
  },
  argTypes: {
    children: {
      type: "string",
      defaultValue: "text",
    },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    controls: {
      include: ["color", "size", "disabled", "children"],
    },
  },
};

import React, { useState, useEffect } from "react";
import { Box, FormControlLabel } from "@mui/material";
import { action } from "@storybook/addon-actions";
import Checkbox from "@/components/Checkbox";
import FormLabel from "@/components/FormLabel";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
      table: { type: { summary: "bool" }, defaultValue: { summary: "false" } },
      description: "If true, the component is disabled.",
    },
    indeterminate: {
      control: "boolean",
      table: { type: { summary: "bool" }, defaultValue: { summary: "false" } },
      description: "If true, the component appears indeterminate.",
    },
    onChange: {
      type: "function",
      control: {
        type: "radio",
      },
      options: ["function", undefined],
      mapping: {
        function: action("onChange"),
        undefined: undefined,
      },
      defaultValue: "function",
      table: { type: { summary: "func" } },
      description:
        "Callback fired when the state is changed. Signature: `function(event: React.ChangeEvent<HTMLInputElement>) => void`",
    },
    required: {
      control: "boolean",
      table: { type: { summary: "bool" }, defaultValue: { summary: "false" } },
      description: "If true, the input element is required.",
    },
    checked: {
      table: {
        type: { summary: "bool" },
        defaultValue: { summary: "false" },
      },
      description: "If true, the component is checked.",
    },
    defaultChecked: {
      control: "boolean",
      table: { type: { summary: "bool" }, defaultValue: { summary: "false" } },
      description:
        "The default checked state. Use when the component is not controlled.",
    },
  },
  parameters: {
    controls: {
      expanded: true,
      include: [
        "disabled",
        "indeterminate",
        "onChange",
        "required",
        "checked",
        "defaultChecked",
      ],
    },
    docs: {
      description: {
        component:
          "This component base is Material UI Checkbox component. [Props of the Material UI Checkbox component](material-u) are also available.",
      },
    },
  },
} as Meta<typeof Checkbox>;

const BasicCheckboxTemplate: StoryFn<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(Boolean(args.checked));
  }, [args.checked]);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(event) => {
        args.onChange && args.onChange(event, checked);
        setChecked((prev) => !prev);
      }}
    />
  );
};

export const BasicCheckbox = {
  render: BasicCheckboxTemplate,
};

const LabelTemplate: StoryFn<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(Boolean(args.checked));
  }, [args.checked]);

  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            {...args}
            defaultChecked
            checked={checked}
            onChange={(event) => {
              args.onChange && args.onChange(event, checked);
              setChecked((prev) => !prev);
            }}
          />
        }
        label="Label"
      />
    </Box>
  );
};

export const Label = {
  render: LabelTemplate,
  parameters: {
    docs: {
      description: {
        story: "You can use the `FormControlLabel` component to provide label.",
      },
    },
  },
};

const IndeterminateTemplate: StoryFn<typeof Checkbox> = (args) => {
  const [checked, setChecked] = React.useState([true, false]);
  const { disabled } = args;

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormLabel
        label="Child 1"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  return (
    <Box>
      <FormLabel
        label="Parent"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
            disabled={disabled}
          />
        }
      />
      {children}
    </Box>
  );
};

export const Indeterminate = {
  render: IndeterminateTemplate,
  parameters: {
    docs: {
      description: {
        story: "You can use the `FormControlLabel` component to provide label.",
      },
    },
  },
};

const DisabledTemplate: StoryFn<typeof Checkbox> = (args) => {
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <Checkbox {...args} disabled checked />
      <Checkbox {...args} indeterminate disabled />
      <Checkbox {...args} disabled />
    </Box>
  );
};

export const Disabled = {
  render: DisabledTemplate,
  parameters: {
    docs: {
      description: {
        story: "You can use the `FormControlLabel` component to provide label.",
      },
    },
  },
};

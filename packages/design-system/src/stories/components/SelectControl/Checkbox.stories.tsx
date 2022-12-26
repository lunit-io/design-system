import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import { Checkbox } from "@/components/SelectControl/Checkbox";
import FormLabel from "@/components/SelectControl/FormLabel/FormLabel";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
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
    value: {
      control: "text",
      table: { type: { summary: "any" } },
      description:
        "The value of the component. The DOM API casts this to a string.",
    },
    defaultChecked: {
      control: "boolean",
      table: { type: { summary: "bool" }, defaultValue: { summary: "false" } },
      description:
        "The default checked state. Use when the component is not controlled.",
    },
  },
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
  },
  parameters: {
    controls: {
      expanded: true,
      include: [
        "disabled",
        "indeterminate",
        "onChange",
        "value",
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
  decorators: [
    /**
     * TODO
     * Since Color Token system will be changed, below className should be changed accordingly
     * Also, the hover color will be set again with the color token system completion
     */
    (Story) => <Box className="base90">{Story()}</Box>,
  ],
} as ComponentMeta<typeof Checkbox>;

const BasicCheckboxTemplate: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(Boolean(args.checked));
  }, [args.checked]);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

export const BasicCheckbox = BasicCheckboxTemplate.bind({});

const LabelTemplate: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <FormLabel
      label="with label"
      control={
        <Checkbox
          {...args}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      }
    />
  );
};

export const Label = LabelTemplate.bind({});

const StatusTemplate: ComponentStory<typeof Checkbox> = (args) => (
  <Table sx={{ width: 650 }}>
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell>Enabled</TableCell>
        <TableCell>Focuse</TableCell>
        <TableCell>Disabled</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>On</TableCell>
        <TableCell>
          <Checkbox {...args} checked />
        </TableCell>
        <TableCell>
          <Checkbox {...args} checked className="Mui-focusVisible" />
        </TableCell>
        <TableCell>
          <Checkbox {...args} checked disabled />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Off</TableCell>
        <TableCell>
          <Checkbox {...args} />
        </TableCell>
        <TableCell>
          <Checkbox {...args} className="Mui-focusVisible" />
        </TableCell>
        <TableCell>
          <Checkbox {...args} disabled />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Indeterminate</TableCell>
        <TableCell>
          <Checkbox {...args} checked indeterminate />
        </TableCell>
        <TableCell>
          <Checkbox
            {...args}
            checked
            indeterminate
            className="Mui-focusVisible"
          />
        </TableCell>
        <TableCell>
          <Checkbox {...args} checked indeterminate disabled />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const Status = StatusTemplate.bind({});

const IndeterminateTemplate: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = React.useState([true, false]);

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
    <div>
      <FormLabel
        label="Parent"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
};

export const Indeterminate = IndeterminateTemplate.bind({});

Indeterminate.argTypes = {
  disabled: {
    control: false,
  },
  checked: {
    control: false,
  },
  indeterminate: {
    control: false,
  },
};

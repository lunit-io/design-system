import React from "react";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import { Radio } from "@/components/SelectControl/Radio";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    disabled: {
      control: "boolean",
      table: { type: { summary: "bool" }, defaultValue: { summary: "false" } },
      description: "If true, the component is disabled.",
    },
    checked: {
      control: "boolean",
      table: { type: { summary: "bool" }, defaultValue: { summary: "false" } },
      description: "If true, the component is checked.",
    },
    onChange: {
      table: { type: { summary: "func" } },
      description:
        "Callback fired when the state is changed. Signature: `function(event: React.ChangeEvent<HTMLInputElement>) => void`",
    },
  },
  args: {
    disabled: false,
    checked: false,
  },
  parameters: {
    controls: {
      expanded: true,
      include: ["checked", "disabled", "onChange"],
    },
  },
  decorators: [
    /**
     * TODO
     * Since Color Token system will be changed, below className should be changed accordingly
     * Also, the hover color will be set again with the color token system completion
     */
    (Story) => (
      <Box className="base90" sx={{ display: "flex", alignItems: "center" }}>
        {Story()}
      </Box>
    ),
  ],
  docs: {
    description: {
      component: "This component base is Material UI Radio component.",
    },
  },
} as ComponentMeta<typeof Radio>;

const RadioTemplate: ComponentStory<typeof Radio> = (args) => {
  return (
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
            <Radio {...args} checked />
          </TableCell>
          <TableCell>
            <Radio {...args} checked className="Mui-focusVisible" />
          </TableCell>
          <TableCell>
            <Radio {...args} checked disabled />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Off</TableCell>
          <TableCell>
            <Radio {...args} />
          </TableCell>
          <TableCell>
            <Radio {...args} className="Mui-focusVisible" />
          </TableCell>
          <TableCell>
            <Radio {...args} disabled />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const Radio_ = RadioTemplate.bind({});

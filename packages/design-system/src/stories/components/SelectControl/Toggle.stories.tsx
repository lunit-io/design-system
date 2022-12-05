import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Toggle from "@/components/SelectControl/Toggle/Toggle";
import { Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import ToggleFormLabel from "@/components/SelectControl/ToggleFormLabel/ToggleFormLabel";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    checked: {
      control: {
        type: 'select',
      },
      options: [true, false, undefined],
      description: "If `true`, the component is checked. Indeterminate state doesn't supported `checked` prop.",
    },
    onChange: {
      control: {
        type: "select",
      },
      options: ["function", undefined],
      mapping: {
        function: action("onClick"),
        undefined: undefined,
      },
      description: '(() => void)'
    },
  },
  args: {
    size: "medium",
    indeterminate: false,
  },
  parameters: {
    controls: { include: ["checked", 'size', 'indeterminate', "onChange"] },
    pseudo: {
      focusWithin: [".focus-test"],
    },
    docs: {
      description: {
        component: `Switches toggle the state of a single setting on or off.
        see [Material-UI Switch](https://mui.com/material-ui/react-switch/).
        \nIn order to use Button, [checked] value have to be undefined`,
      },
    },
  },
  decorators: [
    /**
     * TODO
     * Since Color Token system will be changed, below className should be changed accordingly
     * Also, the hover color will be set again with the color token system completion
     */
    (Story) => (
      <Table className="base90" >
        {Story()}
      </Table>
    ),
  ],

} as ComponentMeta<typeof Toggle>;

const BaseTemplate: ComponentStory<typeof Toggle> = (args) => <>
  <TableHead>
    <TableRow>
      <TableCell>DEFAULT</TableCell>
      <TableCell>FOCUS</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell><Toggle {...args} /></TableCell>
      <TableCell><Toggle className="focus-test" {...args} /></TableCell>
    </TableRow>
  </TableBody>
</>;

const Template: ComponentStory<typeof Toggle> = (args) => <>
  <TableHead>
    <TableRow>
      <TableCell></TableCell>
      <TableCell>ON</TableCell>
      <TableCell>Indeterminate</TableCell>
      <TableCell>OFF</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>MEDIUM DEFAULT</TableCell>
      <TableCell><Toggle {...args} checked/></TableCell>
      <TableCell><Toggle {...args} indeterminate /></TableCell>
      <TableCell><Toggle {...args} /></TableCell>
    </TableRow>
    <TableRow>
      <TableCell>MEDIUM FOCUS</TableCell>
      <TableCell><Toggle {...args} className="focus-test" checked/></TableCell>
      <TableCell><Toggle {...args} className="focus-test" indeterminate /></TableCell>
      <TableCell><Toggle {...args} className="focus-test" /></TableCell>
    </TableRow>
    <TableRow>
      <TableCell>LARGE DEFAULT</TableCell>
      <TableCell><Toggle {...args} size="large" checked/></TableCell>
      <TableCell><Toggle {...args} size="large" indeterminate /></TableCell>
      <TableCell><Toggle {...args} size="large" /></TableCell>
    </TableRow>
    <TableRow>
      <TableCell>LARGE FOCUS</TableCell>
      <TableCell><Toggle {...args} size="large" className="focus-test" checked/></TableCell>
      <TableCell><Toggle {...args} size="large" className="focus-test" indeterminate /></TableCell>
      <TableCell><Toggle {...args} size="large" className="focus-test"/></TableCell>
    </TableRow>
  </TableBody>
</>;

const DisabledTemplate: ComponentStory<typeof Toggle> = (args) => <>
  <TableHead>
    <TableRow>
      <TableCell></TableCell>
      <TableCell>ON</TableCell>
      <TableCell>Indeterminate</TableCell>
      <TableCell>OFF</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>MEDIUM DEFAULT</TableCell>
      <TableCell><Toggle {...args} checked/></TableCell>
      <TableCell><Toggle {...args} indeterminate /></TableCell>
      <TableCell><Toggle {...args} /></TableCell>
    </TableRow>
    <TableRow>
      <TableCell>LARGE DEFAULT</TableCell>
      <TableCell><Toggle {...args} size="large" checked/></TableCell>
      <TableCell><Toggle {...args} size="large" indeterminate /></TableCell>
      <TableCell><Toggle {...args} size="large" /></TableCell>
    </TableRow>
  </TableBody>
</>;

const TemplateWithLabel: ComponentStory<typeof Toggle> = (args) => <>
  <TableHead>
    <TableRow>
      <TableCell></TableCell>
      <TableCell>ON</TableCell>
      <TableCell>Indeterminate</TableCell>
      <TableCell>OFF</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>MEDIUM DEFAULT</TableCell>
      <TableCell><ToggleFormLabel label="Label 1" control={<Toggle {...args} checked />}/></TableCell>
      <TableCell><ToggleFormLabel label={<input placeholder="Label 2"/>} control={<Toggle {...args} indeterminate />}/></TableCell>
      <TableCell><ToggleFormLabel label={<TextField placeholder="Label 3"/>} control={<Toggle {...args} />}/></TableCell>
    </TableRow>
    <TableRow>
      <TableCell>MEDIUM FOCUS</TableCell>
      <TableCell><ToggleFormLabel className="focus-test" label="Label 1" control={<Toggle {...args} checked />}/></TableCell>
      <TableCell><ToggleFormLabel className="focus-test" label={<input placeholder="Label 2"/>} control={<Toggle {...args} indeterminate />}/></TableCell>
      <TableCell><ToggleFormLabel className="focus-test" label={<TextField placeholder="Label 3"/>} control={<Toggle {...args} />}/></TableCell>
    </TableRow>
    <TableRow>
      <TableCell>LARGE DEFAULT</TableCell>
      <TableCell><ToggleFormLabel label="Label 1" control={<Toggle {...args} size="large" checked />}/></TableCell>
      <TableCell><ToggleFormLabel label={<input placeholder="Label 2"/>} control={<Toggle {...args} size="large" indeterminate />}/></TableCell>
      <TableCell><ToggleFormLabel label={<TextField placeholder="Label 3"/>} control={<Toggle {...args} size="large" />}/></TableCell>
    </TableRow>
    <TableRow>
      <TableCell>LARGE FOCUS</TableCell>
      <TableCell><ToggleFormLabel className="focus-test" label="Label 1" control={<Toggle {...args} size="large" checked />}/></TableCell>
      <TableCell><ToggleFormLabel className="focus-test" label={<input placeholder="Label 2"/>} control={<Toggle {...args} size="large" indeterminate />}/></TableCell>
      <TableCell><ToggleFormLabel className="focus-test" label={<TextField placeholder="Label 3"/>} control={<Toggle {...args} size="large" />}/></TableCell>
    </TableRow>
  </TableBody>
</>;

export const ToggleBase = BaseTemplate.bind({});
export const ToggleEnabled = Template.bind({});
export const ToggleDisabled = DisabledTemplate.bind({});
ToggleDisabled.args = {
  disabled: true,
}

export const ToggleWithLabel = TemplateWithLabel.bind({});

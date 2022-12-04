import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Toggle from "@/components/SelectControl/Toggle/Toggle";
import { Box, TextField } from "@mui/material";
import ToggleFormLabel from "@/components/SelectControl/ToggleFormLabel/ToggleFormLabel";

export default {
  title: "Components/Toggle",
  component: Toggle,
  args: {
    size: "medium",
    indeterminate: false,
  },
  parameters: {
    controls: { include: ['size', 'indeterminate'] },
    pseudo: {
      focusWithin: [".focus-test"],
    },
    docs: {
      description: {
        component: `Switches toggle the state of a single setting on or off.
        see [Material-UI Switch](https://mui.com/material-ui/react-switch/)`,
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
      <Box className="base90" sx={{ margin: "3em", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" ,gap: 15}}>
        {Story()}
      </Box>
    ),
  ],

} as ComponentMeta<typeof Toggle>;

const BaseTemplate: ComponentStory<typeof Toggle> = (args) => <><Toggle {...args} /><Toggle className="focus-test" {...args} /></>;
const Template: ComponentStory<typeof Toggle> = (args) => <>
  <p></p>
  <p>ON</p>
  <p>Indeterminate</p>
  <p>OFF</p>
  <div>MEDIUM DEFAULT</div>
  <Toggle {...args} checked/>
  <Toggle {...args} indeterminate />
  <Toggle {...args} />
  <div>MEDIUM FOCUS</div>
  <Toggle {...args} className="focus-test" checked/>
  <Toggle {...args} className="focus-test" indeterminate />
  <Toggle {...args} className="focus-test" />
  <div>LARGE DEFAULT</div>
  <Toggle {...args} size="large" checked/>
  <Toggle {...args} size="large" indeterminate />
  <Toggle {...args} size="large" />
  <div>LARGE FOCUS</div>
  <Toggle {...args} size="large" className="focus-test" checked/>
  <Toggle {...args} size="large" className="focus-test" indeterminate />
  <Toggle {...args} size="large" className="focus-test"/>
</>;

const DisabledTemplate: ComponentStory<typeof Toggle> = (args) => <>
  <p></p>
  <p>ON</p>
  <p>Indeterminate</p>
  <p>OFF</p>
  <div>MEDIUM DEFAULT</div>
  <Toggle {...args} checked/>
  <Toggle {...args} indeterminate />
  <Toggle {...args} />
  <div>LARGE DEFAULT</div>
  <Toggle {...args} size="large" checked/>
  <Toggle {...args} size="large" indeterminate />
  <Toggle {...args} size="large" />
</>;

const TemplateWithLabel: ComponentStory<typeof Toggle> = (args) => <>
<p></p>
<p>ON</p>
<p>Indeterminate</p>
<p>OFF</p>
<div>MEDIUM DEFAULT</div>
<ToggleFormLabel label="Label 1" control={<Toggle {...args} checked />}/>
<ToggleFormLabel label={<input placeholder="Label 2"/>} control={<Toggle {...args} indeterminate />}/>
<ToggleFormLabel label={<TextField placeholder="Label 3"/>} control={<Toggle {...args} />}/>
<div>MEDIUM FOCUS</div>
<ToggleFormLabel className="focus-test" label="Label 1" control={<Toggle {...args} checked />}/>
<ToggleFormLabel className="focus-test" label={<input placeholder="Label 2"/>} control={<Toggle {...args} indeterminate />}/>
<ToggleFormLabel className="focus-test" label={<TextField placeholder="Label 3"/>} control={<Toggle {...args} />}/>
<div>LARGE DEFAULT</div>
<ToggleFormLabel label="Label 1" control={<Toggle {...args} size="large" checked />}/>
<ToggleFormLabel label={<input placeholder="Label 2"/>} control={<Toggle {...args} size="large" indeterminate />}/>
<ToggleFormLabel label={<TextField placeholder="Label 3"/>} control={<Toggle {...args} size="large" />}/>
<div>LARGE FOCUS</div>
<ToggleFormLabel className="focus-test" label="Label 1" control={<Toggle {...args} size="large" checked />}/>
<ToggleFormLabel className="focus-test" label={<input placeholder="Label 2"/>} control={<Toggle {...args} size="large" indeterminate />}/>
<ToggleFormLabel className="focus-test" label={<TextField placeholder="Label 3"/>} control={<Toggle {...args} size="large" />}/>
</>;

export const ToggleBase = BaseTemplate.bind({});
export const ToggleEnabled = Template.bind({});
export const ToggleDisabled = DisabledTemplate.bind({});
ToggleDisabled.args = {
  disabled: true,
}

export const ToggleWithLabel = TemplateWithLabel.bind({});

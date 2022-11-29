import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Toggle from "@/components/SelectControl/Toggle/Toggle";
import { Box } from "@mui/material";
export default {
  title: "Components/Toggle",
  component: Toggle,
  decorators: [
    /**
     * TODO
     * Since Color Token system will be changed, below className should be changed accordingly
     * Also, the hover color will be set again with the color token system completion
     */
    (Story) => (
      <Box className="base90" sx={{ margin: "3em", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" ,gap: 14}}>
        {Story()}
      </Box>
    ),
  ],

} as ComponentMeta<typeof Toggle>;

const DefaultTemplate: ComponentStory<typeof Toggle> = (args) => <><Toggle {...args} /><Toggle className="focus-test" {...args} /></>;
const Template: ComponentStory<typeof Toggle> = (args) => <>
  <p></p>
  <p>ON</p>
  <p>Indeterminate</p>
  <p>OFF</p>
  <p></p>
  <Toggle {...args} checked/>
  <Toggle {...args} indeterminate />
  <Toggle {...args} />
  <div>FOCUS</div>
  <Toggle {...args} className="focus-test" checked/>
  <Toggle {...args} className="focus-test" indeterminate />
  <Toggle {...args} className="focus-test" />
</>;

export const ToggleBase = DefaultTemplate.bind({});
ToggleBase.parameters = {
  pseudo: {
    focus: [".focus-test"],
  },
}
export const ToggleEnabled = Template.bind({});
ToggleEnabled.parameters = {
  pseudo: {
    focus: [".focus-test"],
  },
}
export const ToggleDisabled = Template.bind({});
ToggleDisabled.parameters = {
  pseudo: {
    focus: [".focus-test"],
  },
}
ToggleDisabled.args = {
  disabled: true,
}
export const ToggleEnabledLarge = Template.bind({});
ToggleEnabledLarge.parameters = {
  pseudo: {
    focus: [".focus-test"],
  },
}
ToggleEnabledLarge.args = {
  size: "large",
}
export const ToggleDisabledLarge = Template.bind({});
ToggleDisabledLarge.parameters = {
  pseudo: {
    focus: [".focus-test"],
  },
}
ToggleDisabledLarge.args = {
  size: "large",
  disabled: true,
}

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
  argTypes: {
    label: {

    }
    // size: {
    //   control: 'select',
    //   options: ['medium', 'large', undefined],
    //   defaultValue: { summary: 'medium'},
    //   description: 'The size of the toggle component.',
    // },
    // indeterminate: {
    //   control: "boolean",
    //   description: "If `true`, the component has consistent 'checked' value and change shape.",
    //   defaultValue: { summary: 'false'},
    // },
  },
  parameters: {
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
  <div>DEFAULT</div>
  <Toggle {...args} checked/>
  <Toggle {...args} indeterminate />
  <Toggle {...args} />
  <div>FOCUS</div>
  <Toggle {...args} className="focus-test" checked/>
  <Toggle {...args} className="focus-test" indeterminate />
  <Toggle {...args} className="focus-test" />
</>;
const TemplateWithLabel: ComponentStory<typeof Toggle> = (args) => <>
<p></p>
<p>ON</p>
<p>Indeterminate</p>
<p>OFF</p>
<div>DEFAULT</div>
<ToggleFormLabel label="Label 1" control={<Toggle {...args} checked />}/>
<ToggleFormLabel label={<input placeholder="Label 2"/>} control={<Toggle {...args} indeterminate />}/>
<ToggleFormLabel label={<TextField placeholder="Label 3"/>} control={<Toggle {...args} />}/>
<div>FOCUS</div>
<ToggleFormLabel className="focus-test" label="Label 1" control={<Toggle {...args} checked />}/>
<ToggleFormLabel className="focus-test" label={<input placeholder="Label 2"/>} control={<Toggle {...args} indeterminate />}/>
<ToggleFormLabel className="focus-test" label={<TextField placeholder="Label 3"/>} control={<Toggle {...args} />}/>
</>;

export const ToggleBase = BaseTemplate.bind({});
export const ToggleEnabled = Template.bind({});
ToggleEnabled.parameters = {
  docs: {
    description: {
      story: `Medium size toggle`,
    },
  },
};
export const ToggleDisabled = Template.bind({});
ToggleDisabled.parameters = {
  docs: {
    description: {
      story: `Medium size toggle but disabled`,
    },
  },
};
ToggleDisabled.args = {
  disabled: true,
}
export const ToggleEnabledLarge = Template.bind({});
ToggleEnabledLarge.args = {
  size: "large",
}
ToggleEnabledLarge.parameters = {
  docs: {
    description: {
      story: `Large size toggle`,
    },
  },
};
export const ToggleDisabledLarge = Template.bind({});
ToggleDisabledLarge.parameters = {
  docs: {
    description: {
      story: `Large size toggle but disabled`,
    },
  },
};
ToggleDisabledLarge.args = {
  size: "large",
  disabled: true,
}
export const ToggleWithLabel = TemplateWithLabel.bind({});
ToggleWithLabel.parameters = {
  docs: {
    description: {
      story: `Toggle with label`,
    },
  },
};

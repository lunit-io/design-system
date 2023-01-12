import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Radio, RadioGroup } from "@/components/SelectControl/Radio";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormLabel } from "@/components/SelectControl/FormLabel";

export default {
  title: "Components/Radio",
  component: RadioGroup,
  argTypes: {
    value: {
      control: {
        type: "select",
      },
      table: { type: { summary: "any" } },
      options: ["First", "Second"],
      description:
        "Value of the selected radio button. The DOM API casts this to a string.",
    },
    onChange: {
      table: { type: { summary: "func" } },
      description:
        "Callback fired when the state is changed. Signature: `function(event: React.ChangeEvent<HTMLInputElement>) => void`",
    },
  },
  parameters: {
    controls: {
      expanded: true,
      include: ["value", "onChange"],
    },
  },
  docs: {
    description: {
      component: "This component is identical to the MUI RadioGroup component.",
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
} as ComponentMeta<typeof RadioGroup>;

const RadioGroupTemplate: ComponentStory<typeof RadioGroup> = (args) => {
  const [value, setValue] = React.useState("First");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    if (args.value) setValue(args.value);
  }, [args.value]);

  return (
    <RadioGroup
      name="controlled-radio-buttons-group"
      value={value}
      onChange={handleChange}
    >
      <FormLabel value="First" control={<Radio />} label="First" />
      <FormLabel value="Second" control={<Radio />} label="Second" />
      <FormLabel
        value="(Disabled option)"
        control={<Radio disabled />}
        label="(Disabled option)"
      />
    </RadioGroup>
  );
};

export const ControlledRadioGroup = RadioGroupTemplate.bind({});

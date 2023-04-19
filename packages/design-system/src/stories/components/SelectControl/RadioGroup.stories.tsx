import React, { useEffect } from "react";
import Radio from "@/components/Radio";
import RadioGroup from "@/components/RadioGroup";
import FormLabel from "@/components/FormLabel";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Radio",
  component: RadioGroup,
  argTypes: {
    value: {
      control: {
        type: "select",
      },
      table: { type: { summary: "any" } },
      options: ["On", "Off"],
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
} as Meta<typeof RadioGroup>;

const RadioGroupTemplate: StoryFn<typeof RadioGroup> = (args) => {
  const [value, setValue] = React.useState("On");
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
      <FormLabel value="On" control={<Radio />} label="On" />
      <FormLabel value="Off" control={<Radio />} label="Off" />
      <FormLabel
        value="(Disabled option)"
        control={<Radio disabled />}
        label="(Disabled option)"
      />
    </RadioGroup>
  );
};

export const ControlledRadioGroup = {
  render: RadioGroupTemplate,
};

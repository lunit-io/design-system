import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@mui/material";

const Colors = () => {
  return (
    <Box
      sx={{
        width: "100px",
        height: "100px",
        backgroundColor: "var(--lunitTeal-40)",
      }}
    >
      lunitTeal
    </Box>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  title: "Foundation/Colors",
  component: Colors,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Colors>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Colors> = () => <Colors />;

export const Main = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
  primary: true,
  label: "Hello World",
};

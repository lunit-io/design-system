import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Paper, Typography } from "@mui/material";

const ElevationComponent = () => {
  return (
    <>
      <Paper elevation={1} sx={{ mb: 2 }}>
        Elevation 1
      </Paper>
      <Paper elevation={3}>Elevation 2</Paper>
      <Typography variant="h2">테스트 test 1234567890</Typography>
    </>
  );
};

export default {
  title: "Foundation/Elevation",
  component: ElevationComponent,
} as ComponentMeta<typeof ElevationComponent>;

// export const Elevation: ComponentStory<typeof ElevationComponent> = () => (
//   <ElevationComponent />
// );

const Template: ComponentStory<typeof ElevationComponent> = () => (
  <ElevationComponent />
);

export const Elevation = Template.bind({});

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Paper } from "@mui/material";

const ElevationComponent = () => {
  return (
    <>
      <Paper elevation={1} sx={{ mb: 2 }}>
        Elevation 1
      </Paper>
      <Paper elevation={3}>Elevation 2</Paper>
    </>
  );
};

export default {
  title: "Foundation/Elevation",
  component: ElevationComponent,
} as ComponentMeta<typeof ElevationComponent>;

export const Elevation: ComponentStory<typeof ElevationComponent> = () => (
  <ElevationComponent />
);

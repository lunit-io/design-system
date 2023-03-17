import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Pagination from "@mui/material/Pagination";

export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  title: "Foundation/Colors/Mui",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const MuiPagenation: ComponentStory<typeof Pagination> = () => (
  <Pagination count={10} color="primary" />
);

import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Pagination from "@mui/material/Pagination";

export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  title: "Foundation/Colors/Mui",
  component: Pagination,
} as Meta<typeof Pagination>;

export const MuiPagenation: StoryFn<typeof Pagination> = () => (
  <Pagination count={10} color="primary" />
);

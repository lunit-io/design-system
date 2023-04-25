import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import DataTable from "@/components/DataTable";

export default {
  title: "Components/DataTable",
  component: DataTable,
} as Meta<typeof DataTable>;

const Template: StoryFn<typeof DataTable> = () => <DataTable />;

export const LunitDataTable = {
  render: Template,
};

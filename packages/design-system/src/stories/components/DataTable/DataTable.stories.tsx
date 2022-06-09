import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DataTable from "@/components/DataTable/DataTable";

export default {
  title: "Components/DataTable",
  component: DataTable,
} as ComponentMeta<typeof DataTable>;

const Template: ComponentStory<typeof DataTable> = () => <DataTable />;

export const LunitDataTable = Template.bind({});

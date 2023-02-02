import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Search } from "@/components/Search";

export default {
  title: "Components/Search",
  component: Search,
  argTypes: {
    size: {
      control: false,
      options: ["small", "medium", "large"],
      defaultValue: "small",
      description: "The size of the text field.",
      table: {
        defaultValue: { summary: "small" },
        type: { summary: ["small", "medium", "large"] },
      },
    },
    error: {
      type: "boolean",
      defaultValue: false,
      description: "If true, the search will be displayed in an error state.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    placeholder: {
      type: "string",
      defaultValue: "Please typing...",
      description: "The placeholder content.",
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "string" },
      },
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
      description: "If true, the search will be disabled.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
  parameters: {
    controls: {
      include: ["size", "error", "placeholder", "disabled"],
    },
    docs: {
      description: {
        component:
          "It is a search component that allows users to enter and edit text.",
      },
    },
  },
  decorators: [
    (Story) => (
      <Box className="base00" sx={{ margin: "3em" }}>
        {Story()}
      </Box>
    ),
  ],
} as ComponentMeta<typeof Search>;

const SearchSizeTemplate: ComponentStory<typeof Search> = (args) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Small</TableCell>
        <TableCell>Medium</TableCell>
        <TableCell>Large</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          <Search {...args} />
        </TableCell>
        <TableCell>
          <Search {...args} size="medium" />
        </TableCell>
        <TableCell>
          <Search {...args} size="large" />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const SearchWithSize = SearchSizeTemplate.bind({});
SearchWithSize.argTypes = {
  size: {
    control: {
      type: "radio",
    },
    options: ["small", "medium", "large"],
    defaultValue: "small",
    description: "The size of the text field.",
    table: {
      defaultValue: { summary: "small" },
      type: { summary: ["small", "medium", "large"] },
    },
  },
};
SearchWithSize.storyName = "Size";

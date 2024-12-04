import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  Scrollbars,
  Orientation,
  Size,
  Theme,
} from "@/components/Scrollbars/Scrollbars";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  title: "Components/Scrollbars",
  component: Scrollbars,
} as ComponentMeta<typeof Scrollbars>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Scrollbars> = (args) => (
  <Scrollbars {...args} />
);

export const Vertical_Large_Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Vertical_Large_Light.args = {
  orientation: Orientation.VERTICAL,
  theme: Theme.LIGHT,
  size: Size.LARGE,
  hidden: false,
};
export const Vertical_Large_Light_Hidden = Template.bind({});
Vertical_Large_Light_Hidden.args = {
  orientation: Orientation.VERTICAL,
  theme: Theme.LIGHT,
  size: Size.LARGE,
  hidden: true,
};

export const Horizontal_Large_Light = Template.bind({});
Horizontal_Large_Light.args = {
  orientation: Orientation.HORIZONTAL,
  theme: Theme.LIGHT,
  size: Size.LARGE,
  hidden: false,
};
export const Horizontal_Large_Light_Hidden = Template.bind({});
Horizontal_Large_Light_Hidden.args = {
  orientation: Orientation.HORIZONTAL,
  theme: Theme.LIGHT,
  size: Size.LARGE,
  hidden: true,
};

export const Both_Large_Light = Template.bind({});
Both_Large_Light.args = {
  orientation: Orientation.BOTH,
  theme: Theme.LIGHT,
  size: Size.LARGE,
  hidden: false,
};
export const Both_Large_Light_Hidden = Template.bind({});
Both_Large_Light_Hidden.args = {
  orientation: Orientation.BOTH,
  theme: Theme.LIGHT,
  size: Size.LARGE,
  hidden: true,
};

export const Vertical_Small_Light = Template.bind({});
Vertical_Small_Light.args = {
  orientation: Orientation.VERTICAL,
  theme: Theme.LIGHT,
  size: Size.SMALL,
  hidden: false,
};
export const Vertical_Small_Light_Hidden = Template.bind({});
Vertical_Small_Light_Hidden.args = {
  orientation: Orientation.VERTICAL,
  theme: Theme.LIGHT,
  size: Size.SMALL,
  hidden: true,
};

export const Horizontal_Small_Light = Template.bind({});
Horizontal_Small_Light.args = {
  orientation: Orientation.HORIZONTAL,
  theme: Theme.LIGHT,
  size: Size.SMALL,
  hidden: false,
};
export const Horizontal_Small_Light_Hidden = Template.bind({});
Horizontal_Small_Light_Hidden.args = {
  orientation: Orientation.HORIZONTAL,
  theme: Theme.LIGHT,
  size: Size.SMALL,
  hidden: true,
};

export const Both_Small_Light = Template.bind({});
Both_Small_Light.args = {
  orientation: Orientation.BOTH,
  theme: Theme.LIGHT,
  size: Size.SMALL,
  hidden: false,
};
export const Both_Small_Light_Hidden = Template.bind({});
Both_Small_Light_Hidden.args = {
  orientation: Orientation.BOTH,
  theme: Theme.LIGHT,
  size: Size.SMALL,
  hidden: true,
};

export const Vertical_Large_Dark = Template.bind({});
Vertical_Large_Dark.args = {
  orientation: Orientation.VERTICAL,
  theme: Theme.DARK,
  size: Size.LARGE,
  hidden: false,
};
export const Vertical_Large_Dark_Hidden = Template.bind({});
Vertical_Large_Dark_Hidden.args = {
  orientation: Orientation.VERTICAL,
  theme: Theme.DARK,
  size: Size.LARGE,
  hidden: true,
};

export const Horizontal_Large_Dark = Template.bind({});
Horizontal_Large_Dark.args = {
  orientation: Orientation.HORIZONTAL,
  theme: Theme.DARK,
  size: Size.LARGE,
  hidden: false,
};
export const Horizontal_Large_Dark_Hidden = Template.bind({});
Horizontal_Large_Dark_Hidden.args = {
  orientation: Orientation.HORIZONTAL,
  theme: Theme.DARK,
  size: Size.LARGE,
  hidden: true,
};

export const Both_Large_Dark = Template.bind({});
Both_Large_Dark.args = {
  orientation: Orientation.BOTH,
  theme: Theme.DARK,
  size: Size.LARGE,
  hidden: false,
};
export const Both_Large_Dark_Hidden = Template.bind({});
Both_Large_Dark_Hidden.args = {
  orientation: Orientation.BOTH,
  theme: Theme.DARK,
  size: Size.LARGE,
  hidden: true,
};

export const Vertical_Small_Dark = Template.bind({});
Vertical_Small_Dark.args = {
  orientation: Orientation.VERTICAL,
  theme: Theme.DARK,
  size: Size.SMALL,
  hidden: false,
};
export const Vertical_Small_Dark_Hidden = Template.bind({});
Vertical_Small_Dark_Hidden.args = {
  orientation: Orientation.VERTICAL,
  theme: Theme.DARK,
  size: Size.SMALL,
  hidden: true,
};

export const Horizontal_Small_Dark = Template.bind({});
Horizontal_Small_Dark.args = {
  orientation: Orientation.HORIZONTAL,
  theme: Theme.DARK,
  size: Size.SMALL,
  hidden: false,
};
export const Horizontal_Small_Dark_Hidden = Template.bind({});
Horizontal_Small_Dark_Hidden.args = {
  orientation: Orientation.HORIZONTAL,
  theme: Theme.DARK,
  size: Size.SMALL,
  hidden: true,
};

export const Both_Small_Dark = Template.bind({});
Both_Small_Dark.args = {
  orientation: Orientation.BOTH,
  theme: Theme.DARK,
  size: Size.SMALL,
  hidden: false,
};
export const Both_Small_Dark_Hidden = Template.bind({});
Both_Small_Dark_Hidden.args = {
  orientation: Orientation.BOTH,
  theme: Theme.DARK,
  size: Size.SMALL,
  hidden: true,
};

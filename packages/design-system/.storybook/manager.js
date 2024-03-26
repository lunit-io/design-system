import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";
import Logo from "./assets/logo.svg";

const theme = create({
  base: "light",
  brandTitle: "Lunit Design System Library",
  brandUrl: "https://www.lunit.io",
  brandImage: Logo,
});

addons.setConfig({
  theme,
});

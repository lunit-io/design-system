import CssBaseline from "@mui/material/CssBaseline";

export const decorators = [
  (Story) => (
    <>
      <CssBaseline />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

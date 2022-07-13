// import { ThemeProvider, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";

export const decorators = [
  (Story) => {
    console.log("mui theme : ", theme);
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // controls: {
  //   matchers: {
  //     color: /(background|color)$/i,
  //     date: /Date$/,
  //   },
  // },
  options: {
    storySort: {
      order: ["Getting Started", "Foundation", "Components"],
    },
  },
};

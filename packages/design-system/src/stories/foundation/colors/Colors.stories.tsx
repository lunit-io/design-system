import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Typography, useTheme } from "@mui/material";
import { Color, ColorContainer, Container, PaletteContainer } from "./styled";
import map from "lodash/map";
import lowerCase from "lodash/lowerCase";
import capitalize from "lodash/capitalize";
import { BaseColor, GreyColor } from "@/foundation/colors";

const convertColorPaletteKeyToDisplay = (key: string): string =>
  lowerCase(key)
    .split(" ")
    .map((str) => capitalize(str))
    .join(" ");

const BaseColors = () => {
  const theme = useTheme();
  return (
    <Container>
      {map(
        theme.palette.lunit_global,
        (colors: BaseColor | GreyColor, paletteKey: string) => (
          <div key={paletteKey}>
            <Typography
              variant="h4"
              sx={{
                marginBottom: 11,
                "&:not(:first-of-type)": { marginTop: 11 },
              }}
            >
              {convertColorPaletteKeyToDisplay(paletteKey)}
            </Typography>
            <PaletteContainer>
              {map(colors, (_: string, colorKey: string) => (
                <ColorContainer key={colorKey}>
                  <Color
                    color={`lunit_global.${paletteKey}.${colorKey}.contrastText`}
                    bgcolor={`lunit_global.${paletteKey}.${colorKey}.main`}
                  >
                    <Typography variant="h4">T</Typography>
                  </Color>
                  <Typography variant="body2">{`${paletteKey}_${colorKey}`}</Typography>
                </ColorContainer>
              ))}
            </PaletteContainer>
          </div>
        )
      )}
    </Container>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  title: "Foundation/Colors",
  component: BaseColors,
} as Meta<typeof BaseColors>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const BaseTemplate: StoryFn<typeof BaseColors> = () => <BaseColors />;

export const GlobalColors = {
  render: BaseTemplate,
  name: "Palette: Global Colors",
};

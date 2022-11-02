import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box, Button, Theme, Typography, useTheme } from "@mui/material";
import {
  Color,
  ColorContainer,
  Container,
  PaletteContainer,
  TestButton,
} from "./styled";
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
      <div>
        <Typography
          variant="h4"
          sx={{
            marginBottom: 11,
            "&:not(:first-child)": { marginTop: 11 },
          }}
        >
          컬러 테스트
        </Typography>
        <Box mb={20}>
          <Box
            className="base00"
            width={200}
            height={200}
            bgcolor={`lunit.blue.80.main`}
            display="inline-block"
          >
            <Button
              sx={{
                backgroundColor: (theme) => theme.palette.token.core.bg_03,
                color: (theme) => theme.palette.token.core.text_medium,
              }}
            >
              sx 버튼 테스트
            </Button>
            <TestButton>버튼 테스트</TestButton>
          </Box>
          <Box
            className="base80"
            width={200}
            height={200}
            bgcolor={`lunit.blue.20.main`}
            display="inline-block"
          >
            <Button
              sx={{
                backgroundColor: (theme) => theme.palette.token.core.bg_03,
                color: (theme) => theme.palette.token.core.text_medium,
              }}
              // style={{ backgroundColor: theme.palette.token.core.bg_02 }}
            >
              sx 버튼 테스트
            </Button>
            <TestButton>버튼 테스트</TestButton>
          </Box>
        </Box>
      </div>
      {map(
        theme.palette.lunit,
        (colors: BaseColor | GreyColor, paletteKey: string) => (
          <div key={paletteKey}>
            <Typography
              variant="h4"
              sx={{
                marginBottom: 11,
                "&:not(:first-child)": { marginTop: 11 },
              }}
            >
              {convertColorPaletteKeyToDisplay(paletteKey)}
            </Typography>
            <PaletteContainer>
              {map(colors, (_: string, colorKey: string) => (
                <ColorContainer key={colorKey}>
                  <Color
                    color={`lunit.${paletteKey}.${colorKey}.contrastText`}
                    bgcolor={`lunit.${paletteKey}.${colorKey}.main`}
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
} as ComponentMeta<typeof BaseColors>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const BaseTemplate: ComponentStory<typeof BaseColors> = () => <BaseColors />;

export const Base = BaseTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

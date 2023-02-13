import React, { ReactNode } from "react";
import { ComponentMeta } from "@storybook/react";
import { Box, styled, TextField, Typography, useTheme } from "@mui/material";

export const InComponentWithStyled = () => {
  const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-root": {
      backgroundColor: theme.palette.token.component.textfield_bg,
      color: theme.palette.token.core.text_normal,
      "& .MuiInputBase-input": {
        padding: "8px 16px",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.token.core.focused,
      },
    },
  }));

  return (
    <>
      <BaseBox theme="light">
        <StyledTextField placeholder="Styled Text Field" />
      </BaseBox>
      <BaseBox theme="dark">
        <StyledTextField placeholder="Styled Text Field" />
      </BaseBox>
    </>
  );
};

export default {
  title: "Foundation/Colors/ColorToken",
  component: InComponentWithStyled,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof InComponentWithStyled>;

export const InComponentWithSx = () => {
  return (
    <>
      <BaseBox theme="light">
        <TextField
          placeholder="Text Field with SX"
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: (theme) =>
                theme.palette.token.component.textfield_bg,
              color: (theme) => theme.palette.token.core.text_normal,
              "& .MuiInputBase-input": {
                padding: "8px 16px",
              },
              "&.Mui-focused fieldset": {
                borderColor: (theme) => theme.palette.token.core.focused,
              },
            },
          }}
        />
        <Box width={150} height={50} bgcolor="#DFDFE2" mt={3}>
          Hello!
          <Box
            sx={{
              backgroundColor: (theme) =>
                theme.palette.token.component.alert_info_bg,
              color: (theme) => theme.palette.token.component.alert_info_border,
              boxShadow: (theme) =>
                `20px -10px 5px ${theme.palette.token.core.shadow_01}`,
              width: 300,
              height: 80,
            }}
          >
            - with alpha value
          </Box>
        </Box>
      </BaseBox>
      <BaseBox theme="dark">
        <TextField
          placeholder="Text Field with SX"
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: (theme) =>
                theme.palette.token.component.textfield_bg,
              color: (theme) => theme.palette.token.core.text_normal,
              "& .MuiInputBase-input": {
                padding: "8px 16px",
              },
              "&.Mui-focused fieldset": {
                borderColor: (theme) => theme.palette.token.core.focused,
              },
            },
          }}
        />
        <Box width={150} height={50} bgcolor="#DFDFE2" mt={3}>
          Hello!
          <Box
            sx={{
              backgroundColor: (theme) =>
                theme.palette.token.component.alert_info_bg,
              color: (theme) => theme.palette.token.component.alert_info_border,
              boxShadow: (theme) =>
                `20px -10px 5px ${theme.palette.token.core.shadow_01}`,
              width: 300,
              height: 80,
            }}
          >
            - with alpha value
          </Box>
        </Box>
      </BaseBox>
    </>
  );
};

export const InComponentWithInlineStyle = () => {
  const theme = useTheme();

  return (
    <>
      <BaseBox theme="light">
        <TextField
          placeholder="Inline Styled Text Field"
          style={{
            backgroundColor: theme.palette.token.component.textfield_bg,
          }}
        />
      </BaseBox>
      <BaseBox theme="dark">
        <TextField
          placeholder="Inline Styled Text Field"
          style={{
            backgroundColor: theme.palette.token.component.textfield_bg,
          }}
        />
      </BaseBox>
    </>
  );
};

interface BaseBoxProps {
  theme: "light" | "dark";
  children: ReactNode;
}

const BaseBox = ({ theme, children }: BaseBoxProps) => {
  return (
    <Box
      className={theme === "light" ? "light1" : "dark1"}
      width={500}
      height={200}
      bgcolor={theme === "light" ? `lunit.grey.0.main` : `lunit.grey.80.main`}
      border="1px solid"
      p={2}
    >
      <Typography
        variant="body1_16_semibold"
        color={(theme) => theme.palette.token.core.text_normal}
      >
        {theme === "light" ? "= light1 =" : "= dark1 ="}
      </Typography>
      {children}
    </Box>
  );
};

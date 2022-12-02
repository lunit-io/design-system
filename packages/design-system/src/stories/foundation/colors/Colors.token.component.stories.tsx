import React, { ReactNode } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Box,
  Button,
  styled,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Container, TestButton } from "./styled";

const ColorTokenInComponents = () => {
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
          컬러 토큰 테스트
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
            >
              sx 버튼 테스트
            </Button>
            <TestButton>버튼 테스트</TestButton>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default {
  title: "Foundation/Colors/ColorToken",
  component: ColorTokenInComponents,
} as ComponentMeta<typeof ColorTokenInComponents>;

const TokenInComponent: ComponentStory<typeof ColorTokenInComponents> = () => (
  <ColorTokenInComponents />
);

// export const Comp = TokenInComponent.bind({});

interface BaseBoxProps {
  theme: "light" | "dark";
  children: ReactNode;
}

const BaseBox = ({ theme, children }: BaseBoxProps) => {
  return (
    <Box
      className={theme === "light" ? "base00" : "base80"}
      width={500}
      height={200}
      bgcolor={theme === "light" ? `lunit.grey.0.main` : `lunit.grey.80.main`}
      border="1px solid"
      p={2}
    >
      <Typography
        variant="body1"
        color={(theme) => theme.palette.token.core.text_normal}
      >
        {theme === "light" ? "= base00 =" : "= base 80 ="}
      </Typography>
      {children}
    </Box>
  );
};

export const ComponentWithStyled = () => {
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
    <Container>
      <BaseBox theme="light">
        <StyledTextField placeholder="Styled Text Field" />
      </BaseBox>
      <BaseBox theme="dark">
        <StyledTextField placeholder="Styled Text Field" />
      </BaseBox>
    </Container>
  );
};

export const ComponentWithSx = () => {
  return (
    <Container>
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
      </BaseBox>
    </Container>
  );
};

export const ComponentWithInlineStyle = () => {
  const theme = useTheme();

  return (
    <Container>
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
    </Container>
  );
};

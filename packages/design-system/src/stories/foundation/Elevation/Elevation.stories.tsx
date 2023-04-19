import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  Paper,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { Container, Title } from "./styled";

interface ElevationProps {
  surface: string;
  isBase: boolean;
}

const Elevation = ({ surface, isBase = false }: ElevationProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen((prev: boolean) => !prev);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [value, setValue] = React.useState<Dayjs | null>(null);

  if (isBase) {
    return (
      <Box
        sx={{
          p: 4,
        }}
      >
        <Title>Base Elevation</Title>
        <Container>
          <Box
            sx={{
              width: "300px",
              height: "100px",
              overflow: "hidden",
              p: 3,
            }}
            className="elevation1"
          >
            Level 1
          </Box>
          <Box
            sx={{
              width: "300px",
              height: "100px",
              overflow: "hidden",
              p: 3,
            }}
            className="elevation2"
          >
            Level 2
          </Box>
        </Container>

        <Title>Paper</Title>
        <Container>
          <Paper
            sx={{
              width: "300px",
              height: "100px",
              overflow: "hidden",
              p: 3,
            }}
          />
        </Container>

        <Title>Dropdown</Title>
        <Container>
          <Select
            label="Select option"
            value="option1"
            MenuProps={{
              className: surface,
            }}
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </Container>

        <Title>Date Picker</Title>
        <Container>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              PaperProps={{
                className: surface,
              }}
            />
          </LocalizationProvider>
        </Container>

        <Title>Alert</Title>
        <Container>
          <Alert sx={{ flex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam
            sollicitudin tempor id eu nisl nunc mi. Auctor augue mauris augue
            neque gravida in fermentum.{" "}
          </Alert>
        </Container>

        <Title>Modal & Popper</Title>
        <Container>
          <Button variant="contained" onClick={handleClickOpen}>
            Open Dialog
          </Button>
          <Dialog
            PaperProps={{
              className: surface,
            }}
            onClose={handleClose}
            open={open}
          >
            <DialogTitle>Title area</DialogTitle>
            <DialogContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam
              sollicitudin tempor id eu nisl nunc mi. Auctor augue mauris augue
              neque gravida in fermentum.
            </DialogContent>
          </Dialog>
          <Tooltip
            title="Tooltip"
            PopperProps={{ className: surface }}
            placement="right"
          >
            <Button variant="contained">Open Tooltip</Button>
          </Tooltip>
        </Container>
      </Box>
    );
  }
  return (
    <Box sx={{ height: "100vh" }}>
      <Button onClick={handleClickOpen}>Open Dialog</Button>
      <Dialog
        sx={{
          overflow: "hidden",
          p: 3,
        }}
        PaperProps={{
          className: surface,
        }}
        onClose={handleClose}
        open={open}
      >
        <DialogTitle>Title area</DialogTitle>
        <DialogContent>
          {" "}
          <Select
            label="Select option"
            value="option1"
            MenuProps={{
              className: surface,
            }}
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default {
  title: "Foundation/Elevation",
  component: Elevation,
  argTypes: {
    Paper: {
      table: {
        defaultValue: { summary: "Elevation 2" },
      },
      control: {
        type: null,
      },
    },
    Dropdown: {
      table: {
        defaultValue: { summary: "Elevation 1" },
      },
      control: {
        type: null,
      },
    },
    DatePicker: {
      table: {
        defaultValue: { summary: "Elevation 2" },
      },
      control: {
        type: null,
      },
    },
    Alert: {
      table: {
        defaultValue: { summary: "Elevation 2" },
      },
      control: {
        type: null,
      },
    },
    Dialog: {
      table: {
        defaultValue: { summary: "Elevation 2" },
      },
      control: {
        type: null,
      },
    },
    Tooltip: {
      table: {
        defaultValue: { summary: "Elevation 1" },
      },
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `The design system has Elevation 1 and Elevation 2. And components using elevation include Paper, Dropdown, DatePicker, Alert, Dialog, and Tooltip.\nEach component has a default value and if it is necessary to implement a component without elevation, you can add 'elevation0' to the class name.`,
      },
    },
  },
} as Meta<typeof Elevation>;

const ElevationBase: StoryFn<typeof Elevation> = (
  args,
  { globals: { theme } }
) => <Elevation {...args} surface={theme} isBase />;

const ElevationNesed: StoryFn<typeof Elevation> = (
  args,
  { globals: { theme } }
) => <Elevation {...args} surface={theme} />;

export const Base = {
  render: ElevationBase,
};
export const Nested = {
  render: ElevationNesed,
};

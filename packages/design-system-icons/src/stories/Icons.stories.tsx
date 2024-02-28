import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { pink } from "@mui/material/colors";
import * as Icons from "../..";

const SuccessIcon = Icons.Success;

const meta = {
  title: "Lunit Design System Icons",
  component: SuccessIcon,
  argTypes: {
    variant: {
      options: ["outlined", "filled"],
      control: "radio",
      default: "outlined",
      description:
        "Some icons are available in two variants: outlined and filled.",
    },
    color: {
      options: [
        "inherit",
        "action",
        "disabled",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
      control: "select",
      default: "inherit",
      description:
        "The color of the icon. It supports both default and custom theme colors.",
    },
    fontSize: {
      options: ["inherit", "small", "medium", "large"],
      control: "select",
      default: "medium",
      description:
        "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.",
    },
  },
  args: {
    variant: "outlined",
    color: "inherit",
    fontSize: "medium",
  },
};

export default meta;

export const BasicIcon = {
  component: SuccessIcon,
};

export const Variant = {
  render: () => (
    <>
      <SuccessIcon variant="outlined" />
      <SuccessIcon variant="filled" />
    </>
  ),
};

export const Color = {
  render: () => (
    <>
      <SuccessIcon />
      <SuccessIcon color="primary" />
      <SuccessIcon color="secondary" />
      <SuccessIcon color="success" />
      <SuccessIcon color="action" />
      <SuccessIcon color="disabled" />
      <SuccessIcon sx={{ color: pink[600] }} />
    </>
  ),
};

export const Size = {
  render: () => (
    <>
      <SuccessIcon fontSize="small" />
      <SuccessIcon />
      <SuccessIcon fontSize="large" />
      <SuccessIcon sx={{ fontSize: 40 }} />
    </>
  ),
};

export const AllIcons = {
  render: () => (
    <Table size="small" sx={{ maxWidth: 480, color: "text.primary" }}>
      <TableBody>
        {Object.keys(Icons).map((key) => {
          const Icon = Icons[key as keyof typeof Icons];
          return (
            <TableRow key={key}>
              <TableCell>
                <Typography>{key}</Typography>
              </TableCell>
              <TableCell>
                {Icon.variants
                  .sort((a, b) => {
                    if (a === "outlined") return -1;
                    else if (b === "outlined") return 1;
                    return 0;
                  })
                  .map((variant) => (
                    <span
                      key={Icon.displayName + variant}
                      title={`${Icon.displayName} ${variant}`}
                    >
                      <Icon variant={variant} />
                    </span>
                  ))}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ),
};

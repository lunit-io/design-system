import { pink } from "@mui/material/colors";
import * as Icons from "../..";

const SuccessIcon = Icons.Success;

const meta = {
  title: "Lunit Design System Icons",
  component: SuccessIcon,
};

export default meta;

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
      <SuccessIcon sx={{ color: pink[500] }} />
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

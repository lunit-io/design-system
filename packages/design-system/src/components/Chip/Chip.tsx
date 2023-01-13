import React from "react";
import { Avatar } from "@mui/material";
import { Close16 } from "@lunit/design-system-icons";
import { StyledOutlinedChip, StyledContainedChip } from "./Chip.styled";
import { useTheme } from "@mui/material/styles";

import type {
  OutlinedChipProps,
  ReadOnlyContainedChipProps,
  EnableContainedChipProps,
  DeletableContainedChipProps,
  ChipProps,
  ChipThumbnail,
} from "./Chip.types";

const Chip = (props: ChipProps) => {
  const { kind, onDelete, onClick, ...restProps } = props;
  if (kind === "outlined") return <OutlinedChip {...props} />;
  else if (onClick) return <EnableContainedChip {...props} />;
  else if (onDelete) return <DeletableContainedChip {...props} />;

  return <ReadOnlyContainedChip {...restProps} />;
};

const OutlinedChip = (props: OutlinedChipProps) => {
  const { color = "primary", ...restProps } = props;

  return (
    <StyledOutlinedChip
      {...restProps}
      variant="outlined"
      disabled
      color={color}
    />
  );
};

const getAvatar = (thumbnail: ChipThumbnail | undefined) => {
  if (!thumbnail || typeof thumbnail !== "string") return;
  if (thumbnail.length === 0) return <Avatar />;
  return <Avatar>{thumbnail.slice(0, 1).toLocaleUpperCase()}</Avatar>;
};
const getIcon = (thumbnail: ChipThumbnail | undefined) => {
  if (thumbnail && typeof thumbnail !== "string") return thumbnail;
  return undefined;
};
const getLabelMargin = (
  thumbnail: ChipThumbnail | undefined,
  deletable?: boolean
) => {
  return {
    marginLeft: thumbnail ? "0px" : "8px",
    marginRight: deletable ? "0px" : "8px",
  };
};

const ReadOnlyContainedChip = (props: ReadOnlyContainedChipProps) => {
  const { color = "primary", thumbnail, sx, ...restProps } = props;

  return (
    <StyledContainedChip
      {...restProps}
      disabled
      avatar={getAvatar(thumbnail)}
      icon={getIcon(thumbnail)}
      color={color}
      sx={{
        "& .MuiChip-label": {
          ...getLabelMargin(thumbnail),
        },
        ...sx,
      }}
    />
  );
};

const EnableContainedChip = (props: EnableContainedChipProps) => {
  const { color = "primary", thumbnail, onClick, sx, ...restProps } = props;
  const theme = useTheme();

  return (
    <StyledContainedChip
      {...restProps}
      onClick={onClick}
      avatar={getAvatar(thumbnail)}
      icon={getIcon(thumbnail)}
      color={color}
      sx={{
        "& .MuiChip-label": {
          ...getLabelMargin(thumbnail),
        },
        "&:hover": {
          // TODO: Below is a temporary color until the hover color is completed in our Design system
          backgroundColor: theme.palette.token.core.hover,
        },
        ...sx,
      }}
    />
  );
};

const DeletableContainedChip = (props: DeletableContainedChipProps) => {
  const { color = "primary", thumbnail, onDelete, sx, ...restProps } = props;

  return (
    <StyledContainedChip
      {...restProps}
      color={color}
      onDelete={onDelete}
      deleteIcon={<Close16 />}
      avatar={getAvatar(thumbnail)}
      icon={getIcon(thumbnail)}
      sx={{
        "& .MuiChip-label": {
          ...getLabelMargin(thumbnail, Boolean(onDelete)),
        },
        ...sx,
      }}
    />
  );
};

export default Chip;

import React from "react";

import { Box } from "@mui/material";
import Close from "@lunit/design-system-icons/Close";
/**
 * Below Icons should be replaced with Lunit-icons
 */
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { StyledOutlinedChip, StyledContainedChip } from "./Chip.styled";
import { commonStyle } from "./consts";

import type {
  ChipThumbnail,
  OutlinedChipProps,
  ContainedChipProps,
  ChipProps,
} from "./Chip.types";

const Thumbnail = ({
  thumbnail,
  color = "primary",
}: {
  thumbnail: ChipThumbnail;
  color?: ContainedChipProps["color"];
}) => {
  const thumbnailStyle = {
    marginLeft: "3px",
    marginRight: 0,
  };

  if (thumbnail === "avatar")
    return <AccountCircleOutlinedIcon sx={thumbnailStyle} />;
  if (thumbnail === "logo") return <Box color={color} sx={thumbnailStyle} />;
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        alignSelf: "baseline",
        svg: {
          ...thumbnailStyle,
        },
      }}
    >
      {thumbnail}
    </Box>
  );
};

const OutlinedChip = (props: OutlinedChipProps) => {
  const { label, color, sx } = props;
  return (
    <StyledOutlinedChip
      label={label}
      variant="outlined"
      disabled
      color={color}
      sx={{ ...commonStyle, ...sx }}
    />
  );
};

const ContainedChip = (props: ContainedChipProps) => {
  const { label, onClick, onDelete, thumbnail, color, sx } = props;

  return (
    <StyledContainedChip
      label={label}
      onClick={onClick}
      onDelete={onDelete}
      deleteIcon={<Close />}
      icon={
        thumbnail ? (
          <Thumbnail thumbnail={thumbnail} color={color} />
        ) : undefined
      }
      color={color}
      sx={{
        ...commonStyle,
        ...{
          "& span": {
            marginLeft: thumbnail ? "4px" : "8px",
            marginRight: onDelete ? "4px" : "8px",
          },
          "&:hover": {
            /**
             * need to be fixed in color system
             */
            backgroundColor: (theme) =>
              !thumbnail && !onDelete
                ? theme.palette.token.core.hover
                : "primary",
            "& svg": {
              color: (theme) =>
                thumbnail || onDelete
                  ? theme.palette.token.core.hover
                  : "primary",
            },
          },
        },
        ...sx,
      }}
    />
  );
};

const Chip = (props: ChipProps) => {
  const { label, color, sx } = props;

  if (props.clickable) {
    const { onClick, onDelete, thumbnail, sx } = props;
    return (
      <ContainedChip
        clickable
        label={label}
        color={color}
        onClick={onClick}
        onDelete={onDelete}
        thumbnail={thumbnail}
        sx={sx}
      />
    );
  } else {
    return (
      <OutlinedChip clickable={false} label={label} color={color} sx={sx} />
    );
  }
};

export default Chip;

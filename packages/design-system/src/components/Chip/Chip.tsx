import React from "react";

import { Box } from "@mui/material";
import { StyledOutlinedChip, StyledContainedChip } from "./Chip.styled";
import { commonStyle } from "./consts";

import type {
  ChipColor,
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
  color?: ChipColor;
}) => {
  if (thumbnail === "avatar") return <Box color={color} />;
  if (thumbnail === "logo") return <Box color={color} />;
  return thumbnail;
};

const OutlinedChip = (props: OutlinedChipProps) => {
  const { text, color } = props;
  return (
    <StyledOutlinedChip
      label={text}
      variant="outlined"
      disabled
      color={color}
      sx={commonStyle}
    />
  );
};

const ContainedChip = (props: ContainedChipProps) => {
  const { text, onClick, onDelete, thumbnail, color } = props;
  return (
    <StyledContainedChip
      label={text}
      onClick={onClick}
      onDelete={onDelete}
      icon={
        thumbnail ? (
          <Thumbnail thumbnail={thumbnail} color={color} />
        ) : undefined
      }
      color={color}
      sx={commonStyle}
    />
  );
};

const Chip = (props: ChipProps) => {
  const { clickable, text, color } = props;

  if (clickable) {
    const { onClick, onDelete, thumbnail } = props;
    return (
      <ContainedChip
        clickable={clickable}
        text={text}
        color={color}
        onClick={onClick}
        onDelete={onDelete}
        thumbnail={thumbnail}
      />
    );
  } else {
    return <OutlinedChip clickable={clickable} text={text} color={color} />;
  }
};

export default Chip;

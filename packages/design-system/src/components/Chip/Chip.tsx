import React from "react";

import { Box } from "@mui/material";
import {
  ChipWrapper,
  StyledOutlinedChip,
  StyledContainedChip,
} from "./Chip.styled";

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
    />
  );
};

const ContainedChip = (props: ContainedChipProps) => {
  const { text, onClick, onDelete, thumbnail, color } = props;
  return (
    <StyledContainedChip
      label={text}
      onClick={onClick}
      onDelete={onDelete ? onDelete : undefined}
      icon={
        thumbnail ? (
          <Thumbnail thumbnail={thumbnail} color={color} />
        ) : undefined
      }
      color={color}
    />
  );
};

const Chip = (props: ChipProps) => {
  const { clickable, text, color, baseClass } = props;

  if (clickable) {
    const { onClick, onDelete, thumbnail } = props;
    return (
      <ChipWrapper className={baseClass ? baseClass : "base00"}>
        <ContainedChip
          clickable={clickable}
          text={text}
          color={color}
          onClick={onClick}
          onDelete={onDelete}
          thumbnail={thumbnail}
        />
      </ChipWrapper>
    );
  } else {
    return (
      <ChipWrapper className={baseClass ? baseClass : "base00"}>
        <OutlinedChip clickable={clickable} text={text} color={color} />
      </ChipWrapper>
    );
  }
};

export default Chip;

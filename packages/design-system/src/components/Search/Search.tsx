import React, { useState } from "react";
import { SearchT1, Close } from "@lunit/design-system-icons";

import { TextField } from "../TextField";

import type { ChangeEvent } from "react";
import type { SearchProps } from "./Search.types";

const Search = (props: SearchProps) => {
  const {
    sx,
    value = "",
    size = "small",
    searchIcon = <SearchT1 />,
    resetIcon = <Close />,
    variant = "outlined",
    resetIconSx,
    onChange,
    handleResetIconClick: _handleResetIconClick,
    ...restProps
  } = props;

  const [inputText, setInputText] = useState(value);

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);

      return;
    }

    setInputText(event.target.value);
  };

  const handleResetIconClick = () => {
    if (_handleResetIconClick) {
      _handleResetIconClick();
    }

    setInputText("");
  };

  return (
    <TextField
      {...restProps}
      rightIconSx={{
        visibility: inputText ? "visible" : "hidden",
        ...resetIconSx,
      }}
      size={size}
      variant={variant}
      value={inputText}
      leftIcon={searchIcon}
      rightIcon={resetIcon}
      onChange={handleTextFieldChange}
      handleRightIconClick={handleResetIconClick}
    />
  );
};

export default Search;

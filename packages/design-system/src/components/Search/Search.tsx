import React, { useState } from "react";
import { SearchT1, Reset } from "@lunit/design-system-icons";

import { TextField } from "../TextField";

import type { ChangeEvent } from "react";
import type { SearchProps } from "./Search.types";

const Search = (props: SearchProps) => {
  const {
    value = "",
    searchIcon = <SearchT1 />,
    resetIcon = <Reset />,
    variant = "outlined",
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
      variant={variant}
      value={inputText}
      leftIcon={searchIcon}
      rightIcon={inputText.length > 0 ? resetIcon : undefined}
      onChange={handleTextFieldChange}
      handleRightIconClick={handleResetIconClick}
    />
  );
};

export default Search;

import React from "react";
import { Typography } from "@mui/material";

import { variants } from "./const";

import TypographyGroup from "./TypographyGroup";

const AllVariants = () => (
  <>
    <TypographyGroup
      heading="Headline"
      dummy="Headline 123456789"
      variants={variants.headline}
    />
    <TypographyGroup
      heading="Body"
      dummy={
        <>
          AI will be the new standard of care. 123456789
          <br />
          By Lunit. With AI, we aim to make data-driven medicine
          <br />
          the new standard of care.
        </>
      }
      variants={variants.body}
    />
    <TypographyGroup
      heading="etc"
      dummy="NEWS & UPDATE 71456"
      variants={variants.etc}
    />
  </>
);

export default {
  title: "Foundation/Typography/All Variants",
  component: Typography,
};

export const AllVariants_ = {
  render: () => <AllVariants />,
  name: "all variants",
};

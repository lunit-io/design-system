import React from "react";
import { Box, Grid, styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ColorBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: "4px 0",
  fontSize: "14px !important",
  marginTop: "5px !important",
}));

const BlockBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#d7d3d3",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  flex: "auto",
  padding: "10px",
}));

const ColorSystem = () => {
  return (
    <Box pb={10}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <BlockBox>
            <Box>색상 코드 값</Box>
            <ColorBox bgcolor="#FFFFFF">#FFFFFF</ColorBox>
            <ColorBox bgcolor="#00C9EA">#00C9EA</ColorBox>
            <ColorBox bgcolor="#FFB3B8">#FFB3B8</ColorBox>
          </BlockBox>
          <Box
            sx={{
              width: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArrowForwardIcon />
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <BlockBox>
            <Box>Global Palette</Box>
            <ColorBox bgcolor="#FFFFFF">grey_0</ColorBox>
            <ColorBox bgcolor="#00C9EA">lunit_teal_40</ColorBox>
            <ColorBox bgcolor="#FFB3B8">red_20</ColorBox>
          </BlockBox>
          <Box
            sx={{
              width: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArrowForwardIcon />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <BlockBox>
            <Box>Color Token</Box>
            <ColorBox bgcolor="#FFFFFF">bg_01</ColorBox>
            <ColorBox bgcolor="#00C9EA">btn_primary_border</ColorBox>
            <ColorBox bgcolor="#FFB3B8">chip_error_bg</ColorBox>
          </BlockBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ColorSystem;

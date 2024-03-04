import React from "react";
import { Box, Grid } from "@mui/material";

const ColorSystem = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: "#d7d3d3",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Box>색상 코드 값</Box>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                textAlign: "center",
              }}
            >
              #FFFFFF
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: "#d7d3d3",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Box>Global Palette</Box>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                textAlign: "center",
              }}
            >
              ex) Red10, Blue40
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: "#d7d3d3",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Box>Color Token</Box>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                textAlign: "center",
              }}
            >
              ex) bg_01, btn_text_primary
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ColorSystem;

import { COLORS } from "@/styles/colors";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Ratings = ({ rating }: { rating: any }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", margin: "0.5rem 0" }}>
      <Box sx={{ marginRight: "0.5rem" }}>
        <Image alt="star" src="/star-icon.png" height={20} width={20} />
        <Image alt="star" src="/star-icon.png" height={20} width={20} />
        <Image alt="star" src="/star-icon.png" height={20} width={20} />
        <Image alt="star" src="/star-icon.png" height={20} width={20} />
      </Box>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 500,
          color: COLORS.teal,
          "&:hover": {
            color: COLORS.orange,
          },
        }}
      >
        {rating.count}
      </Typography>
    </Box>
  );
};

export default Ratings;

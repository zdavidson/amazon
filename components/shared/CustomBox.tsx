import { COLORS } from "@/styles/colors";
import { Box, SxProps } from "@mui/material";
import React from "react";

const CustomBox = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) => {
  return (
    <Box
      sx={{
        border: `1px solid ${COLORS.lightGray}`,
        borderRadius: "0.5rem",
        padding: "1rem",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CustomBox;

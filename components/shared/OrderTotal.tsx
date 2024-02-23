import { COLORS } from "@/styles/colors";
import { Box, Typography } from "@mui/material";
import React from "react";

const OrderTotal = ({ totalPrice }: { totalPrice: string }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography variant="h3" sx={{ color: COLORS.red }}>
        Order Total
      </Typography>
      <Typography variant="h3" sx={{ color: COLORS.red }}>
        ${totalPrice}
      </Typography>
    </Box>
  );
};

export default OrderTotal;

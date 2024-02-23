import { Checkout } from "@/components/Checkout";
import { COLORS } from "@/styles/colors";
import Box from "@mui/material/Box";
import React from "react";

const CheckoutPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        transform: "translateY(-7rem)",
        minHeight: "100vh",
      }}
    >
      <Checkout />
    </Box>
  );
};

export default CheckoutPage;

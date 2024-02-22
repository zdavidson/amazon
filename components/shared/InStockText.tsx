import { getRandomNumber } from "@/utils";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import { COLORS } from "@/styles/colors";

const InStockText = ({ sx }: { sx?: SxProps<Theme> }) => {
  const [inStock, setInStock] = useState(0);

  useEffect(() => {
    setInStock(getRandomNumber(10));
  }, []);
  return (
    <Typography
      sx={{ color: COLORS.red, fontWeight: 700, margin: "0.5rem 0", ...sx }}
    >
      Only {inStock} in stock - order soon.
    </Typography>
  );
};

export default InStockText;

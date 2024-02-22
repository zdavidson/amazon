import { SxProps, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const Subtotal = ({
  items,
  price,
  sx,
}: {
  items: number;
  price: number;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Typography
      variant="h3"
      sx={{ fontSize: "1.25rem", fontWeight: 500, margin: "1rem 0", ...sx }}
    >
      Subtotal ({items} items):{" "}
      <span style={{ fontWeight: 700 }}>${price}</span>{" "}
    </Typography>
  );
};

export default Subtotal;

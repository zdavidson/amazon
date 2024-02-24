import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import ProductLinkText from "./ProductLinkText";
import { COLORS } from "@/styles/colors";

const SmallCard = ({ image, heading }: { image: string; heading: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: COLORS.white,
        padding: "1rem",
        width: "15rem",
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: "0.5rem" }}>
        {heading}
      </Typography>
      <Image
        src={image}
        alt={`${heading} product`}
        width={225}
        height={300}
        style={{ marginBottom: "0.5rem" }}
      />
      <ProductLinkText>Shop Now</ProductLinkText>
    </Box>
  );
};

export default SmallCard;

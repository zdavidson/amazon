import { Box, Typography } from "@mui/material";
import React from "react";
import CustomBox from "./shared/CustomBox";
import { Product } from "@/types/supabase";
import Image from "next/image";
import DeliveryOptions from "./DeliveryOptions";
import { COLORS } from "@/styles/colors";

const CheckoutItem = ({ item }: { item: Product }) => {
  return (
    <CustomBox
      sx={{
        margin: "1rem 0 1rem 3.5rem",
        display: "flex",
      }}
    >
      <Image
        src={item.image!}
        alt={item.title!}
        width={70}
        height={100}
        style={{ marginRight: "2rem" }}
      />
      <Box sx={{ width: "22rem" }}>
        <Typography sx={{ fontWeight: 700 }}>{item.title}</Typography>
        <Typography sx={{ fontWeight: 700, color: COLORS.red }}>
          ${item.price}
        </Typography>
      </Box>
      <DeliveryOptions />
    </CustomBox>
  );
};

export default CheckoutItem;

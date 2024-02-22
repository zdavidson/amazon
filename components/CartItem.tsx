"use client";
import { Product } from "@/types/supabase";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import InStockText from "./shared/InStockText";
import CustomHR from "./shared/CustomHR";
import { useAppDispatch } from "@/hooks/redux";
import { removeItem } from "@/store/cartSlice";

const CartItem = ({ item }: { item: Product }) => {
  const dispatch = useAppDispatch();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2rem 0",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Image alt={item.title!} src={item.image!} width={225} height={257} />
          <Box sx={{ marginLeft: "2rem" }}>
            <Typography variant="h2" sx={{ fontWeight: 500 }}>
              {item.title}
            </Typography>
            <InStockText sx={{ fontWeight: 500 }} />
            <Typography>Eligible for FREE Shipping & FREE Returns</Typography>
            <Button onClick={() => dispatch(removeItem(item))}>Delete</Button>
          </Box>
        </Box>
        <Typography sx={{ fontSize: "1.25rem", fontWeight: 700 }}>
          ${item.price}
        </Typography>
      </Box>
      <CustomHR />
    </Box>
  );
};

export default CartItem;

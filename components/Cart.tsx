"use client";
import { useAppSelector } from "@/hooks/redux";
import { getCart } from "@/store/cartSlice";
import { COLORS } from "@/styles/colors";
import { Product } from "@/types/supabase";
import { Box, Typography } from "@mui/material";
import React from "react";
import CustomHR from "./shared/CustomHR";
import CartItem from "./CartItem";
import ProductLinkText from "./shared/ProductLinkText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CustomButton from "./shared/CustomButton";
import { useRouter } from "next/navigation";
import Subtotal from "./shared/Subtotal";

const Cart = () => {
  const cart = useAppSelector(getCart);
  const router = useRouter();

  let total = 0;

  cart.forEach((item: Product) => (total = total + item.price!));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "3rem 0",
      }}
    >
      <Box
        sx={{
          backgroundColor: COLORS.white,
          padding: "2rem",

          width: "55vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h1">Shopping Cart</Typography>
          <Typography>Price</Typography>
        </Box>
        <CustomHR />
        {cart.map((item: Product) => {
          return <CartItem key={item.id} item={item} />;
        })}
        <Subtotal
          items={cart.length}
          price={total}
          sx={{ textAlign: "right" }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: COLORS.white,
          padding: "1rem",
          width: "15vw",
          height: "17vh",
        }}
      >
        <Typography
          sx={{ color: COLORS.green, display: "flex", alignItems: "center" }}
        >
          <CheckCircleIcon sx={{ marginRight: "0.25rem" }} />
          Your order qualifies for FREE Shipping.
        </Typography>
        <Typography sx={{ marginLeft: "1.8rem" }}>
          Choose this option at checkout.{" "}
          <ProductLinkText>See details</ProductLinkText>
        </Typography>
        <Subtotal items={cart.length} price={total} />
        <CustomButton onClick={() => router.push("/checkout")}>
          Proceed to Checkout
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Cart;

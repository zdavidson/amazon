"use client";

import { COLORS } from "@/styles/colors";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

import CheckoutHeader from "./CheckoutHeader";
import CheckoutSection from "./shared/CheckoutSection";
import CustomBox from "./shared/CustomBox";
import CustomButton from "./shared/CustomButton";
import ProductLinkText from "./shared/ProductLinkText";
import CheckoutItem from "./CheckoutItem";
import { useAppSelector } from "@/hooks/redux";
import { getCart } from "@/store/cartSlice";
import { Product } from "@/types/supabase";
import OrderSummary from "./OrderSummary";

export const Checkout = () => {
  const cart = useAppSelector(getCart);
  let subtotal = 0;

  cart.forEach((item: Product) => (subtotal = subtotal + item.price!));

  const totalTax = subtotal * 0.07;

  const orderTotal = subtotal + totalTax;

  return (
    <Box>
      <CheckoutHeader items={cart.length} />
      <Container sx={{ display: "flex", marginTop: "0.5rem" }}>
        <Box sx={{ width: "45vw" }}>
          <CheckoutSection number={1} title="Shipping Address">
            <Typography>
              Harry Potter<br></br> 123 Diagon Alley<br></br> London WC2H 9FB
              <br></br> United Kingdom
            </Typography>
          </CheckoutSection>
          <CheckoutSection number={2} title="Payment Method">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: 700 }}>
                Paying with Galleons
              </Typography>
              <Typography>
                <span style={{ color: COLORS.teal }}>Billing address:</span>{" "}
                Harry Potter, 123 Diagon Alley...
              </Typography>
            </Box>
          </CheckoutSection>
          <CheckoutSection
            number={3}
            title="Review Items and shipping"
            sx={{ flexDirection: "column" }}
          >
            {cart.map((item: Product) => {
              return <CheckoutItem item={item} key={item.id} />;
            })}

            <CustomBox sx={{ display: "flex", marginLeft: "3.5rem" }}>
              <CustomButton
                onClick={() => console.log("clicked")}
                sx={{ width: "12rem", marginRight: "1rem" }}
              >
                Place Your Order
              </CustomButton>
              <Box>
                <Typography variant="h3" sx={{ color: COLORS.red }}>
                  Order total: ${orderTotal.toFixed(2)}
                </Typography>
                <Typography>
                  By placing your order, you agree to Amazon&apos;s{" "}
                  <ProductLinkText>privacy notice </ProductLinkText> and{" "}
                  <ProductLinkText>conditions of use.</ProductLinkText>
                </Typography>
              </Box>
            </CustomBox>
          </CheckoutSection>
        </Box>

        <OrderSummary
          subtotal={subtotal}
          tax={totalTax.toFixed(2)}
          total={orderTotal.toFixed(2)}
        />
      </Container>
    </Box>
  );
};

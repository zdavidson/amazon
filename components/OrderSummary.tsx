import React from "react";
import CustomBox from "./shared/CustomBox";
import CustomButton from "./shared/CustomButton";
import { Box, Typography } from "@mui/material";
import CustomHR from "./shared/CustomHR";
import ProductLinkText from "./shared/ProductLinkText";
import OrderTotal from "./shared/OrderTotal";
import { COLORS } from "@/styles/colors";

const OrderSummary = ({
  subtotal,
  tax,
  total,
}: {
  subtotal: number;
  tax: string;
  total: string;
}) => {
  const summaryValues = [
    { title: `Subtotal (1 items)`, value: `$${subtotal}` },
    { title: `Shipping & handling`, value: "$0.00" },
    { title: `Total before tax`, value: `$${subtotal}` },
    { title: `Estimated tax to be collected`, value: `$${tax}` },
  ];
  return (
    <CustomBox sx={{ width: "15vw", marginLeft: "2rem", height: "43.5vh" }}>
      <CustomButton onClick={() => console.log("clicked")}>
        Place Your Order
      </CustomButton>
      <Typography sx={{ textAlign: "center" }}>
        By placing your order, you agree to Amazon&apos;s{" "}
        <ProductLinkText>privacy notice</ProductLinkText> and{" "}
        <ProductLinkText>conditions of use</ProductLinkText>.
      </Typography>
      <CustomHR />
      <Typography variant="h2" sx={{ margin: "1rem 0" }}>
        Order Summary
      </Typography>
      {summaryValues.map((value) => {
        return (
          <>
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              key={value.title}
            >
              <Typography>{value.title}</Typography>
              <Typography>{value.value}</Typography>
            </Box>
            {value.title === summaryValues[1].title && <CustomHR />}
          </>
        );
      })}
      <CustomHR />
      <OrderTotal totalPrice={total} />
      <CustomHR />
      <Box sx={{ backgroundColor: COLORS.lightGray, padding: "1rem" }}>
        <ProductLinkText>How are shipping costs calculated?</ProductLinkText>
        <Typography sx={{ marginTop: "1rem" }}>
          Prime shipping benefits have been applied to your order.
        </Typography>
      </Box>
    </CustomBox>
  );
};

export default OrderSummary;

import { Box, Rating, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomHR from "./shared/CustomHR";
import { COLORS } from "@/styles/colors";
import ProductLinkText from "./shared/ProductLinkText";
import CustomBox from "./shared/CustomBox";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { getRandomNumber } from "@/utils";
import InStockText from "./shared/InStockText";
import CustomButton from "./shared/CustomButton";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/redux";
import { addToCart } from "@/store/cartSlice";

const ProductDetails = ({ product }: { product: any[] }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setHours(getRandomNumber(12));
    setMinutes(getRandomNumber(59));
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {product.map((prod: any) => {
        return (
          <Box
            key={prod.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5rem 0",
            }}
          >
            <Image
              alt={prod.title!}
              src={prod.image!}
              height={600}
              width={500}
              style={{ marginRight: "8rem" }}
            />
            <Box>
              <Typography variant="h1">{prod.title}</Typography>
              <Rating />
              <CustomHR />
              <Typography
                variant="h2"
                sx={{ fontSize: "2rem", fontWeight: 500, marginBottom: "1rem" }}
              >
                ${prod.price}
              </Typography>
              <ProductLinkText>FREE Returns</ProductLinkText>
              <Typography sx={{ fontSize: "0.75rem", marginTop: "1rem" }}>
                Available at a lower price from other sellers that may not offer
                free Prime shipping.
              </Typography>
              <CustomHR />
              <Typography sx={{ fontWeight: 700 }}>Description</Typography>
              <Typography>{prod.description}</Typography>
            </Box>
            <Box sx={{ marginLeft: "2rem" }}>
              <CustomBox sx={{ width: "12.5rem" }}>
                <Image
                  alt="prime-logo"
                  src="/prime-logo.png"
                  height={30}
                  width={50}
                />
                <Typography sx={{ fontWeight: 700 }}>
                  Enjoy fast, free delivery, exclusive deals, and award-winning
                  moves & TV shows with Prime.
                </Typography>
                <Typography>
                  <span style={{ color: COLORS.teal }}>Try Prime</span> and
                  start saving today with{" "}
                  <span style={{ fontWeight: 700 }}>fast, free delivery</span>
                </Typography>
              </CustomBox>
              <CustomBox>
                <Typography variant="h2" sx={{ marginBottom: "0.5rem" }}>
                  ${prod.price}
                </Typography>
                <ProductLinkText>FREE Returns</ProductLinkText>
                <Typography sx={{ margin: "0.5rem 0" }}>
                  <ProductLinkText>FREE Delivery</ProductLinkText>{" "}
                  <span style={{ fontWeight: 700 }}>in 2 days</span>
                </Typography>
                <Typography>
                  Or fastest delivery{" "}
                  <span style={{ fontWeight: 700 }}>tomorrow.</span>
                </Typography>
                <Typography>
                  Order within{" "}
                  <span style={{ color: COLORS.green }}>
                    {hours} hrs and {minutes} mins
                  </span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0.5rem 0",
                  }}
                >
                  <LocationOnIcon />
                  <ProductLinkText>Deliver to New York 10011</ProductLinkText>
                </Typography>
                <InStockText />
                <CustomButton
                  onClick={() => {
                    dispatch(addToCart(prod));
                    router.push("/cart");
                  }}
                >
                  Add to Cart
                </CustomButton>
                <CustomButton
                  onClick={() => router.push("/checkout")}
                  sx={{
                    backgroundColor: COLORS.orange,
                    "&:hover": {
                      backgroundColor: COLORS.darkOrange,
                    },
                  }}
                >
                  Buy Now
                </CustomButton>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Ships from</span>
                  <ProductLinkText>Amazon</ProductLinkText>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Returns</span>
                  <ProductLinkText>Eligible</ProductLinkText>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Payment</span>
                  <ProductLinkText>Secure transaction</ProductLinkText>
                </Typography>
              </CustomBox>
            </Box>
          </Box>
        );
      })}
      <CustomHR />
      <Typography variant="h2" sx={{ margin: "2rem 0" }}>
        Buy it with
      </Typography>
    </Box>
  );
};

export default ProductDetails;

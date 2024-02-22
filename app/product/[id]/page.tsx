"use client";
import ProductDetails from "@/components/ProductDetails";
import { useSupabase } from "@/hooks/useSupabase";
import { COLORS } from "@/styles/colors";
import { Box, Container } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const ProductPage = () => {
  const { singleProduct, getSingleProduct } = useSupabase();

  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(Number(id));
  }, [getSingleProduct, id]);
  return (
    <Box sx={{ backgroundColor: COLORS.white }}>
      <Container maxWidth="xl">
        <ProductDetails product={singleProduct} />
      </Container>
    </Box>
  );
};

export default ProductPage;

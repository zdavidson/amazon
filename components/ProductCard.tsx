import { COLORS } from "@/styles/colors";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Ratings from "./shared/Ratings";
import { useRouter } from "next/navigation";
import { Product } from "@/types/supabase";

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();

  const selectProduct = (e: any) => {
    e.preventDefault();
    router.push(`/product/${product.id}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        width: 225,
        height: 450,
        margin: "0.5rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onClick={selectProduct}
    >
      <Image
        alt={product.title!}
        src={product.image!}
        width={225}
        height={257}
      />
      <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <Typography variant="h2" sx={{ fontWeight: 500, color: COLORS.black }}>
          {product.title!.substring(0, 15)}...
        </Typography>
        <Ratings rating={product.rating} />
        <Typography variant="h2" sx={{ fontWeight: 700, color: COLORS.black }}>
          ${product.price}
        </Typography>
      </Link>
    </Box>
  );
};

export default ProductCard;

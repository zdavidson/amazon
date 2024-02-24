import { COLORS } from "@/styles/colors";
import { Product } from "@/types/supabase";
import Box from "@mui/material/Box";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

const WideCard = ({
  products,
  heading,
}: {
  products: Product[];
  heading: string;
}) => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        width: "1120px",
        height: "200px",
        padding: "1rem",
        margin: "1rem 0",
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: "0.5rem" }}>
        {heading}
      </Typography>
      {products.slice(0, 8).map((product) => {
        return (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Image
              src={product.image!}
              alt={product.title!}
              width={125}
              height={150}
              style={{ marginRight: "0.5rem" }}
            />
          </Link>
        );
      })}
    </Box>
  );
};

export default WideCard;

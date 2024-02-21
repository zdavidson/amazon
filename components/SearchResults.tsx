import Box from "@mui/material/Box";
import React from "react";
import ProductCard from "./ProductCard";

const SearchResults = ({ products }: { products: any[] }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "2rem 0",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </Box>
  );
};

export default SearchResults;

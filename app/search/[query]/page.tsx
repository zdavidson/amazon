"use client";
import SearchResults from "@/components/SearchResults";
import { useSupabase } from "@/hooks/useSupabase";
import { Container } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const QueryPage = () => {
  const { filteredProducts, getFilteredProducts } = useSupabase();
  const { query } = useParams();

  useEffect(() => {
    getFilteredProducts(query.toString());
  }, [getFilteredProducts, query]);

  console.log(filteredProducts);
  return (
    <Container>
      <SearchResults products={filteredProducts} />
    </Container>
  );
};

export default QueryPage;

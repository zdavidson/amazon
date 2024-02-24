"use client";

import Box from "@mui/material/Box";
import Image from "next/image";
import React, { useEffect } from "react";
import SmallCard from "./shared/SmallCard";
import { heroData } from "@/utils/dashboardData";
import WideCard from "./shared/WideCard";
import { useSupabase } from "@/hooks/useSupabase";

const Dashboard = () => {
  const {
    jewelry,
    getJewelry,
    electronics,
    getElectronics,
    womensClothing,
    getWomensClothing,
    clothing,
    getClothing,
  } = useSupabase();

  const categoryHeaders = [
    { heading: "Best Sellers in Clothing", products: clothing },
    { heading: "Best Sellers in Electronics", products: electronics },
    { heading: "Best Sellers in Jewelry", products: jewelry },
    { heading: "Best Sellers in Women's Clothing", products: womensClothing },
  ];

  useEffect(() => {
    getJewelry();
    getElectronics();
    getWomensClothing();
    getClothing();
  }, [getJewelry, getElectronics, getWomensClothing, getClothing]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Image
        src="/dashboard-1.jpg"
        alt="gaming-controller-ad"
        width={1150}
        height={450}
      />
      <Box sx={{ transform: "translateY(-15rem)" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {heroData.map((product) => {
            return (
              <SmallCard
                heading={product.heading}
                image={product.image}
                key={product.heading}
              />
            );
          })}
        </Box>
        {categoryHeaders.map((category) => {
          return (
            <WideCard
              key={category.heading}
              products={category.products}
              heading={category.heading}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Dashboard;

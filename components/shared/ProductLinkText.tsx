import { COLORS } from "@/styles/colors";
import React from "react";

const ProductLinkText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span style={{ color: COLORS.teal, fontSize: "0.875rem" }}>{children}</span>
  );
};

export default ProductLinkText;

import { COLORS } from "@/styles/colors";
import Link from "next/link";
import React from "react";

const HeaderLink = ({
  href,
  children,
  style,
}: {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <Link
      href={href}
      style={{
        color: COLORS.white,
        textDecoration: "none",
        margin: "0.5rem",
        ...style,
      }}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;

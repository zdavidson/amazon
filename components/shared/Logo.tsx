import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ dark }: { dark?: boolean }) => {
  return (
    <Link href="/" style={{ marginLeft: "1rem" }}>
      <Image
        alt="logo"
        src={dark ? "/amazon-logo-1.png" : "/amazon-logo-2.webp"}
        width={100}
        height={30}
      />
    </Link>
  );
};

export default Logo;

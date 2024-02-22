import { COLORS } from "@/styles/colors";
import { Button, SxProps, Theme } from "@mui/material";
import React from "react";

const CustomButton = ({
  children,
  sx,
  onClick,
}: {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  onClick: () => void;
}) => {
  return (
    <Button
      sx={{
        borderRadius: "1rem",
        backgroundColor: COLORS.yellow,
        color: COLORS.black,
        margin: "0.25rem 0",
        width: "100%",
        "&:hover": {
          backgroundColor: COLORS.darkYellow,
        },
        ...sx,
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

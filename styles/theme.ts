"use client";
import { createTheme } from "@mui/material";
import { COLORS } from "./colors";

const theme = createTheme({
  palette: {
    background: { default: COLORS.lightGray },
    mode: "light",
  },
  typography: {
    h1: {
      fontSize: "1.5rem",
    },
    h2: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.125rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.125rem",
    },
    body1: {
      fontSize: "0.875rem",
    },
  },
});

export default theme;

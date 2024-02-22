"use client";

import { store } from "@/store";
import { Provider as ReduxProvider } from "react-redux";

import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Provider;

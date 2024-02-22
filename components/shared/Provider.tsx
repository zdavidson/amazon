"use client";

import { store, persistedStore } from "@/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistedStore}>{children}</PersistGate>
    </ReduxProvider>
  );
};

export default Provider;

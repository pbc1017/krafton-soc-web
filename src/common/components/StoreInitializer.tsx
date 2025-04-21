"use client";

import { useEffect } from "react";

import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";

export const StoreInitializer = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      useResponsiveStore.getState().initialize();
    }
    return () => {
      useResponsiveStore.getState().cleanup();
    };
  }, []);

  return null;
};

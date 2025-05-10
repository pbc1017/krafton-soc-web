"use client";

import { useEffect, useState } from "react";

import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      useResponsiveStore.getState().initialize();
      setIsReady(true);
    }
    return () => {
      useResponsiveStore.getState().cleanup();
      setIsReady(false);
    };
  }, []);

  if (!isReady) {
    return null;
  }

  return <>{children}</>;
};

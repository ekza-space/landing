import React, { useEffect } from "react";

export const SayHi: React.FC = () => {
  useEffect(() => {
    const isProduction = process.env.NODE_ENV === "production";
    if (isProduction) {
      fetch("/hi", { method: "GET" });
    }
  }, []);
  return null;
};

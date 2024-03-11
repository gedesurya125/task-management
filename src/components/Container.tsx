import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="container mx-12 ">{children}</div>;
};

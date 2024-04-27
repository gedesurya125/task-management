import React from "react";
import { BackButton } from "./BackButton";

export const NavigationBar = () => {
  return (
    <div className="bg-foreground text-background py-1 px-4 flex">
      <BackButton />
      <AppName />
    </div>
  );
};

const AppName = () => {
  return <p className="font-bold">Task Management</p>;
};

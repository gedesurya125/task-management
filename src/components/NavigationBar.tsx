import React from "react";

export const NavigationBar = () => {
  return (
    <div className="bg-foreground text-background py-1 px-4">
      <AppName />
    </div>
  );
};

const AppName = () => {
  return <p className="font-bold">Task Management</p>;
};

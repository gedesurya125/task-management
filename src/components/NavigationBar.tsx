import React from "react";

export const NavigationBar = () => {
  return (
    <div className="bg-foreground text-background py-1 px-4">
      <AppName />
    </div>
  );
};

const AppName = () => {
  return <h1>Task Management</h1>;
};

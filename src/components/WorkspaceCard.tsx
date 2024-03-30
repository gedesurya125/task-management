import React from "react";
import { Card, CardTitle } from "./ui/card";
import { Plus } from "lucide-react";

export const WorkspaceCard = React.forwardRef<
  HTMLButtonElement,
  React.SelectHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <button ref={ref} {...props}>
      <Card className="p-4 flex items-center border-dashed border-black">
        <Plus />
        <CardTitle className="text-base mt-0 ml-2 ">Add Workspace</CardTitle>
      </Card>
    </button>
  );
});

WorkspaceCard.displayName = "WorkspaceCard";

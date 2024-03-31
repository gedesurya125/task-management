import React from "react";
import { Card, CardTitle } from "./ui/card";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkspaceCardProps
  extends React.SelectHTMLAttributes<HTMLButtonElement> {
  title?: string;
  dashed?: boolean;
  Icon?: React.ComponentType; //? source https://www.totaltypescript.com/pass-component-as-prop-react
}

export const WorkspaceCard = React.forwardRef<
  HTMLButtonElement,
  WorkspaceCardProps
>(({ title, dashed, Icon, ...props }, ref) => {
  return (
    <button ref={ref} {...props}>
      <Card
        className={cn(
          "p-4 flex items-center border-solid border-black",
          dashed ? "border-dashed" : ""
        )}
      >
        {!!Icon && <Icon />}
        <CardTitle className="text-base mt-0 ml-2 ">{title}</CardTitle>
      </Card>
    </button>
  );
});

WorkspaceCard.displayName = "WorkspaceCard";

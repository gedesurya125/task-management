import React from "react";
import { Card, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import { ClearButton } from "./ClearButton";

interface WorkspaceCardProps
  extends React.SelectHTMLAttributes<HTMLButtonElement> {
  title?: string;
  dashed?: boolean;
  Icon?: React.ComponentType; //? source https://www.totaltypescript.com/pass-component-as-prop-react
  asLink?: boolean;
  href?: string;
}

export const WorkspaceCard = React.forwardRef<
  HTMLButtonElement,
  WorkspaceCardProps
>(({ title, dashed, Icon, asLink, href, className, ...props }, ref) => {
  return (
    <ClearButton asLink={asLink} href={href} ref={ref} {...props}>
      <Card
        className={cn(
          "p-4 flex items-center border-solid border-black",
          dashed ? "border-dashed" : ""
        )}
      >
        {!!Icon && <Icon />}
        <CardTitle className="text-base mt-0 ml-2 ">{title}</CardTitle>
      </Card>
    </ClearButton>
  );
});

WorkspaceCard.displayName = "WorkspaceCard";

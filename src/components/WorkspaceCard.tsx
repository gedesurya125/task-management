import React from "react";
import { Card, CardTitle } from "./ui/card";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
  const Element = asLink
    ? ({ children }: { children: React.ReactNode }) => {
        return (
          <Link href={href || "/"} className={className}>
            {children}
          </Link>
        );
      }
    : ({ children }: { children: React.ReactNode }) => (
        <button ref={ref} className={className} {...props}>
          {children}
        </button>
      );

  return (
    <Element>
      <Card
        className={cn(
          "p-4 flex items-center border-solid border-black",
          dashed ? "border-dashed" : ""
        )}
      >
        {!!Icon && <Icon />}
        <CardTitle className="text-base mt-0 ml-2 ">{title}</CardTitle>
      </Card>
    </Element>
  );
});

WorkspaceCard.displayName = "WorkspaceCard";

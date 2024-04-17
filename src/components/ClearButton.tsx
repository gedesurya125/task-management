import Link from "next/link";
import React from "react";

interface ClearButtonProps
  extends React.SelectHTMLAttributes<HTMLButtonElement> {
  asLink?: boolean;
  href?: string;
}
export const ClearButton = React.forwardRef<
  HTMLButtonElement,
  ClearButtonProps
>(({ children, asLink, className, href, ...props }, ref) => {
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

  return <Element>{children}</Element>;
});
ClearButton.displayName = "ClearButton";

"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <Button
      variant="secondary"
      className="py-0 h-auto mr-5"
      onClick={() => {
        router.back();
      }}
    >
      {`< Go Back`}
    </Button>
  );
};

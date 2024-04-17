"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="ghost"
      onClick={() => {
        router.back();
      }}
    >
      {`< Go Back`}
    </Button>
  );
};

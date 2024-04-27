"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

interface ListCardProps {
  title: string;
  description: string;
}
export const ListCard = ({ title, description }: ListCardProps) => {
  return (
    <Card className="w-72 bg-blue-100 flex-shrink-0 ml-10 first-of-type:ml-0 max-h-full flex flex-col">
      <CardTitle className="p-2 bg-blue-500 rounded-lg">{title}</CardTitle>
      <CardContent className="overflow-auto">{description}</CardContent>
    </Card>
  );
};

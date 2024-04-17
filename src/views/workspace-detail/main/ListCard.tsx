import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

interface ListCardProps {
  title: string;
  description: string;
}
export const ListCard = ({ title, description }: ListCardProps) => {
  return (
    <Card className="w-96 bg-blue-100 flex-shrink-0">
      <CardTitle>{title}</CardTitle>
      <CardContent>{description}</CardContent>
    </Card>
  );
};

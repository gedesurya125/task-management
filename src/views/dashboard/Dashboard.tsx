import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { createUser } from "@/prismaClient/queries/createUser";
import React from "react";
import { AddNewWorkspaceButton } from "./AddNewWorkspaceButton";

export const Dashboard = () => {
  return (
    <div className="container grid grid-cols-5 gap-4 py-5">
      <AddNewWorkspaceButton />
    </div>
  );
};

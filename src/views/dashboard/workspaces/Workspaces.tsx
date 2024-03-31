import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { createUser } from "@/prismaClient/queries/createUser";
import React from "react";
import { AddNewWorkspaceButton } from "./AddNewWorkspaceButton";
import { Workspace } from "@prisma/client";
import { WorkspaceCard } from "@/components/WorkspaceCard";

export const Workspaces = ({ workspaces }: { workspaces: Workspace[] }) => {
  return (
    <div id="workspaces" className="container grid grid-cols-5 gap-4 py-5">
      {workspaces.map((workspace, index) => {
        return <WorkspaceCard key={index} title={workspace.title} />;
      })}
      <AddNewWorkspaceButton />
    </div>
  );
};

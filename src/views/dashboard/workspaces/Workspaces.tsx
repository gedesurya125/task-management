import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { createUser } from "@/prismaClient/queries/createUser";
import React from "react";
import { AddNewWorkspaceButton } from "./AddNewWorkspaceButton";
import { Workspace } from "@prisma/client";
import { WorkspaceCard } from "@/components/WorkspaceCard";
import { CardMenu } from "./CardMenu";

export const Workspaces = ({ workspaces }: { workspaces: Workspace[] }) => {
  return (
    <div id="workspaces" className="container grid grid-cols-5 gap-4 py-5">
      {workspaces.map((workspace, index) => {
        return (
          <ExistingWorkspaceCard
            key={index}
            index={index}
            workspace={workspace}
          />
        );
      })}
      <AddNewWorkspaceButton />
    </div>
  );
};

const ExistingWorkspaceCard = ({
  index,
  workspace,
}: {
  index: number;
  workspace: Workspace;
}) => {
  return (
    <WorkspaceCard
      key={index}
      title={workspace.title}
      asLink
      href={`/workspace/${workspace.id}`}
      className="justify-between flex"
    >
      <CardMenu workspaceId={workspace.id} />
    </WorkspaceCard>
  );
};

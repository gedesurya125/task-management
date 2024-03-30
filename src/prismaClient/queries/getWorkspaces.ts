import { Prisma } from "@prisma/client";
import { runQuery } from "./runQuery";

export const getWorkspaces = async () => {
  return await runQuery(async (prisma) => {
    const workspaces = await prisma.workspace.findMany();
    return workspaces;
  });
};

"use server";
import { runQuery } from "./runQuery";

export const deleteWorkspace = async ({ id }: { id: string }) => {
  console.log("deleting workspace");
  const workspace = await runQuery(async (prisma) => {
    return await prisma.workspace
      .delete({
        where: {
          id,
        },
      })
      .catch((e) => {
        console.log("error when deleting workspace ", e);
      });
  });

  return workspace;
};

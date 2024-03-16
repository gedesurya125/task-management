"use server";
import { runQuery } from "./runQuery";

export const createUser = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  console.log("creating workspace");
  const workspace = await runQuery(async (prisma) => {
    return await prisma.workspace
      .create({
        data: {
          title,
          description,
        },
      })
      .catch((e) => {
        console.log("error when creating workspace ", e);
      });
  });

  return workspace;
};

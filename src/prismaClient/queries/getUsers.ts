import { runQuery } from "./runQuery";

export const getUsers = async () => {
  return await runQuery(async (prisma) => {
    const users = await prisma.user.findMany();
    return users;
  });
};

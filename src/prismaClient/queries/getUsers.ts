import { runQuery } from "./runQuery";

export const getUsers = async () => {
  return runQuery(async (prisma) => {
    const patients = await prisma.user.findMany();
    return patients;
  });
};

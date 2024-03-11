"use server";
import { runQuery } from "./runQuery";

export const createUser = async () => {
  console.log("hi i am called");
  const user = await runQuery(async (prisma) => {
    const newUser = await prisma.user
      .create({
        data: {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          name: "Surya",
          role: "Editor",
          email: "gedesurya125@gmail.com",
          username: "gedesurya125@gmail.com",
          password: "Karisma125!",
        },
      })
      .catch((e) => {
        console.log("error when clreate user ", e);
      });

    return newUser;
  });

  return user;
};

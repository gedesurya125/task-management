import { prisma } from "../db";
import type { PrismaClient } from "@prisma/client";

export async function runQuery(
  callback: (prisma: PrismaClient) => Promise<any>
) {
  // ... you will write your Prisma Client queries here
  return await callback(prisma)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}

// runQuery()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

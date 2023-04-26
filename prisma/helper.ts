import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export function loopCreate(
  count = 1,
  callback: (prismaClient: PrismaClient) => void,
) {
  for (let i = 0; i < count; i++) {
    callback(prismaClient);
  }
}

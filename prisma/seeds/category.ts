// This module only exists after you running `npx prisma migrate dev`.
import { Random } from 'mockjs';
import { loopCreate } from '../helper';

export async function addCategory() {
  loopCreate(20, async (prisma) => {
    await prisma.category.create({
      data: {
        title: Random.ctitle(8),
      },
    });
  });
}

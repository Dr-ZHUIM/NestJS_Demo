// This module only exists after you running `npx prisma migrate dev`.
import { Random } from 'mockjs';
import { loopCreate } from '../helper';

export async function addArticle() {
  loopCreate(20, async (prisma) => {
    await prisma.article.create({
      data: {
        title: Random.ctitle(8),
        content: Random.cparagraph(50),
        categoryId: Random.integer(1, 20),
      },
    });
  });
}

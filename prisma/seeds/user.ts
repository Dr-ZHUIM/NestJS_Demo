// This module only exists after you running `npx prisma migrate dev`.
import { Random } from 'mockjs';
import { loopCreate } from '../helper';

export async function addUser() {
  loopCreate(20, async (prisma) => {
    await prisma.user.create({
      data: {
        email: Random.email(),
        password: '123qwe',
        github: Random.email(),
        avatar: Random.image('300x300'),
      },
    });
  });
}

// This module only exists after you running `npx prisma migrate dev`.
import { addUser, addCategory, addArticle } from './seeds';
addUser();
addCategory();
addArticle();

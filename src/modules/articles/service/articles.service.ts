import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ArticlesService {
  public prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  public getArticle(id: number) {
    return this.prisma.article.findUnique({
      where: {
        id,
      },
    });
  }
}
